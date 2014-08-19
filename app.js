(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function($http) {
        var vm = this;
        vm.products = [];

        $http.get('store-products.json').success(function(data){
          vm.products = data;
        });

    }]);

    app.controller('ReviewController', function(){
        var vm = this;
        vm.review = {};
        vm.addReview = addReview;

        function addReview(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();