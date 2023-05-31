# Turborepo - Naturaily

## 📚 Features

- 🏎️ **[Next.js](https://nextjs.org/)** - Fast by default, with config optimized for performance (app routing).
- 🌈 **[Turborepo](https://turbo.build/repo)** - Turborepo is a high-performance build system for JavaScript and TypeScript codebases.
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code.
- 🧪 **[Jest](https://jestjs.io/)** and **[React Testing Library](https://testing-library.com/react)** - For rock-solid unit and integration tests.
- 📕 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components.
- 💎 **[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)** - Create a consistent, reusable, and atomic design system.
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows.
- 💻 **[T3 Env](https://env.t3.gg/)** - Manage your validation for type-safe environment variables.
- 📚 **[Storyblok](https://www.storyblok.com/)** - Ready integration with CMS.
- 🧬 **[Codegen](https://the-guild.dev/graphql/codegen)** - Generate code from your GraphQL schema.
- 🖥️ **[TanStack Query (react-query)](https://tanstack.com/query/latest/)** - Powerful asynchronous state management for TS/JS.
- 🔥 **[Framer motion](https://www.framer.com/motion/)** - Powerful animation library.

## Table of Contents

- [Turborepo Next.js Boilerplate](#turbo-repo-naturaily)
  - [📚 Features](#-features)
  - [Table of Contents](#table-of-contents)
  - [📦 Workspaces available](#-workspaces-available)
    - [🖥️ Apps](#-apps)
    - [📄 Packages](#-packages)
    - [📚 Storyblok](#-storyblok)
  - [👌 Requirements](#-requirements)
  - [🎯 Getting Started](#-getting-started)
  - [📃 Scripts Overview](#-scripts-overview)

## 📦 Workspaces available

### 🖥️ Apps

- app
- storybook-ui

### 📄 Packages

- @natu/env
- eslint-config-custom
- @natu/googletagmanager
- @natu/hooks
- @natu/jest-config
- @natu/next-link
- @natu/responsive-image
- @natu/react-query-gql
- @natu/storybook
- tailwind-config
- tsconfig
- @natu/ui
- @natu/utils

### 📚 Storyblok

- @natu/storyblok-api
- @natu/storyblok-page-compositions
- @natu/storyblok-ui
- @natu/storyblok-utils

## 👌 Requirements

```sheel
node - v16.14.0
yarn - v1.22.17
```

### ✅ Node

To install Node.js, you can follow the nvm documentation available at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

```bash
nvm use 16
```

Once installed, you can check the version using the following command:

```bash
node --version
```

Ensure that the command returns `v16.14.0` to confirm that you have the correct version installed.

### ✅ Yarn

The Turbo Repo utilizes Yarn package manager.

To install Yarn, you can follow the official documentation available at [https://yarnpkg.com](https://yarnpkg.com). Once installed, you can check the version using the following command:

```bash
yarn --version
```

Ensure that the command returns `1.22.17` to confirm that you have the correct version installed.

## 🎯 Getting Started

To start using the Turbo Repo with Node.js and Yarn, follow these steps:

1. Clone the Turbo Repo repository to your local machine.

2. Navigate to the cloned repository:

   ```bash
   cd <your folder>
   ```

3. Install project dependencies:

   ```bash
   yarn install
   ```

4. Fill in the required environment variables. (check `.env.example` file) in the appropriate packages.

5. Run the development server:

   ```bash
   yarn dev
   ```

6. Start using the Turbo Repo according to the available documentation and guidelines.

For more information on how to use the Turbo Repo and its features, please refer to the specific documentation provided with the repository.

## 📃 Scripts Overview

All commands are available in the main `package.json`
