# React startup with Redux

🔋 by **Webpack**, **TypeScript**, **Jest** and **Cypress**.

[![Build Status](https://dev.azure.com/sebastianbusek/React%20starter/_apis/build/status/Sebosek.React-Starter?branchName=master)](https://dev.azure.com/sebastianbusek/React%20starter/_build/latest?definitionId=14&branchName=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Sebosek_React-Starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=Sebosek_React-Starter)
[![DeepScan grade](https://deepscan.io/api/teams/12473/projects/15507/branches/310799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=12473&pid=15507&bid=310799)

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

## SVG support
SVG files are supported in a stupidly easy way to use, thanks to `file-loader` and `@svgr/webpack`. 

If you want to use an SVG inside the image tag, just import the SVG file and put it into the `<img />` tag, as it's shown in the code snippet.
```tsx
import reactLogo from './logo.svg';

const Image = <img src={reactLogo} alt="React logo" />
```

But sometimes you want to use the SVG file as the React component and this is exactly the time when `@svgr/webpack` comes to the party and shines. Just import the SVG file as liked it would be a named export.

```tsx
import { ReactComponent as ReactLogo } from './logo.svg';

const WithImage = <><ReactLogo /></>
```

## Docker support
Startup comes with Docker support. The application is served by Caddy server, the configuration for Caddy server is in the Caddyfile.
To build the Docker file use
`docker build . --tag react-startup:alpha`.

To start that Docker image `docker run --rm -it -p 127.0.0.1:9090:80 react-startup:alpha`.

## Todo
- [x] Add ESLint
- [x] Add Dockerfile
- [x] Add images imports
- [x] Add SVG imports
- [x] Add Azure CI pipeline including Unit tests and Cypress
- [x] Add SonarQube via SonarCloud
- [ ] Dependencies cleanup
- [ ] Add font-types imports