var app = angular.module("todoApp", ["xeditable","ui.bootstrap"]);
/*filter for status*/
/*app.filter('statusFilter', function(){
	return function(input){		
        return selected.length ? selected[0].text : 'Not set';   
	}
})*/ 

app.controller("todoCtrl", function($scope, $http, $filter){
	$scope.fieldName = undefined;
	$scope.reverse = false;
	$scope.currentDate = new Date();

	/*init data*/
	$http.get('tasks.json').success(function(data, status, headers, config){
		$scope.todoList = data;	
		//$scope.ExpiredDate();
		}).error(function(){
			alert('error data');
		});
	/**/

	$scope.statuses = [
	    {value: 1, text: 'new'},
	    {value: 2, text: 'assigned'},
	    {value: 3, text: 'resolved'}
	];
  $scope.showStatus = function(item) {
    var selected = [];
    if(item.status) {
      selected = $filter('filter')($scope.statuses, {value: item.status});
    }
    return selected.length ? selected[0].text : 'Not set';   
  };

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

/*create new task*/
$scope.addTodo = function() {
    $scope.inserted = {
	    caption:"",
		createdDate:"",
		enspiredDate:"",
		status: '',
		done: false
    };
    $scope.todoList.push($scope.inserted);
  };
  /**/
$scope.getTemplate = function (item) {
	 if (item === $scope.edit) return 'edit';
     else return 'display';
};
 $scope.editItem = function (item) {
 	$scope.edit = [];
        $scope.edit = angular.copy(item);
    };

/*$scope.saveTodo = function() {
    $scope.todoList.push({
	    caption:$scope.caption,
		createdDate:$scope.createdDate,
		enspiredDate:$scope.enspiredDate,
		status:$scope.status,
		done: false
    });
  };*/

/*edit item*/






























/*end*/	
})