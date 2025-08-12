import { Command, Flags } from "@oclif/core";
import {
  caution,
  error,
  info,
  infoBg,
  processLog,
  success,
} from "../themes/themes";

import { Listr } from "listr2";

const fs = require("fs");
const process = require("process");
const path = require("path");
const execa = require("execa");

export default class Template extends Command {
  static description =
    "Initialize a Angular app using the Astro UXDS components and templates.";

  static examples = ["<%= config.bin %> <%= command.id %> my-new-app"];

  static flags = {
    // flag with a boolean (-n, --noinstall=boolean)
    noinstall: Flags.boolean({
      char: "n",
      description: "Skip the automatic install of dependencies.",
      default: false,
      exclusive: ["yarn", "npm"],
    }),
    yarn: Flags.boolean({
      description: "Install dependencies with yarn",
      default: false,
      exclusive: ["npm", "noinstall"],
    }),
    npm: Flags.boolean({
      description: "Install dependencies with NPM",
      default: false,
      exclusive: ["yarn", "noinstall"],
    }),
  };

  static args = [
    {
      name: "directory",
      description: "The directory to hold the new Angular app.",
      required: true,
    },
  ];

  inSrc: boolean = false;
  inPublic: boolean = false;

  private async copyAngularTemplate(dir: string) {
    try {
      // Create target directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Change to the target directory
      process.chdir(dir);

      // Get the path to the template directory
      const templateDir = path.join(
        __dirname,
        "..",
        "..",
        "templates",
        "angular-template"
      );

      // Copy the template directory recursively
      this.copyDirectoryRecursively(templateDir, ".");
    } catch (err: any) {
      throw new Error(`${error(`${err.message || err}`)}`);
    }
  }

  private copyDirectoryRecursively(source: string, destination: string) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    // Read directory contents
    const files = fs.readdirSync(source);

    // Copy each file/directory
    for (const file of files) {
      const sourcePath = path.join(source, file);
      const destinationPath = path.join(destination, file);

      // Check if it's a directory or file
      if (fs.statSync(sourcePath).isDirectory()) {
        // Recursively copy directory
        this.copyDirectoryRecursively(sourcePath, destinationPath);
      } else {
        // Copy file
        fs.copyFileSync(sourcePath, destinationPath);
      }
    }
  }

  private nextSteps(dir: string, manager: string, noinstall: boolean) {
    // Calculate message length with minimum of 30 characters
    const msgLength = Math.max(dir.length + 3, 30);

    // Helper function to pad messages to consistent length
    const padMessage = (message: string) => {
      return message.padEnd(msgLength);
    };

    // Create header/footer with consistent length
    const headerFooter = "*".repeat(msgLength);

    this.log(`${infoBg(`${headerFooter}`)}`);
    this.log(`${infoBg(`Next Steps:${" ".repeat(msgLength - 11)}`)}`);
    this.log(`${infoBg(padMessage(`cd ${dir}`))}`);

    // If noinstall is true, next steps should say to npm i or yarn
    if (noinstall) {
      const installCmd = manager === "npm" ? "npm install" : "yarn";
      this.log(`${infoBg(padMessage(installCmd))}`);
    }

    this.log(`${infoBg(padMessage(`${manager} start`))}`);
    this.log(`${infoBg(padMessage(`Thanks for using Astro UXDS!`))}`);
    this.log(`${infoBg(`${headerFooter}`)}`);
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(Template);
    const { flags } = await this.parse(Template);

    const dir = args.directory;
    let manager = "npm";
    this.log(
      `${processLog(
        `Creating a new Astro UXDS Angular app in: ${info(`${dir}`)}`
      )}`
    );
    const tasks = new Listr(
      [
        {
          title: `${processLog(`Copying Angular template...`)}`,
          task: async () =>
            await this.copyAngularTemplate(dir).catch((err: Error) => {
              throw new Error(err.message);
            }),
        },
        {
          title: `${processLog(`Installing depedencies with npm...`)}`,
          enabled: () => flags.npm || (!flags.noinstall && !flags.yarn),
          task: async (ctx: any, task: any) =>
            execa("npm", ["install"]).catch(() => {
              ctx.npm = false;
              manager = "yarn";
              task.skip(
                `${caution(`npm not installed, using a yarn install instead`)}`
              );
            }),
        },
        {
          title: `${processLog(`Installing depedencies with yarn...`)}`,
          enabled: (ctx: any) =>
            ctx.npm === false || (flags.yarn && !flags.noinstall),
          task: async (task: any) =>
            execa("yarn").catch(() => {
              task.skip(
                `${caution(
                  `yarn not detected, please manually install dependencies.`
                )}`
              );
            }),
        },
      ],
      {
        exitOnError: true,
        concurrent: false,
      }
    );

    tasks.run().then(() => {
      this.log(`${success(`Finished!`)}`);
      this.nextSteps(dir, manager, flags.noinstall);
    });
  }
}
