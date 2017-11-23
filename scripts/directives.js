
app.directive("header",function(){
    return {
        restrict: "E",
        templateUrl: "/templates/header-view.html"
    };
});

app.directive("searchView", function(){
    return {
        restrict: "E",
        scope: {
            searchText: "@",
            orderByType: "@"
        },
        templateUrl: "/templates/search-view.html"
    };
});

app.directive("medicinesTable", function(){
    return {
        restrict: "E",
        scope: false,
        templateUrl: "/templates/table-view.html"
    };
});

app.directive("medicineRowView", function(){
    return {
        restrict: "A",
        scope: {
            medicine:"="
        },
        templateUrl: "/templates/medicine-row-view.html"
    };
});
