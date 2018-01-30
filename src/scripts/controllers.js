var app = require("./app.js");

const NUM_OF_MEDICINE_IN_PAGE = 10;

app.controller("medicinesController",["$scope", "medicinesFactory", function($scope, medicinesFactory){
    $scope.medicines = [];
    $scope.currentPage = 0;
    getMedicines();

    function getMedicines(limit=NUM_OF_MEDICINE_IN_PAGE,offset=0) {
        medicinesFactory.getMedicines(limit, offset)
            .then(function (response) {
                $scope.medicines = $scope.medicines.concat(response.data);
            }, function (error) {
                console.log('Unable to load customer data: ' + error.message);
            });
    }

    $scope.loadMore = function(){
        $scope.currentPage++;
        getMedicines(NUM_OF_MEDICINE_IN_PAGE, $scope.currentPage*NUM_OF_MEDICINE_IN_PAGE);
    }
}]);
