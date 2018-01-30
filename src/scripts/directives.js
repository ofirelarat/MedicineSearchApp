var app = require("./app.js");

app.directive("header",function(){
    return {
        restrict: "E",
        templateUrl: "/src/templates/header-view.html"
    };
});

app.directive("searchView", function(){
    return {
        restrict: "A",
        scope: {
            searchInput:"=",
            orderInput:"="
        },
        templateUrl: "/src/templates/search-view.html"
    };
});

app.directive("medicinesTable", function(){
    return {
        restrict: "E",
        templateUrl: "/src/templates/table-view.html"
    };
});

app.directive("medicineRowView", function(){
    return {
        restrict: "A",
        scope: {
            medicine:"="
        },
        templateUrl: "/src/templates/medicine-row-view.html"
    };
});

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var container = elm[0];
        elm.bind('scroll', function() {
            if (container.scrollTop + container.offsetHeight >= container.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    }
});
