# React startup with Redux

🔋 by **Webpack**, **TypeScript**, **Jest** and **Cypress**.

The starter contains a single Counter component, how you're going to use React hierarchy it's up to you, however I'm going to use separations by pages.
Each page is made by a dictionary containing components and redux. 

The tests live near by source code.
Unit test are using `*.test.js` or `*.test.ts` naming convetion, Cypress end to end tests are using `*.spes.js` or `*.spec.ts` naming convention.

## Commands
### `yarn run serve`
Serves the application with webpack dev server.

### `yarn build`
Builds the application in **production** mode into `./public` output directory.

### `yarn run dev`
Builds the application in **development** mode into `./public` output directory.

### `yarn start`
Starts static file server with the application from `./public` directory on at http://localhost:5000.

### `yarn test`
Runs Jest tests.

### `yarn run cypress`
Opens Cypress integration testing tool. 

### `yarn lint`
Runs TypeScript compiler without any output to check type correctness and then runs ESLint.

## Docker
Startup comes with Docker support. The application is served by Caddy server, the configuration for Caddy server is in the Caddyfile.
To build the Docker file use
`docker build . --tag react-startup:alpha`.

To start that Docker image `docker run --rm -it -p 127.0.0.1:9090:80 react-startup:alpha`.

## Todo

- [x] Add ESLint
- [x] Add Dockerfile
- [ ] Add font-types imports
- [x] Add images imports
- [x] Add SVG imports
- [ ] Dependencies cleanup