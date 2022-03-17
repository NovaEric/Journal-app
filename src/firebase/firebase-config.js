import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPDD,
};
// const firebaseConfig = {
  //   apiKey: "AIzaSyCfWOu8YYmzvfpJy7xVX9XqwME0HpufuFE",
  //   authDomain: "torrid-fire-2744.firebaseapp.com",
  //   databaseURL: "https://torrid-fire-2744.firebaseio.com",
  //   projectId: "torrid-fire-2744",
  //   storageBucket: "torrid-fire-2744.appspot.com",
  //   messagingSenderId: "366012756394",
  //   appId: "1:366012756394:web:dc096003f41d4b1c823bd3"
  // };
  
  // const firebaseConfigTesting = {
    //   apiKey: "AIzaSyCfWOu8YYmzvfpJy7xVX9XqwME0HpufuFE",
    //   authDomain: "torrid-fire-2744.firebaseapp.com",
    //   databaseURL: "https://torrid-fire-2744.firebaseio.com",
    //   projectId: "torrid-fire-2744",
    //   storageBucket: "torrid-fire-2744.appspot.com",
    //   messagingSenderId: "366012756394",
    //   appId: "1:366012756394:web:6dbc0d0c9d500f54823bd3"
    // };
    
    // Initialize Firebase
    // if (process.env.NODE_ENV === 'test') {
      
      //   firebase.initializeApp(firebaseConfigTesting);
      // } else {
        
        //   firebase.initializeApp(firebaseConfig);
        // }

          
          firebase.initializeApp(firebaseConfig);
          
        
        const db = firebase.firestore();
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        
        export {
          db,
          googleAuthProvider,
    firebase
}