# verbose-broccoli

<strong style="color:#06a71b;">Broccoli</strong> is a decentralized Application (dApp) for the [Ethereum Virtual Machine (EVM)](https://ethereum.org/en/developers/docs/evm/), able to be run on a blockchain itself. It provides a smart contract using an escrow system for buying and selling any goods.  
The frontend is developed with **Vue** and **TypeScript** and makes it possible to interact with the smart contract through an easy-to-use webpage.

## Deploying
Package management is done by _npm_.  
First, install the dependencies:
```sh
npm install
```

Start the webserver on localhost:
```sh
npm run dev
```

The smart contract is located in the directory `ethereum-contract`. It consists of a __truffle__ project for deploying and testing.  
First, change into the directory:
```sh
cd ethereum-contract
```

Check the `truffle-config.js` file. It describes how _truffle_ should handle deployment. Check out the [truffle docs](https://trufflesuite.com/docs/truffle/quickstart.html) for syntax and examples.

Compile the contract:
```sh
truffle compile
```

For dev usage, start truffles own blockchain instance:

```sh
truffle develop
```

Deploy the contract:
```sh
truffle migrate
```

Or: test the contract:
```sh
truffle test
```

Testing the contract can also be called from the projects root directory through `npm run test:truffle`

===============================================================

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
