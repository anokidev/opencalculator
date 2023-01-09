# Contributing

Due to the project's nature of OpenCalc is being open source, the source code is available to the public.

## Before contributing....

### Read the License

I prefer a simple open-source license, so I decided to choose MIT License as our new license.
You can read the license by clicking [here](./LICENSE.md).

### Know the Technologies

Due to complexity of the project, I decided to use Turborepo for managing this repo. This repo is now a Monorepo! Managed via NPM workspaces combined with the power of Turborepo.

**Frontend**:
- [Svelte](https://svelte.dev/) : Frontend framework for building UI that is simple.
- [Sveltekit](https://kit.svelte.dev/) : An extension to Svelte that provides multi-pages app development experience.
- [Vite](https://vitejs.dev/) : Similar to Webpack, required by Sveltekit for packaging and bundling.
- [Tailwind](https://tailwindcss.com/) : Utility-based CSS framework for styling UIs. 
- [PostCSS](https://postcss.org/) : Tailwind is a PostCSS plugin, so it is required by Tailwind.
- [SCSS](https://sass-lang.com/) : A variant of CSS that is better.
- [WebGL](https://webgl.org/) : Low-level Graphics Library for the Web.

**Backend**:
- [Nest.js](https://nestjs.com/) : Backend framework for building REST and GraphQL APIs.
- [Supabase](https://supabase.com/) : Backend, as a service.
- [PostgreSQL](https://www.postgresql.org/) : SQL-based relational database that is used in Supabase.

**Both**:
- [ESLint](https://eslint.org/) : Linting Javascript with ES standard.
- [Preetier](https://prettier.io/) : Make your code pretty to fullfill the standard! 
- [Turborepo](https://turbo.build/repo) : For monorepo management.
- [Jest](https://jestjs.io/) : Testing the repo, mate!

## Let's Go!

### Directories

This will explain to you the meaning of each directory:

**MONOREPO** :

- ```/packages/``` : Contains shared modules that are used by all sites.
  - ```/configs/``` : Shared configs (Tailwind, PostCSS, ESLint). Vite does not support require module, sad.
  - ```/eslint-config-custom/``` : Custom ESLint configs from Turbo (Default).
  - ```/ui/``` : UI components, built with the help of Svelte, SCSS, PostCSS, and Tailwind.
- ```/sites``` : Well, the websites!
  - ```/frontend/``` : Sveltekit + Vite + Typescript project that uses Tailwind, PostCSS, and SCSS for handling UI.
  - ```/backend/```  : Nest.JS + Typescript + Supabase project for handling databases and user authentication.

**FRONTEND** :

- ```./src/``` : Src folder.
  - ```/routes/``` : Routes folder.
    - ```/account/``` : Account folder, for signing and logging.
    - ```calculators/``` : The entire point of the website, the calculator.
    - ```help/``` : Help and support.
    - ```home/``` : Home folder, the main page.
    - ```error.svelte``` : Error template file.
    - ```layout.svelte``` : Layout template.
  - ```app.css``` : Main CSS file, contains a direction for Tailwind.
  - ```app.d.ts``` : Defining types.
  - ```app.html``` : HTML template file.
- ```./static/``` : Static folder.

**BACKEND** :

- ```./src/``` : Src folder.
  - ```modules/``` : Modules folder.
    - ```projects/``` : Projects module, for handling projects.
    - ```user/``` : User module, for handling user auth.
  - ```root/``` : Root module folder.
  - ```app.module.ts``` : App module file.
  - ```main.ts``` : Entrypoint file.
- ```./test/``` : Test folder.

### Steps

When contributing, follow these rules!
- The code is not stolen from a closed-source project/software.
- If needed, the code must be provided with a test case.
- When creating a pull request, link the pull request to an issue.