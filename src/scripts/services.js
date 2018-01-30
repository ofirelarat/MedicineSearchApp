var app = require("./app.js");

app.service("medicinesFactory",["$http", function($http) {
    var urlBase = "http://medicine-cabinet-api.azurewebsites.net/medicine/all";

    this.getMedicines = function(limit,offset){
        return $http.get(urlBase + "?limit="+limit + "&offset="+offset);
    }
}]);
