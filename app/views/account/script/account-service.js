//登录
app.factory('accountService', ['dataExchange','service', function(dataExchange, service) {
    return {
        account: function($scope, data, fun) {
            dataExchange.loadData({type: 'POST', url: 'http://192.168.0.107:8098/api/Account/SendEmailVerifyCode'}, {
            	usernameOrEmailAddress: data.account,
            	password: data.password
            }, function(data) {
            	service.cookie.set("token", data.result);
                if (fun) fun(data);
            })
        },
        validateEmail: function ($scope, data, fun) {
            dataExchange.loadData({type: 'POST', url: 'http://192.168.0.107:8098/api/Account/SendEmailVerifyCode'}, {
                emailAddress: data.email.account,
            }, function(data) {
                debugger
                if (fun) fun(data);
            })
        }
    };
}]);
