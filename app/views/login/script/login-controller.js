app.controller('loginCtrl',['$scope','$state', function($scope, $state) {
	//
	$scope.app.settings.headerFixed = false;
	$scope.event = {
		login: function () {
			$state.go("wlds.photo");
		}
	}
}])