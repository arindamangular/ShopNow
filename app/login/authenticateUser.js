app.factory('userAuth', function($q, $timeout){
	var authuserService = {
		checkUserAuth :function(userName, password){
			if (userName == "admin" && password == "admin") {
				alert("login");
			} else{
				alert("osnasn");
				// var deferred = $q.defer();
                   // $timeout(function(){
                   //     deferred.reject("Allo!");
                   // },2000); 
                   // return deferred.promise;
                   return $q.reject("ok");
			};
		}
	}
	return authuserService;

});