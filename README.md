# Vitest AutoGen
![badgenpm](https://img.shields.io/npm/dm/vitest-autogen.svg) ![badgenpm](https://img.shields.io/npm/v/vitest-autogen.svg)

## About

Automates creation of initial unit test files for vite/vitest, taking dependencies into account.

Parsing and test generation is avaialable for the following exports:

* Typescript typed Functional components 🆕
* ES6 Classes default export or named exports
* Exported named functions and arrow functions
* Exported POJOs with methods
* Async functions and methods

This tool will take a ts file as input and generate a jest unit test file next to it with all imports mocked and tests stubs for every class method and function exported.

This project is inspired and started as a fork of [jest-test-gen](https://github.com/egm0121/jest-test-gen), which itself is a fork of [jasmine-unit-test-generator](https://github.com/FDIM/jasmine-unit-test-generator). However, this focuses on several changes:

 * Adds default templates for vite/vitest
 * Only uses Typescript as input
 * Remove functionality for React to focus on TS generation

## Usage

### Installation

run `npm i -g vitest-autogen`

### Basic Usage

run `vitest-autogen <path-to-file>`

## Development

It's probably best to:

* add an input file in `spec/fixtures` folder test.ts
* add a snapshot test for the input spec in `integration.spec.ts`
* verify that the snapshot is actually the wanted test output before commiting the updated snapshot.

Alternavely, you can:

* run `npm link`
* run `npm run build:dev`
* run `vitest-autogen <option>` in your project of choice

## Release
run `npm run build`
run `npm publish`
