app.controller("productListController" , function($scope, productService, store, $state){
	
	var productList = productService.getProductList();
				productList.then(function(data){
				$scope.productList = data.data;
				console.log(data.data);

			});
});