angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Hege',country:'Sweden'},
      {name:'Kai',country:'Denmark'},
      {name:'Irene',country:'Kenya'},
      {name:'Vincent',country:'Newyork'}


    ];
  });