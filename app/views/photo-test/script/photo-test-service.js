//检索维权管理
app.factory('photoTestService', ['dataExchange', function(dataExchange) {
    return {
        loadData: function($scope, data, fun) {
            dataExchange.loadData({type: 'GET', url: 'api/alipay.json'}, {
            }, function(data) {
                if (fun) fun(data);
            })
        }
    };
}]);