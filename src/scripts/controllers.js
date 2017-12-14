var app = require("./app.js");

app.controller("medicinesController",["$scope", "medicinesFactory", function($scope, medicinesFactory){
    $scope.medicines = [];

    getMedicines();

    function getMedicines() {
        medicinesFactory.getMedicines()
            .then(function (response) {
                $scope.medicines = response.data;
            }, function (error) {
                console.log('Unable to load customer data: ' + error.message);
            });
    }
}]);
