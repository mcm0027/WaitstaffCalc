angular.module("myApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : './home.html',
      controller : 'HomeController'
    }).when('/new_meal', {
      templateUrl : './new_meal.html',
      controller : 'HomeController'
    }).when('/my_earnings', {
      templateUrl : './my_earnings.html',
      controller : 'EarningsController'
    }).otherwise('/' , {
      templateUrl : './home.html',
      controller : 'HomeController'
    });
  }])
  .controller('HomeController', function ($scope, $rootScope) {
    

      $scope.mealPrice;
      $scope.taxRate;
      $scope.tipRate; 
      $scope.customerCharges = {};

      $rootScope.earnings = {};

      $scope.i = 0;
      $scope.showError = false;

      $scope.customerCharges.subTotal = 0;
      $scope.customerCharges.tip;
      $scope.customerCharges.total = 0;

      $rootScope.earnings.tipTotal;
      $scope.earnings.mealCount;
      $scope.earnings.average;


    $scope.submit = function () {
      $scope.showError = true;
      $scope.customerCharges.subTotal = ($scope.mealPrice + ($scope.taxRate * 0.01 * $scope.mealPrice));
      $scope.customerCharges.tip = ($scope.tipRate * .01 * $scope.mealPrice);
      $scope.customerCharges.total = $scope.customerCharges.subTotal + $scope.customerCharges.tip;
      
      if ($scope.i === 0) {
      $rootScope.earnings.tipTotal = $scope.customerCharges.tip;
      } else { 
        $rootScope.earnings.tipTotal += $scope.customerCharges.tip;
    };
      $scope.i++;
      $scope.earnings.mealCount = $scope.i;
      $scope.earnings.average = $rootScope.earnings.tipTotal / $scope.earnings.mealCount;
    
    
  };
    
    $scope.cancel = function() {
      $scope.getElementById("enter").reset();
      $scope.form.$submitted = false;
      $scope.showError = false;
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipRate = ''; 
    };
  
  $scope.reset = function() {
      document.getElementById("enter").reset();
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipRate = ''; 
      $scope.customerCharges.subTotal = 0;
      $scope.customerCharges.tip = 0;
      $scope.customerCharges.total = 0;
      $rootScope.earnings.tipTotal = 0;
      $scope.earnings.mealCount = 0;
      $scope.i = 0;
      $scope.earnings.average = 0;
      $scope.form.$submitted = false;
      $scope.showError = false;
  };
  
})
.controller('EarningsController', function ($scope, $rootScope) {
  $rootScope.earnings.tipTotal
  
});