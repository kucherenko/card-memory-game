## Deployment

To deploy the project on different environments, follow these instructions:

### Development

1. Clone the repository
```sh
 git clone https://github.com/kucherenko/card-memory-game.git
```
2. Install dependencies
```sh
yarn install
```
3. Run the app
```sh
yarn serve
```
The app will be available at http://localhost:8080/

### Staging

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
The app will be available at http://localhost:5000/

### Production

1. Clone the repository
```sh
 git clone https://github.com/kucherenko/card-memory-game.git
```
2. Install dependencies
```sh
yarn install
```
3. Build the app
```
FROM node:12-alpine as build

WORKDIR /app

# Copy the files needed for dependency installation
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# Build the app
RUN yarn build
```
4. Build the docker container
```sh
docker build -t card-memory-game .
```
5. Run the container
```sh
docker run -p 8080:80 card-memory-game
```
The app will be available at http://localhost:8080/
