angular.module('app', []).controller('TodoController', function ($http) {
    var vm = this;
    vm.newItem = '';
    vm.items = [];
    vm.removeItem = removeItem;
    vm.addItem = addItem;

    function addItem() {
        console.log(vm.newItem);
        $http.post("/todo", '"' + vm.newItem + '"').success(function (data, status) {
            refreshItems();
        });
    }

    function removeItem(index) {
        $http.delete("/todo", index).success(function (data, status) {
            refreshItems();
        });
    }

    function refreshItems() {
        $http.get("/todo").success(function (items) {
            vm.items = items;
        });
    }

    refreshItems();

});
