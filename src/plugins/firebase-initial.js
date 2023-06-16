import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export default {
  install: (app, options) => {
    // app.config.globalProperties.$translate = "1";
    // Plugin code goes here
    try {
      const firebaseApp = initializeApp({
        // your application settings
        apiKey: options.config.apiKey,
        authDomain: options.config.authDomain,
        projectId: options.config.projectId,
        storageBucket: options.config.storageBucket,
        messagingSenderId: options.config.messagingSenderId,
        appId: options.config.appId,
      });
      if (options.appcheckV3.key) {
        initializeAppCheck(firebaseApp, {
          provider: new ReCaptchaV3Provider(options.appcheckV3.key),
          // Optional argument. If true, the SDK automatically refreshes App Check
          // tokens as needed.
          isTokenAutoRefreshEnabled: true,
        });
      }
    } catch (error) {
      console.log(error);
      console.log("firebase config has some missing");
    }
  },
};

// used for the firestore refs
// const db = getFirestore(firebaseApp);

// here we can export reusable database references
// export const todosRef = collection(db, 'todos');
