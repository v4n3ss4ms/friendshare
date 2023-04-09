# Friendshare

## Table of contents

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Docker

### Build the image
`docker build -t friendshare-image .` 

### Run the image
`docker run --name friendshare-container -d -p 8080:80 friendshare-image`

### Navigate
`http://localhost:8080/` 

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Notes
  * Currency should be set as group attribute 