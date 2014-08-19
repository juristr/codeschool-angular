(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        var vm = this;
        vm.products = gems;
    });

    var gems = [
        { name: 'Azurite', price: 2.95 },
        { name: 'Bloodstone', price: 5.95 },
        { name: 'Zircon', price: 3.95 },
    ];
})();