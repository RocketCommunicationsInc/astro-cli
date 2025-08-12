# Astro CLI

A CLI tool to help with all things [@astrouxds](https://github.com/RocketCommunicationsInc/astro).

This CLI provides commands to quickly scaffold new applications with Astro UXDS components and templates for React and Angular frameworks.

## Installation

### Local Development Installation

Since this package is not yet published on npm, you can install it locally using one of these methods:

#### Method 1: Link Globally (Recommended for Development)

```bash
# From the astro-cli project directory
npm run build
npm link

# Now you can use the CLI from anywhere
astro-cli react-template my-app
```

#### Method 2: Run Directly from Project

```bash
# From the astro-cli project directory
npm run build
./bin/run react-template my-app --noinstall
```

#### Method 3: Install from Local Path

```bash
# From any directory, install from the local astro-cli path
npm install -g /path/to/astro-cli

# Or install locally in a project
npm install /path/to/astro-cli
```

### Future: npm Installation (When Published)

Once published to npm, you'll be able to install it with:

```bash
npm install -g astro-cli
# or
npx astro-cli <command>
```

## Available Commands

### React Template

Create a new React application with Vite and Astro UXDS components:

```bash
astro-cli react-template <directory> [flags]
```

**Examples:**

```bash
# Create a React app in 'my-app' directory
astro-cli react-template my-app

# Skip automatic dependency installation
astro-cli react-template my-app --noinstall

# Use yarn for dependency installation
astro-cli react-template my-app --yarn

# Use npm for dependency installation
astro-cli react-template my-app --npm
```

### Angular Template

Create a new Angular application with Astro UXDS components:

```bash
astro-cli angular-template <directory> [flags]
```

**Examples:**

```bash
# Create an Angular app in 'my-angular-app' directory
astro-cli angular-template my-angular-app

# Skip automatic dependency installation
astro-cli angular-template my-angular-app --noinstall
```

### Global Flags

- `-n, --noinstall` - Skip the automatic installation of dependencies
- `--yarn` - Use yarn for dependency installation (exclusive with --npm and --noinstall)
- `--npm` - Use npm for dependency installation (exclusive with --yarn and --noinstall)

### Help

Get help for all commands:

```bash
astro-cli help
```

Get help for a specific command:

```bash
astro-cli help react-template
astro-cli help angular-template
```

## Development

### Running Commands Locally

You can test commands locally without installing globally:

```bash
# Build the project first
npm run build

# Run commands using the local binary
./bin/run react-template test-app --noinstall
./bin/run angular-template test-app --noinstall
```

### Development Tips

- Use the `--noinstall` flag when testing to skip dependency installation and speed up testing
- After making changes to the source code, run `npm run build` to recompile before testing
- Use `npm link` to create a global symlink for local development testing
- To unlink the global package: `npm unlink -g astro-cli`
- To update the linked package after changes: `npm run build` (no need to re-link)
