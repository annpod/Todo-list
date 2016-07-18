var app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope, $http){

	/*init data*/
	$http.get('tasks.json').success(function(data, status, headers, config){
		$scope.todoList = data;	
		//$scope.ExpiredDate();
		}).error(function(){
			alert('error data');
		});
	/**/

	/**/
	$scope.isOutdated = function(item) {
		var date = 	new Date(item.enspiredDate);
		var currentDate = new Date();
		return ((currentDate - date) > 0);
	};































/*end*/	
})