$(document).ready(function () {


    var config = {
      apiKey: "AIzaSyC2yo97x9qHGQJYj8mBQXndr7GSBP7Pf2g",
      authDomain: "traingame-8db35.firebaseapp.com",
      databaseURL: "https://traingame-8db35.firebaseio.com/",
      storageBucket: "gs://traingame-8db35.appspot.com",
      messagingSenderId: 776954070318

    };
    firebase.initializeApp(config);
  
    var database = firebase.database();


//    // service cloud.firestore {
//       match /databases/{database}/documents {
//         match /{document=**} {
//           allow read, write: if false;
//         }
//       }
//     }

// // $ firebase init

// Initialize firebase? ^^

database.ref().on("child_added", function (childSnapshot) {
  
  var newTrain = childSnapshot.val().trainName;
  var newLocation = childSnapshot.val().destination;
  var newFirstTrain = childSnapshot.val().firstTrain;
  var newFreq = childSnapshot.val().frequency;

  var diffTime = moment().diff(moment(startTimeConverted), "minutes");

  var tRemainder = diffTime % newFreq;

  var tMinutesTillTrain = newFreq - tRemainder;

  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  var catchTrain = moment(nextTrain).format("HH:mm");


  var startTimeConverted = moment(newFirstTrain, "hh:mm").subtract(1, "years");

  var currentTime = moment()

});
  
    $("#addTrain").on("click", function (event) {
      event.preventDefault();
  
   
      var trainName = $("#trainName").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = $("#firstTrain").val().trim();
      var freq = $("#interval").val().trim();
  

      database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: freq
      });
    });
  
  
 
  });