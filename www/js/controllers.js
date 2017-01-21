angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('RegisterCtrl', function($scope, http) {
  $scope.registerData = {email: "", first: "", last: "", pwd: ""};
  
  $scope.doRegister = function (){
    console.log("sdffsdfsd")
    http.register($scope.registerData).then(function(result) {
            console.log(result);
    });
  };


})

.controller('DebtCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('DebtDetailCtrl', function($scope) {
  
})

.controller('LoanCtrl', function($scope) {
  
})
.controller('SettingsCtrl', function($scope) {
  
})


;
