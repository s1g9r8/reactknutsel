
import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyC8Lvv2jHR1wq8jK5kSddGs8cPFeEzmBi4",
      authDomain: "planboard-6cb4a.firebaseapp.com",
      databaseURL: "https://planboard-6cb4a.firebaseio.com",
      projectId: "planboard-6cb4a",
      storageBucket: "planboard-6cb4a.appspot.com",
      messagingSenderId: "674735056767"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
