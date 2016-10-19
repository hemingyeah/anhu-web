app.controller('signupCtrl',['$scope','$state','signupService', function($scope, $state, signupService) {
	$scope.model = {};
	$scope.event = {
		signup: function () {
			signupService.signup($scope, $scope.model, function() {
			    $state.go("wlds.photo");
			})
			$state.go("ipps.dashboard");
		},
		validateEmail: function () {
			signupService.validateEmail($scope, $scope.model, function(data) {
			    // $state.go("wlds.photo");
			})
		}
	}
}])