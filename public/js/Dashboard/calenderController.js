angular.module("dashboardAppController", [])
.controller('calenderController', ['$scope', '$http', function ($scope, $http) {
	$scope.test = [
		{name: 'laurenz', id: '1'},
		{name: 'laurenza', id: '2'},
		{name: 'laurenzb', id: '3'}
	];  
}]);