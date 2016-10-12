app.controller('signupCtrl',['$scope','$state', function($scope, $state) {
	//
	$scope.app.settings.headerFixed = false;
	$scope.event = {
		signup: function () {
			$state.go("ipps.dashboard");
		}
	}
}])