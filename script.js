angular.module("myApp", [])
  .controller('oneController', OneController);

  function OneController($scope) {
    $scope.mealPrice;
    $scope.taxRate;
    $scope.tipRate; 
    $scope.customerCharges = {};
    
    $scope.earnings = {};
    
    $scope.i = 0;
    $scope.showError = false;
    
    $scope.customerCharges.subTotal = 0;
    $scope.customerCharges.tip = 0;
    $scope.customerCharges.total = 0;
    $scope.earnings.tipTotal = 0;
    $scope.earnings.mealCount = 0;
    $scope.earnings.average = 0;

    $scope.submit = function () {
      $scope.showError = true;
      $scope.customerCharges.subTotal = ($scope.mealPrice + ($scope.taxRate * 0.01 * $scope.mealPrice));
      $scope.customerCharges.tip = ($scope.tipRate * .01 * $scope.mealPrice);
      $scope.customerCharges.total = $scope.customerCharges.subTotal + $scope.customerCharges.tip;
      
      if ($scope.i === 0) {
      $scope.earnings.tipTotal = $scope.customerCharges.tip;
      } else { 
        $scope.earnings.tipTotal += $scope.customerCharges.tip;
    };
      $scope.i++;
      $scope.earnings.mealCount = $scope.i;
      $scope.earnings.average = $scope.earnings.tipTotal / $scope.earnings.mealCount;
    
    
  };
    
    $scope.cancel = function() {
      document.getElementById("enter").reset();
      $scope.form.$submitted = false;
      $scope.showError = false;
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipRate = ''; 
    }
    
    $scope.reset = function() {
      document.getElementById("enter").reset();
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipRate = ''; 
      $scope.customerCharges.subTotal = 0;
      $scope.customerCharges.tip = 0;
      $scope.customerCharges.total = 0;
      $scope.earnings.tipTotal = 0;
      $scope.earnings.mealCount = 0;
      $scope.i = 0;
      $scope.earnings.average = 0;
      $scope.form.$submitted = false;
      $scope.showError = false;

    }
};
