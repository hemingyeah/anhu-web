app.controller('goodTestCtrl', ['$scope', 'gridService', 'goodTestService',
    function($scope, gridService, goodTestService) {
        $("#search-good").focus(function () {
            $(".click-down").css("border-color","#008afa");
        })
        $("#search-good").blur(function () {
            $(".click-down").css("border-color","#d7dee1");
        })
        $scope.itemArray1 = [
            { id: 1, name: '品牌批次    ' },
            { id: 2, name: '投诉Id' },
            { id: 3, name: '卖家昵称' }
        ];
        $scope.operation = {
            dropdown: false
        };
        $scope.event = {
            showSearchPanel: function () {
                $scope.operation.dropdown = !$scope.operation.dropdown;
            }
        }
        $scope.data = [{
            title: "李医生洁面乳材料",
            imgUrl: "/images/bg.jpg",
            imgContent: "李医生男士控油祛痘洁面乳150g 舒爽去痘痘 去黑头清洁活炭洗面奶",
            editTime: "2016-06-5-29 09:42:36",
            testTime: "2016-06-5-29 09:42:36",
            code: "2131654321",
            state: "已检测",
            matchedNum: "1000",
            confirmedNum: "666"
        }, {
            title: "李医生洁面乳材料",
            imgUrl: "/images/bg.jpg",
            imgContent: "李医生男士控油祛痘洁面乳150g 舒爽去痘痘 去黑头清洁活炭洗面奶",
            editTime: "2016-06-5-29 09:42:36",
            testTime: "2016-06-5-29 09:42:36",
            code: "2131654321",
            state: "已检测",
            matchedNum: "1000",
            confirmedNum: "666"
        }, {
            title: "李医生洁面乳材料",
            imgUrl: "/images/bg.jpg",
            imgContent: "李医生男士控油祛痘洁面乳150g 舒爽去痘痘 去黑头清洁活炭洗面奶",
            editTime: "2016-06-5-29 09:42:36",
            testTime: "2016-06-5-29 09:42:36",
            code: "2131654321",
            state: "已检测",
            matchedNum: "1000",
            confirmedNum: "666"
        }, {
            title: "李医生洁面乳材料",
            imgUrl: "/images/bg.jpg",
            imgContent: "李医生男士控油祛痘洁面乳150g 舒爽去痘痘 去黑头清洁活炭洗面奶",
            editTime: "2016-06-5-29 09:42:36",
            testTime: "2016-06-5-29 09:42:36",
            code: "2131654321",
            state: "已检测",
            matchedNum: "1000",
            confirmedNum: "666"
        }, {
            title: "李医生洁面乳材料",
            imgUrl: "/images/bg.jpg",
            imgContent: "李医生男士控油祛痘洁面乳150g 舒爽去痘痘 去黑头清洁活炭洗面奶",
            editTime: "2016-06-5-29 09:42:36",
            testTime: "2016-06-5-29 09:42:36",
            code: "2131654321",
            state: "已检测",
            matchedNum: "1000",
            confirmedNum: "666"
        }]
    }
])
