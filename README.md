# Friend$hare

## Table of contents

-   [Development server](#development-server)
-   [Build](#build)
-   [Running unit tests](#running-unit-tests)
-   [Docker](#docker)
    -   [1 - Build the image](#1-build-the-image)
    -   [2 - Run the image](#2-run-the-image)
    -   [3 - Navigate](#3-navigate)
-   [Notes](#notes)

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests.

## Docker

### 1 - Build the image

`docker build -t friendshare-image .`

### 2 - Run the image

`docker run --name friendshare-container -d -p 8080:80 friendshare-image`

### 3 - Navigate

`http://localhost:8080/`

## Notes

-   Currency should be set as group attribute
