// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  recipesLocalStorageKey: 'recipes',
  groceryListLocalStorageKey: 'groceryList',
  recipePlaceHolderImageUrl: 'https://via.placeholder.com/150x150',
  firebase: {
    apiKey: "AIzaSyDPeaEp0SirmDFN6UGbUFm20NE4ymeh1vM",
    authDomain: "rezeptbuch-ebd42.firebaseapp.com",
    databaseURL: "https://rezeptbuch-ebd42.firebaseio.com/",
    projectId: "rezeptbuch-ebd42",
    storageBucket: "rezeptbuch-ebd42.appspot.com",
    messagingSenderId: "372680849160",
    appId: "1:372680849160:web:10d82d3520a17465"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
