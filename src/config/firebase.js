import firebase from "firebase/app";
import "firebase/analytics";

// add firebase config below:
// example of what it will look like:

/*  also note the values for the config properties for 
the example below are not actual values they are just serving as placeholders */
const firebaseConfig = {
  apiKey: "secretKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
};

// initialized firebase application
firebase.initializeApp(firebaseConfig);

//   initialized google analytics
const reactGoogleAnalytics = firebase.analytics();

export { reactGoogleAnalytics };
