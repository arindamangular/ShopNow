app.factory('productService', function($q, $timeout, $http){
	var getProductService = {
		getProductList :function(){
				var defeffered = $q.defer();
			// if (userName != " " && password !== " ") {
				var req = {
				method: 'POST',
				url: 'http://companydepatra.tk/shop_now/phpScripts/getProductDetails.php'

				};
				$http(req).then(function(result){
					console.log("Product List");
					defeffered.resolve(result);
					
					
				});
				return defeffered.promise;
			// } 
			
		}
	}
	return getProductService;

});