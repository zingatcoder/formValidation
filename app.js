var app=angular.module('myApp', [])
	app.controller('formValidation', function($scope) {
    $scope.name = "John Doe";
    
		 $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		$scope.n=/[a-z]/;
    $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };
	
	
		
		function MyCtrl($scope) {
    $scope.phone = ''
}
});

app.directive('numbersOnly', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           // this next if is necessary for when using ng-required on your input. 
           // In such cases, when a letter is typed first, this parser will be called
           // again, and the 2nd time, the value will be undefined
           if (inputValue == undefined) return '' 
           var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }         

           return transformedInput;         
       });
     }
   };
});

app.directive('nanuEmail', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elm, attrs, model) {
      //change this:
      var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      var emailValidator = function(value) {
      if (!value || EMAIL_REGEXP.test(value)) {
        model.$setValidity('email', true);
        return value;
      } else {
        model.$setValidity('email', false);
        return undefined;
      }
      model.$parsers.push(emailValidator);
      model.$formatters.push(emailValidator);
    }
  }
}});

