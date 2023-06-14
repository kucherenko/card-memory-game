## Deploy

1. Build the app for production
```sh
yarn build
```
2. Install [Firebase CLI](https://firebase.google.com/docs/cli#install-cli-mac-linux) globally
```sh
npm install -g firebase-tools
```
3. Log in to Firebase
```sh
firebase login
```
4. Initialize Firebase hosting
```sh
firebase init hosting
```
5. Choose your app from the list or create a new one
6. Set the public directory to `dist`
7. Configure as single-page app - choose Yes
8. Overwrite `index.html` - choose No
9. Deploy the app
```sh
firebase deploy
```
10. Open the app in the browser at the URL provided in the terminal (usually https://<project-id>.firebaseapp.com)