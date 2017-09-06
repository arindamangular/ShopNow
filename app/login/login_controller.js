app.controller("loginController" , function($scope, userAuth, store, $state){

		
		$scope.user = {};
		$scope.user.userName;
		$scope.user.password;
		$scope.usercrad = angular.copy($scope.user);

		var authData = {};
  		

	$scope.loginUser = function(){
		//console.log(isLogin.success);
		var isLogin =  store.get('logedUser');

	    if (isLogin == null) {
	    	console.log("call")
	           	var isLogin = userAuth.checkUserAuth($scope.user.userName , $scope.user.password);
				isLogin.then(function(data){
				$scope.datav = data.data;
				authData = $scope.datav;
				store.set('logedUser', authData);
  				$scope.authUserData = store.get('logedUser');
				//console.log($scope.authUserData);
				$state.go('home', null, {reload:true});

			});
	    } else{
	    	console.log("not calls");
	    	console.log(isLogin.success);
	        $state.go('home', null, {reload:true});
	    };

		//console.log("asas");
		
		// alert(isLogin);

	}

});