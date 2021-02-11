
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCtBuGsO6OqVa4WOkfddGJL4GbFCsWPg1k",
      authDomain: "kwitterproject-d97d0.firebaseapp.com",
      projectId: "kwitterproject-d97d0",
      storageBucket: "kwitterproject-d97d0.appspot.com",
      messagingSenderId: "513696305138",
      appId: "1:513696305138:web:79c7b178aa1f8b3686656b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


