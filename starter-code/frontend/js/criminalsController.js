var app = angular.module('TheCriminalsApp', ['ngRoute','ngResource']);
  // .controller('CriminalsController', CriminalsController);

// CriminalsController.$inject = ['$http'];


////////////
// ROUTES //
////////////

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      // template: 'Home!'
      templateUrl: '/index.html',
      controller: 'CriminalsController'
    });
    // .when('/wines/:id', {
    //     templateUrl: '/templates/wines-show.html',
    //     controller: 'WinesShowCtrl'
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});

/////////////////
// CONTROLLERS //
/////////////////

  app.controller('CriminalsController',function($scope, Criminals) {
    response = Criminals.query(function(){
      console.log(response.criminals)
      $scope.criminals = response['criminals']
    });

    // var criminal = Criminals.get({ id: $scope.id }, function() {
    //   console.log(criminal);
    // }); // get() returns a single criminal
  });


////////////
// MODELS //
////////////

  app.factory("Criminals", function($resource) {
    return $resource("http://localhost:3000/criminals/:id", null, {
      query: {method: 'GET',isArray: false}
    })
  });


//////////////
// OLD FUNC //
//////////////




// function CriminalsController($http){
//   var self = this;
//   self.all = [];
//   self.addCriminal = addCriminal;
//   self.newCriminal = {};
//   self.getCriminals = getCriminals();
//   self.removeCriminal = removeCriminal;
//   self.editCriminal = editCriminal;

//   function getCriminals(){
//     $http
//       .get('http://localhost:3000/criminals')
//       .then(function(response){
//         self.all = response.data.criminals;
//     });
//   }

//   function addCriminal(){
//     $http
//       .post('http://localhost:3000/criminals',self.newCriminal)
//       .then(function(response){
//         getCriminals();
//     });
//     self.newCriminal = {};
//   }

//   function removeCriminal(id){
//     $http
//       .delete('http://localhost:3000/criminals/'+id)
//       .then(function(response){
//         getCriminals();
//     });
//     self.newCriminal = {};
//   }

//   function editCriminal(id){
//     $http
//       .get('http://localhost:3000/criminals/'+id)
//       .then(function(response){
//         getCriminals();
//     });
//     self.newCriminal = {};
//   }
// }

