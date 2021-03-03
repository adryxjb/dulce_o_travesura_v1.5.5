// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //apiUrl: "https://jsonplaceholder.typicode.com/"
  apiUrl: "https://api.spoonacular.com/recipes/complexSearch",
  firebase: {
    apiKey: "AIzaSyANVHUt6c8r-XjMFs8rlBkZw-NfMDcU9qI",
    authDomain: "dulce-o-travesura-594de.firebaseapp.com",
    databaseURL: "https://dulce-o-travesura-594de-default-rtdb.firebaseio.com",
    projectId: "dulce-o-travesura-594de",
    storageBucket: "dulce-o-travesura-594de.appspot.com",
    messagingSenderId: "291949850867",
    appId: "1:291949850867:web:1fa7137351003c28b60786"
  }
};
