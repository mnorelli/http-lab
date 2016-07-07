angular.module('TheCriminalsApp', [])
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals();
  self.removeCriminal = removeCriminal;
  self.editCriminal = editCriminal;

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
    });
  }

  function addCriminal(){
    $http
      .post('http://localhost:3000/criminals',self.newCriminal)
      .then(function(response){
        getCriminals();
    });
    self.newCriminal = {};
  }

  function removeCriminal(id){
    $http
      .delete('http://localhost:3000/criminals/'+id)
      .then(function(response){
        getCriminals();
    });
    self.newCriminal = {};
  }

  function editCriminal(id){
    $http
      .get('http://localhost:3000/criminals/'+id)
      .then(function(response){
        getCriminals();
    });
    self.newCriminal = {};
  }
}

