var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http){
	$scope.sortField = undefined;
	$scope.reverse = false;
	var today = new Date();
	$http.get('tasks.json').success(function(data, status, headers, config){
		$scope.todoList = data;	
		//$scope.ExpiredDate();
	}).error(function(){
		alert('error data');
	});
	/*$scope.todoList = [];*/
	$scope.placeholder = 'What TODO?';
	$scope.todoAdd = function(){
		if($scope.todoCaptionInput && $scope.todoDateInput){
			$scope.todoList.push({
				todoCaption:$scope.todoCaptionInput,
				todoDateAdded: today,
				todoDateDeadline:$scope.todoDateInput,
				done: false
			});
			$scope.todoCaptionInput = '';
			$scope.todoDateInput = '';
		}
	}
	$scope.isOutdated = function(item) {
		var date = 	new Date(item.todoDateDeadline);
		var currentDate = new Date();
		return ((currentDate - date) > 0);
	};
	$scope.sort = function(fieldName){
		if ($scope.sortField === fieldName){
			$scope.reverse = !$scope.reverse;
		}else{
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	};
	$scope.isSortUp = function(fieldName){
		return $scope.sortField === fieldName && !$scope.reverse;
	}
	$scope.isSortDown = function(fieldName){
		return $scope.sortField === fieldName && $scope.reverse;
	};

    $scope.removeItem = function() {    	
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(item) {
            if (!item.done) $scope.todoList.push(item);
        });
	};


	  /**/
});