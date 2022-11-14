# OpenMath

OpenMath is a free and open-source collection of graphical calculator utillity apps, that you can use via a website!
The entire concept of OpenMath revolves around objects. Each of them contains specific properties that the user can manipulate, such as:
- Points.
- Equations.
- Length.
- Etc.

## Features

OpenMath provides numerous features such as 2D graphical calculator that supports 2D shapes and lines. OpenMath also provides 3D graphical calculator that supports 3D shapes and lines (This time with z position property).

OpenMath also has the ability to collaborate together real-time, share the projects to a lot of platforms, download the project in the form of a single file, and store the projects in the cloud, which requires user authentication system.

## Technology

So yeah, due to complexity of the project, I decided to use Turborepo for managing this repo. This repo is now a Monorepo! Managed via NPM workspaces combined with the power of Turborepo. The frontend server is seperated from the backend server. Frontend's technologies are different from the backend's technologies.

Both:
- [ESLint](https://eslint.org/) : Linting Javascript with ES standard.
- [Preetier](https://prettier.io/) : Make your code pretty to fullfill the standard! 
- [Turborepo](https://turbo.build/repo) : For monorepo management.

Frontend:
- [Svelte](https://svelte.dev/) : Frontend framework for building UI that is simple.
- [Sveltekit](https://kit.svelte.dev/) : An extension to Svelte that provides multi-pages app development experience.
- [Vite](https://vitejs.dev/) : Similar to Webpack, required by Sveltekit for packaging and bundling.
- [Tailwind](https://tailwindcss.com/) : Utility-based CSS framework for styling UIs. 
- [PostCSS](https://postcss.org/) : Tailwind is a PostCSS plugin, so it is required by Tailwind.
- [SCSS](https://sass-lang.com/) : A variant of CSS that is better.
- [Playwright](https://playwright.dev/) : Testing, mate!

Backend:
- [Nest.js](https://docs.nestjs.com/) : Backend framework for building services.
- [Supabase](https://supabase.com/) : Open-source Firebase alternative.
- [Jest](https://jestjs.io/) : For testing, mate!

## Directories

This will explain to you the meaning of each directory:

- ```packages``` : Contains shared modules that are used by all sites.
  - ```configs``` : Shared configs (Tailwind, PostCSS, ESLint). Vite does not support require module, sad.
  - ```eslint-config-custom``` : Custom ESLint configs from Turbo (Default).
  - ```ui``` : UI components, built with the help of Svelte, SCSS, PostCSS, and Tailwind.
- ```sites``` : Well, the websites!
  - ```frontend``` : Sveltekit + Vite + Typescript project that uses Tailwind, PostCSS, and SCSS.
  - ```backend``` : Nest.js project for 'contact layer' between frontend and Supabase.

## License

OpenMath is open-source, licensed in [MIT License](./LICENSE.md).