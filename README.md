# Astro CLI

| :exclamation: This repo is under development and currently only supports the react command. Stay tuned for more! |
| ---------------------------------------------------------------------------------------------------------------- |

A CLI tool to help with all things [@astrouxds](https://github.com/RocketCommunicationsInc/astro).

_This cli currently only has the `astro-cli starter-kits react` command._

### Usage

`npx astro-cli starter-kits react`

Or you can install globally in order to run `astro-cli <command>`

```
npm i -g astro-cli
```

### Commands

`astro-cli --help` - List help prompt for all commands

`astro-cli starter-kits react [directory] [-n] [--yarn] [--npm]` - Bootstrap a new @astrouxds/react app to the given directory. Use `-n` or `--noinstall` to skip the automatic install of dependencies. Use the `--yarn` or `--npm` flags to specify which package manager to use.

### Development

Run commands using `bin/run <folder> <command>` or install globally.

When testing starter-kit commands, it's recommended to use the `-n` flag in order to skip the installation of dependencies since they can take a good chunk of time.
