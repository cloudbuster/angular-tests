var myApp = angular.module('myApp', ['ngRoute'] );

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider

    .when('/viewOne', {
      templateUrl: 'views/viewOne.html',
      controller: 'viewOneController'
    })

    .when('/viewTwo', {
      templateUrl: 'views/viewTwo.html',
      controller: 'viewOneController'
    })

    .when('/viewThree', {
      templateUrl: 'views/viewThree.html',
      controller: 'viewOneController'
    })

    .otherwise({
      redirectTo: '/',
      controller: 'mainViewController'
    });

}]);

myApp.controller('mainController', ['$scope', function($scope){
  $scope.title = 'mainController title';
}]);

myApp.controller('viewOneController', ['$scope', function($scope){
  $scope.title = 'View One Controller title';
}]);

myApp.controller('viewTwoController', ['$scope', function($scope){
  $scope.title = 'View Two Controller title';
}]);

myApp.controller('viewThreeController', ['$scope', function($scope){
  $scope.title = 'View Three Controller title';
}]);

myApp.controller('mainViewController', ['$scope', function($scope){
  $scope.title = 'Main View Controller title';
}]);


