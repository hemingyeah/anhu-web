app.controller('loginCtrl', ['$scope', '$state', 'loginService', function($scope, $state, loginService) {
    $scope.event = {
        login: function() {
            // loginService.loadData($scope, $scope.model, function() {
            //     $state.go("wlds.photo");
            // })

            $state.go("wlds.photo");
        }
    }
}])
