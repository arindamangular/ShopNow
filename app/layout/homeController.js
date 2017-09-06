app.controller("homeController" , function($scope, userAuth, store, $state){
	$scope.userLogout = function () {
		
		store.remove('logedUser');
		$state.go('root', null, {reload:true});
	}
});