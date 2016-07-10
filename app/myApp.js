var myApp = angular.module('myApp', ['ngRoute'] );

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider

    .when('/viewOne', {
      templateUrl: 'views/viewOne.html',
      controller: 'viewOneController'
    })

  .when('/viewTwo', {
    templateUrl: 'views/viewTwo.html',
    controller: 'viewTwoController'
  })

  .when('/viewThree', {
    templateUrl: 'views/viewThree.html',
    controller: 'viewThreeController'
  })

  .otherwise({
    redirectTo: '/',
    templateUrl: 'views/mainView.html',
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

myApp.controller('viewThreeController', ['$scope', '$http', '$log', function($scope, $http, $log){
  $scope.title = 'View Three Controller title';

  $scope.title = "Chuck Norris Facts";

  var onJokeComplete = function(response){
    $scope.joke = response.data;
    $scope.randJokeIndex = Math.floor(Math.random()*response.data.value.length);
    $log.info('Loaded');
  }

  var onError = function(reason){
    $scope.error = reason.data;
    $log.info('Error');
  }

  $http.get('https://api.icndb.com/jokes?escape=javascript')
    .then(onJokeComplete, onError);

}]);

myApp.controller('mainViewController', ['$scope', function($scope){
  $scope.title = 'Main View Controller title';
}]);


