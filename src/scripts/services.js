var app = require("./app.js");

app.service("medicinesFactory", [
    "$http",
    function($http) {
        var urlBase = "http://medicine-cabinet-api.azurewebsites.net/medicine/";

        this.getMedicines = function(limit, offset) {
            return $http.get(
                urlBase + "all?limit=" + limit + "&offset=" + offset
            );
        };

        this.getFilterMedicines = function(filterValue, filterName) {
            return $http.get(
                urlBase +
                "getByFilter?filterValue=" +
                filterValue +
                "&filterName=" +
                filterName
            );
        };
    }
]);
