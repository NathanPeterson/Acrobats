angular
.module('acrobatApp', [])
.controller('AcrobatController', function($scope){
  $scope.editing =false;
  $scope.acrobats = [
    {name:'Nathan', act: 'Fire Breathing'},
    {name:'Katelyn', act: 'Magic'},
  ];

  $scope.addAcrobat = function(){
    $scope.acrobats.push($scope.acrobat);
    $scope.acrobat = {};
  }
  $scope.removeLastAcrobat = function(){
    $scope.acrobats.pop();
  }
  $scope.editAcrobat = function(acrobat){
    $scope.editing =true;
    $scope.acrobat = acrobat;
  }
  $scope.updateAcrobat = function(){
    $scope.acrobat = {};
    $scope.editing =false;
  }
  $scope.removeAcrobat = function(index){
    $scope.acrobats.splice(index,1);
  }
})
