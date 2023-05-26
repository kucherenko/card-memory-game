# Card Memory Game

![Game Logo](src/assets/logo.png)

[![Build Status](https://travis-ci.com/kucherenko/card-memory-game.svg?branch=master)](https://travis-ci.com/kucherenko/card-memory-game)
[![codecov](https://codecov.io/gh/kucherenko/card-memory-game/branch/master/graph/badge.svg)](https://codecov.io/gh/kucherenko/card-memory-game)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Main Technologies](#main-technologies)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## About

This is a card memory game written in Vue.js.

## Getting Started

To get a local copy up and running follow these steps:

1. Clone the repository
```sh
 git clone https://github.com/kucherenko/card-memory-game.git
```
2. Install dependencies
```sh
yarn install
```
3. Run the app in development mode
```sh
yarn serve
```

## Main Technologies

- [Vue.js](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuesax](https://lusaxweb.github.io/vuesax/)

## Usage

To play the game, click on the cards to flip them over. Match pairs to progress to the next level.

## Testing

This project uses [Jest](https://jestjs.io/) and [vue-test-utils](https://vue-test-utils.vuejs.org/) for unit testing. To run the tests:

```sh
yarn test:unit
```

## Contributing

We welcome contributions to the project. To contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name. Example: features/implement-scoring-system
3. Make your changes.
4. Write tests and ensure existing tests pass.
5. Squash your commits into a single commit with a descriptive message following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
6. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.