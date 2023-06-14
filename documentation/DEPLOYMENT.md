## Deployment

To deploy the game, you will need the following tools and technologies:

- Node.js
- Yarn package manager

Follow the steps below to deploy the game:

1. Clone the repository
```sh
 git clone https://github.com/kucherenko/card-memory-game.git
```
2. Install dependencies
```sh
yarn install
```
3. Build the app
```sh
yarn build
```
4. Serve the built app with an HTTP server (e.g. [serve](https://www.npmjs.com/package/serve))
```sh
yarn global add serve
serve -s dist
```
The app will be available at http://localhost:5000/.

If you encounter any issues during deployment, please consult the documentation or raise an issue.
