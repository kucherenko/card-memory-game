## Deployment Instructions

To deploy the Card Memory Game, follow these steps:

1. Clone the repository
```sh
 git clone https://github.com/kucherenko/card-memory-game.git
```
2. Install dependencies
```sh
yarn install
```
3. Build the app for production
```sh
yarn build
```
4. Serve the app with a static server like [serve](https://www.npmjs.com/package/serve)
```sh
yarn global add serve
serve -s dist
```

## Additional Information

Make sure to set the proper API endpoint in the `src/api.js` file before building the app.