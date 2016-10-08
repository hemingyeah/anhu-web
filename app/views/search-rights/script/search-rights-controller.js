app.controller('searchRightsCtrl', ['$scope', 'gridService', 'searchRightsService',
    function($scope, gridService, searchRightsService) {
        $scope.service = searchRightsService;
        gridService.gridInit($scope);
        //构造业务按钮
        $scope.businessBtns = [{
            "code": "output",
            "name": "导出excel",
            "index": 1010,
            "icon": "fa fa-pencil",
            "group": false
        }]
        $scope.itemArray = [
            { id: 1, name: '关键词1' },
            { id: 2, name: '关键词2' },
            { id: 3, name: '关键词3' },
            { id: 4, name: '关键词4' },
            { id: 5, name: '关键词5' }
        ];
        $scope.selected = { value: $scope.itemArray[0] };

        $scope.columnDefs = $scope.columnDefs.concat([{
            headerName: "打印机名称",
            /*打印机编号*/
            // checked: true,
            field: "printerName",
            width: 100
        }, {
            headerName: "打印机类型",
            /*打印单据类型*/
            checked: true,
            field: "printType",
            width: 200,
        }, {
            headerName: "运输单位",
            /*运输单位*/
            checked: true,
            field: "transporterUnitId",
            width: 150
        }, {
            headerName: "作业区",
            /*作业区*/
            checked: true,
            field: "workspace",
            width: 100
        }, {
            headerName: "绑定地址",
            /*IP*/
            checked: true,
            field: "bindIp",
            width: 180
        }, {
            headerName: "端口",
            /*端口*/
            checked: true,
            field: "bindPort",
            width: 80
        }, {
            headerName: "设备ID",
            /*端口*/
            checked: true,
            field: "deviceUkid",
            width: 200
        }]);
        var rowData = [
            { make: "丰田", model: "塞利卡", price: 35000, solder: "李克强", sex: "男", like: "敞篷" },
            { make: "福特", model: "蒙迪欧", price: 32000, solder: "李克强", sex: "男", like: "敞篷" },
            { make: "保时捷", model: "博古特", price: 72000, solder: "李克强", sex: "男", like: "敞篷" }
        ];
        $scope.gridOptions = {
            columnDefs: $scope.columnDefs,
            showToolPanel: false,
            headerCellRenderer: $scope.headerCellRenderer,
            onSelectionChanged: function() {}
        };

        $scope.gridOptions = $.extend($scope.options, $scope.gridOptions);
        var consMethods = gridService.construtor($scope);
        $scope.event = $.extend(consMethods, {
            //导出excel
            output:  $scope.exportAsExcel
        });
    }
])
