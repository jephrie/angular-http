var app = angular.module("http", []);

app.controller("httpController", function($scope, $http, $q) {
	$scope.result = "Begin ";
	
	$scope.asyncRequest = function () {
		$scope.result += "start ";
		$http({
			method: 'GET',
			url: 'http://localhost:3030/asyncDo'
		}).then(function(req) {
			$scope.result += req.data + " ";
			return req.data;
		}, function(err) {
			$q.reject(err.data);
		});
	};
});
