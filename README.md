# vite-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Big fix list
- [ ] Mark watched is breaking the iframe player
- [ ] On medium screen size the parts on the bottom of the race details page are not really large to keep the screen from showing the white at the bottom
- [ ] Fix the validation when trying to add the link to a race that has already happened but not yet been added
- [ ] Forgot password - fix the disabled button color
- [ ] Lint the full application
- [ ] termly.io - check on the terms and privacy policy

# New features to add
- [ ] Add more features talking points to the homepage
  - [ ] Race ratings
  - [ ] Help keep the information up to date
  - [ ] Subscribe to be notified when new races are added to the site
- [ ] Get a weekly email with with the races that were added in the last week and the upcoming races for the weekend

<!-- Add tailwind css dark mode classes and only the classes. Keek any commented out code. -->
