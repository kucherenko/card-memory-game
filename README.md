# Card Memory Game

![Game Logo](src/assets/logo.png)

[![Build Status](https://travis-ci.com/kucherenko/card-memory-game.svg?branch=master)](https://travis-ci.com/kucherenko/card-memory-game)
[![codecov](https://codecov.io/gh/kucherenko/card-memory-game/branch/master/graph/badge.svg)](https://codecov.io/gh/kucherenko/card-memory-game)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Main Technologies](#main-technologies)
- [Tests](#tests)
- [Contributing](#contributing)
- [Areas to Improve](#areas-to-improve)
- [Roadmap](#roadmap)
- [Support](#support)
- [License](#license)

## About

This is a card memory game written in Vue.js. Players can click on cards to flip them over and try and find the matching pairs before the timer runs out.

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
3. Start the app in development mode
```sh
yarn serve
```

## Main Technologies

- [Vue.js](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuesax](https://lusaxweb.github.io/vuesax/)

## Tests

This project uses [Jest](https://jestjs.io/) and [vue-test-utils](https://vue-test-utils.vuejs.org/) for unit testing. To run the tests, use the following command:

```sh
yarn test:unit
```

## Contributing

If you would like to contribute to this project, please see our [contributing guidelines](CONTRIBUTING.md).

## Areas to Improve

1. Increase test coverage by adding more tests.
2. Improve accessibility by adding ARIA tags and keyboard navigation support.
3. Add a scoring system and save high scores.
4. Add more card sets and difficulties.
5. Implement multiplayer mode.

## Roadmap

No current plans for future development.

## Support

For questions, issues, or feature requests, please contact the project creator at kucherenko.andrey@gmail.com.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.