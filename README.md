# Astro CLI

| :exclamation: This repo is under development and not meant for use. Stay tuned! |
| ------------------------------------------------------------------------------- |

### Usage

You can install globally in order to run `astro-cli <command>` as intended doing:

```
npm i -g astro-cli
```

Or run commands using `bin/run <folder> <command>`

### Commands

`astro-cli --help` - List help prompt for all commands

`astro-cli starter-kits react [directory] [-n]` - Bootstrap a new @astrouxds/react app to the given directory. Use `-n` or `--noinstall` to skip the automatic install of dependencies.

### Development

When testing starter-kit commands, it's recommended to use the `-n` flag in order to skip the installation of dependencies since they can take a good chunk of time.
