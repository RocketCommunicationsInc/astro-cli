import { Command, Flags } from "@oclif/core";
import { Listr } from "listr2";
const http = require("https");
const fs = require("fs");
const process = require("process");
const execa = require("execa");

import {
  error,
  success,
  processLog,
  info,
  caution,
  infoBg,
} from "../../themes/themes";

export default class React extends Command {
  static description =
    "Bootstrap a new React app using the @astrouxds/react wrapper.";

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
      description: "The directory to hold the new React app.",
      required: true,
    },
  ];

  inSrc: boolean = false;
  inPublic: boolean = false;

  private async writeFile(fileName: string) {
    let url: string;
    if (!this.inSrc && !this.inPublic) {
      url =
        "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/" +
        fileName;
    } else if (this.inSrc && !this.inPublic) {
      url =
        "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/src/" +
        fileName;
    } else {
      url =
        "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/public/" +
        fileName;
    }

    const file = fs.createWriteStream(`${fileName}`);

    await this.fetchFile(url)
      .then((res) => {
        res.pipe(file);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  private async fetchFile(url: string) {
    return new Promise<any>((resolve, reject) => {
      http.get(url, (res: any) => {
        if (res.statusCode === 200) {
          resolve(res);
        } else reject(`${res.statusCode} - Could not fetch file from ${url}`);
      });
    });
  }

  private async changeDir(dir: string) {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        process.chdir(dir);
      } else {
        process.chdir(dir);
      }
    } catch {
      throw new Error(
        `An error occured while trying to change directory to ${dir}`
      );
    }
  }

  private async writeRoot(dir: string) {
    try {
      await this.changeDir(`./${dir}`);
      await this.writeFile("package.json");
      await this.writeFile("README.md");
      await this.writeFile(".gitignore");
    } catch (err) {
      throw new Error(`${error(`${err}`)}`);
    }
  }

  private async writeSrc() {
    try {
      await this.changeDir("./src");
      this.inSrc = true;
      await this.writeFile("App.css");
      await this.writeFile("App.js");
      await this.writeFile("App.test.js");
      await this.writeFile("index.css");
      await this.writeFile("index.js");
      await this.writeFile("reportWebVitals.js");
      await this.writeFile("setupTests.js");
    } catch (err) {
      throw new Error(`${error(`${err}`)}`);
    }
  }

  private async writePublic() {
    try {
      await this.changeDir("../");
      await this.changeDir("./public");
      this.inPublic = true;
      await this.writeFile("favicon.ico");
      await this.writeFile("index.html");
      await this.writeFile("logo512.png");
      await this.writeFile("logo192.png");
      await this.writeFile("manifest.json");
      await this.writeFile("robots.txt");
    } catch (err) {
      throw new Error(`${error(`${err}`)}`);
    }
  }

  private nextSteps(dir: string, manager: string) {
    this.log(`${infoBg(`******* Next Steps *********`)}`);
    this.log(`${infoBg(`cd ${dir}                   `)}`);
    //if noinstall is true, next steps should say to npm i or yarn
    if (React.flags.noinstall) {
      manager === "npm"
        ? this.log(`${infoBg(`npm install                 `)}`)
        : this.log(`${infoBg(`yarn                        `)}`);
    }
    this.log(`${infoBg(`${manager} start                   `)}`);
    this.log(`${infoBg(`Thanks for using Astro UXDS!`)}`);
    this.log(`${infoBg(`****************************`)}`);
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(React);
    const { flags } = await this.parse(React);

    const dir = args.directory;
    let manager = "npm";
    this.log(
      `${processLog(
        `Creating a new Astro UXDS React app in: ${info(`${dir}`)}`
      )}`
    );
    const tasks = new Listr(
      [
        {
          title: `${processLog(`Writing root directory...`)}`,
          task: async () =>
            await this.writeRoot(dir).catch((err) => {
              throw new Error(err);
            }),
        },
        {
          title: `${processLog(`Writing src directory...`)}`,
          task: async () =>
            await this.writeSrc().catch((err) => {
              throw new Error(err);
            }),
        },
        {
          title: `${processLog(`Writing public directory...`)}`,
          task: async () =>
            await this.writePublic().catch((err) => {
              throw new Error(err);
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
      this.nextSteps(dir, manager);
    });
  }
}
