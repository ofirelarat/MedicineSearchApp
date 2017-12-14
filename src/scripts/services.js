var app = require("./app.js");

app.service("medicinesFactory",["$http", function($http) {
    var urlBase = "http://medicine-cabinet-api.azurewebsites.net/medicine/all";

    this.getMedicines = function(){
        return $http.get(urlBase);
    }
}]);
