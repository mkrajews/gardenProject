angular.module('app').controller('loginCtrl', function($scope, homeSvc, $state) {

  $scope.test = "working";
  $scope.login = function(email, password) {
    // console.log(username, password);
    if(email && password) {
      // console.log("scope.login fired");
      homeSvc.login({email:email, password:password}).then(function(response) {
        var authenticated = response.data[1];
        // console.log(response.data);
        if (authenticated) {
          homeSvc.user = (response.data[0][0]);
          homeSvc.auth = (authenticated);
          $state.go('myGreenThumb.home');
        }
        else console.log("Wrong info!");
      });
    }
    else console.log("Please check your self");
  };
});
