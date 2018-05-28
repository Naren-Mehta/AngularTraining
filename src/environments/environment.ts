// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currency: 'INR',
  firebase:{
    apiKey: "AIzaSyAYvQXVKwI_dK6ERS1tElVt0m51WIAeqkY",
    authDomain: "my-project-1499322026887.firebaseapp.com",
    databaseURL: "https://my-project-1499322026887.firebaseio.com",
    projectId: "my-project-1499322026887",
    storageBucket: "",
    messagingSenderId: "394185966752"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
