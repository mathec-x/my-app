# backend

## Description
This project is a Node.js application. It includes various scripts for development, testing, and production environments.

## Requirements
- Node.js >= v20.19.4
- Docker

# Index

* [Installation](#installation)
* [Scripts](#scripts)
* [Running the Project](#running-the-project)
    * [Using Node.js](#using-nodejs)
    * [Using Docker](#using-docker)
* [Dev Dependencies](#dev-dependencies)
* [Engines](#engines)
* [Architecture](#architecture)


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Scripts

- `test`: Runs tests with Jest and generates coverage reports.
- `dev`: Starts the development server with `tsx` and loads environment variables from `.env.development`.
- `start`: Runs the built application from the `dist` directory.
- `build`: Builds the application using `tsup`.
- `test:watch`: Runs tests in watch mode without generating coverage reports.
- `docker:dev`: Builds and runs the development Docker container.
- `docker:run:dev`: Runs the development Docker container.
- `docker:build:dev`: Builds the development Docker image.
- `docker:prod`: Builds and runs the production Docker container.
- `docker:run:prod`: Runs the production Docker container.
- `docker:build:prod`: Builds the production Docker image.
- `docker:db:up`: Starts the PostGIS database container.
- `docker:db:down`: Stops the PostGIS database container.

## Running the Project

### Using Node.js

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Build the project:
    ```sh
    npm run build
    ```

3. Start the built project:
    ```sh
    npm start
    ```

### Using Docker

1. Build and run the development container:
    ```sh
    npm run docker:dev
    ```

2. Build and run the production container:
    ```sh
    npm run docker:prod
    ```

## Dev Dependencies

- `@eslint/js`: ESLint configuration for JavaScript.
- `@types/jest`: TypeScript definitions for Jest.
- `@types/supertest`: TypeScript definitions for Supertest.
- `dotenv-cli`: CLI for loading environment variables from `.env` files.
- `eslint`: Linter for JavaScript and TypeScript.
- `globals`: Global variables for ESLint.
- `jest`: JavaScript testing framework.
- `supertest`: HTTP assertions for testing.
- `ts-jest`: TypeScript preprocessor for Jest.
- `ts-node-app`: TypeScript execution environment for Node.js.
- `tsconfig-paths`: Load TypeScript configuration paths.
- `tsup`: TypeScript bundler.
- `tsx`: TypeScript execution environment.
- `typescript`: TypeScript language.

## Engines

This project requires Node.js version >= v20.19.4.
