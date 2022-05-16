import { Command } from "@oclif/core";
const http = require("https");
const fs = require("fs");
const process = require("process");
const execa = require("execa");
const Listr = require("listr");

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

  // static flags = {
  //   // flag with a value (-n, --name=VALUE)
  //   name: Flags.string({char: 'n', description: 'name to print'}),
  //   // flag with no value (-f, --force)
  //   force: Flags.boolean({char: 'f'}),
  // }

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
        this.log(`${error(`[Error] - ${err}`)}`);
      });
  }

  private async fetchFile(url: string) {
    return new Promise<any>((resolve, reject) => {
      http.get(url, (res: any) => {
        if (res.statusCode === 200) {
          resolve(res);
        } else reject(`Failure to fetch file at ${url}`);
      });
    });
  }

  private async changeDir(dir: string) {
    // try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      process.chdir(dir);
    } else {
      process.chdir(dir);
    }
    // } catch {
    //   this.log(
    //     `${error(
    //       `[Error] - An error occured when trying to change directory.`
    //     )}`
    //   );
    // }
  }

  private async writeRoot(dir: string) {
    try {
      await this.changeDir(`./${dir}`);
      await this.writeFile("package.json");
      await this.writeFile("README.md");
      await this.writeFile(".gitignore");
    } catch {
      this.log(
        `${error(
          `[Error] - An error occured while writing the ${dir} directory`
        )}`
      );
    }
  }

  private async writeSrc() {
    // try {
    await this.changeDir("./src");
    this.inSrc = true;
    await this.writeFile("App.css");
    await this.writeFile("App.js");
    await this.writeFile("App.test.js");
    await this.writeFile("index.css");
    await this.writeFile("index.js");
    await this.writeFile("reportWebVitals.js");
    await this.writeFile("setupTests.js");
    // } catch {
    //   this.log(
    //     `${error(
    //       `[Error] - An error occured while writing the ./src directory`
    //     )}`
    //   );
    // }
  }

  private async writePublic() {
    // try {
    await this.changeDir("../");
    await this.changeDir("./public");
    this.inPublic = true;
    await this.writeFile("favicon.ico");
    await this.writeFile("index.html");
    await this.writeFile("logo512.png");
    await this.writeFile("logo192.png");
    await this.writeFile("manifest.json");
    await this.writeFile("robots.txt");
    // } catch {
    //   this.log(
    //     `${error(
    //       `[Error] - An error occured while writing the ./public directory`
    //     )}`
    //   );
    // }
  }

  private nextSteps(dir: string, manager: string) {
    this.log(`${infoBg(`******* Next Steps *********`)}`);
    this.log(`${infoBg(`cd ${dir}                   `)}`);
    this.log(`${infoBg(`${manager} start                   `)}`);
    this.log(`${infoBg(`Thanks for using Astro UXDS!`)}`);
    this.log(`${infoBg(`****************************`)}`);
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(React);
    const dir = args.directory;
    let manager = "npm";
    this.log(
      `${processLog(
        `Creating a new Astro UXDS React app in: ${info(`${dir}`)}`
      )}`
    );
    const tasks = new Listr([
      {
        title: `${processLog(`Writing root directory...`)}`,
        task: () => this.writeRoot(dir),
      },
      {
        title: `${processLog(`Writing src directory...`)}`,
        task: () => this.writeSrc(),
      },
      {
        title: `${processLog(`Writing public directory...`)}`,
        task: () => this.writePublic(),
      },
      {
        title: `${processLog(`Installing depedencies with npm...`)}`,
        task: (ctx: any, task: any) =>
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
        enabled: (ctx: any) => ctx.npm === false,
        task: () => execa("yarn"),
      },
    ]);

    tasks
      .run()
      .then(() => {
        this.log(`${success(`Finished!`)}`);
        this.nextSteps(dir, manager);
        this.log("Listr errors: ", tasks.err);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}

// ! Current issues:
/**
 * 1 - Error checking - if you misname one of the files for the writeFile method, it will not throw an error.
 *
 */
