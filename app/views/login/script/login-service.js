//登录
app.factory('loginService', ['dataExchange','service', function(dataExchange, service) {
    return {
        loadData: function($scope, data, fun) {
            dataExchange.loadData({type: 'POST', url: 'http://192.168.0.107:8098/api/account/Authenticate'}, {
            	usernameOrEmailAddress: data.account,
            	password: data.password
            }, function(data) {
            	service.cookie.set("token", data.result);
                if (fun) fun(data);
            })
        }
    };
}]);