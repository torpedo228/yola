import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyAu0n5jfZkiBXWw22GpWMadl6nbevyN6dQ",
  authDomain: "yola-a087c.firebaseapp.com",
  projectId: "yola-a087c",
  storageBucket: "yola-a087c.appspot.com",
  messagingSenderId: "851329109831",
  appId: "1:851329109831:web:ff1f40d99e2cced6700662",
});

// used for the firestore refs
// const db = getFirestore(firebaseApp);

// here we can export reusable database references
// export const todosRef = collection(db, 'todos');