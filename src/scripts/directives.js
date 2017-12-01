
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
            searchControl:"="
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
