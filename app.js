// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  //connect to firebase
  var ref = new Firebase("https://ngscheduler.firebaseIO.com/days");
  var fb = $firebase(ref);

 //sync as object 
    var syncObject = fb.$asObject();
//three way data-binding (between Angular, front-end view, and Firebase)
    syncObject.$bindTo($scope, 'days');
});