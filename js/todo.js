var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http){
	$scope.fieldName = undefined;
	$scope.reverse = false;

	/*init data*/
	$http.get('tasks.json').success(function(data, status, headers, config){
		$scope.todoList = data;	
		//$scope.ExpiredDate();
		}).error(function(){
			alert('error data');
		});
	/**/

/*out of date*/
	$scope.isOutdated = function(item) {
		var date = 	new Date(item.enspiredDate);
		var currentDate = new Date();
		return ((currentDate - date) > 0);
	};
/*sort caption*/
	$scope.sort = function(fieldName){
	    $scope.reverse = ($scope.fieldName === fieldName) ? !$scope.reverse : false;
	    $scope.fieldName = fieldName;
	};
	
/*icon for sort*/
	$scope.isSortUp = function(fieldName){
		return $scope.fieldName === fieldName && !$scope.reverse;
	}
	$scope.isSortDown = function(fieldName){
		return $scope.fieldName === fieldName && $scope.reverse;
	};



































/*end*/	
})