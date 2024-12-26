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

# Todos before 2.0 launch
- [x] fix slideout on the race details page not closing when selecting a different race
- [x] make sure all the routes have the same theme colors across the navigation
- [x] login - dark mode
- [x] register - dark mode
- [x] reset password - dark mode
- [x] forgot password - dark mode
- [x] privacy policy
- [x] terms of service
- [x] 404 page - dark mode
- [x] when you click a link on the mobile menu, it should close the menu
- [x] add logic for the random race in the main menu
- [x] Add darkmode support to tooltips
- [x] race details - fix race list in mobile view
- [x] profile - dark mode

# Future Todos
- [ ] race details - in dark mode highlight which race is being watched in the slideout
- [ ] add more features talking points to the homepage
- [ ] race details - page background color stopps at the end of the screen height (need example)
- [ ] forgot password - fix the disabled button color
- [ ] termly.io - check on the terms and privacy policy

<!-- Add tailwind css dark mode classes and only the classes. Keek any commented out code. -->
