app.factory('userAuth', function($q, $timeout, $http){
	var authuserService = {
		checkUserAuth :function(userName, password){
			var defeffered = $q.defer();
			if (userName != " " && password !== " ") {
				var req = {
				method: 'POST',
				url: 'http://companydepatra.tk/shop_now/phpScripts/checkLogin.php',
			 	params: { 
			 		'username': userName ,
			 	 	'password': password
			 		}

				};
				$http(req).then(function(result){
					console.log("service call");
					defeffered.resolve(result);
					
					
				});
				return defeffered.promise;
			} 
			
		}
	}
	return authuserService;

});