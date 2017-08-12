app.controller("loginController" , function($scope, userAuth, store){

		
		$scope.user = {};
		$scope.user.userName;
		$scope.user.password;
		$scope.usercrad = angular.copy($scope.user);

		var authData = {};
  		

	$scope.loginUser = function(){

		//console.log("asas");
		var isLogin = userAuth.checkUserAuth($scope.user.userName , $scope.user.password);
			isLogin.then(function(data){
				$scope.datav = data.data;
				authData = $scope.datav;

				store.set('logedUser', authData);
  				$scope.authUserData = store.get('logedUser');
				//console.log($scope.authUserData);
		});
		// alert(isLogin);

	}

});