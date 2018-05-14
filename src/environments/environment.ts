// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
  apiKey: 'AIzaSyC82Zrv-crbCo1QtdE22QkxmW7u3nQcT7M',
    authDomain: 'agent-sync-sonder.firebaseapp.com',
    databaseURL: 'https://agent-sync-sonder.firebaseio.com',
    storageBucket: 'agent-sync-sonder.appspot.com',
    messagingSenderId: '192652069233'
},
};
