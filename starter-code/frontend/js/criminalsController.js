var app = angular.module('TheCriminalsApp', ['ngRoute','ngResource']);

/////////////////
// CONTROLLERS //
/////////////////

  app.controller('CriminalsController',function($scope, Criminals, $routeParams) {

    var self = this;
    self.getCriminals = getCriminals();
    self.removeCriminal = removeCriminal;
    self.addCriminal = addCriminal;
    self.newCriminal = {};
    // self.editCriminal = editCriminal;

    function getCriminals(){
      response = Criminals.query(function(){
        $scope.criminals = response.criminals
      });
    }

    function addCriminal(){
      self.newCriminal = new Criminals()
      self.newCriminal.data = {name:$routeParams.name,location:$routeParams.location,status:$routeParams.status}
      console.log(self.newCriminal)
      Criminals.save(self.newCriminal,function(){
        console.log("saved")
      })
      self.newCriminal = {};
      self.getCriminals
    }

    function removeCriminal(id){
      console.log("start delete")
      Criminals.delete({ id: id }, function(){
        self.getCriminals
      });
    };

  });


////////////
// MODELS //
////////////

  app.factory("Criminals", function($resource) {
    return $resource("http://localhost:3000/criminals/:id", null, {
      query: {isArray: false}
    })
  });


//////////////
// OLD FUNC //
//////////////




// function CriminalsController($http){




//   function editCriminal(id){
//     $http
//       .get('http://localhost:3000/criminals/'+id)
//       .then(function(response){
//         getCriminals();
//     });
//     self.newCriminal = {};
//   }
// }

