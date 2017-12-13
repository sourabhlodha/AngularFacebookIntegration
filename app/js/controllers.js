/**
 * 
 *
 * Main controller.js file
 */



//----------------- MainCtrl -----------------
function MainCtrl($scope, $rootScope, $location) {

    console.log($rootScope.$state);

    if ($rootScope.userLogin = "no") {
        // $location.path('/');
    }

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };


    //----------------- logout -----------------
    $scope.logout = function () {
        $rootScope.userLogin = "no";
        $rootScope.LoginUser = "";
        $location.path('/');
    }


    this.pageName = 'This Is Page Two';
    this.helloText = 'Welcome in Pahe One';
    this.descriptionText = 'It is Simple example for start AngularJS web app';

};

//-----------------Login -----------------
function Login($scope, $rootScope, $http, $location) {
    $scope.loginSubmit = function () {
        if ($scope.username !== undefined && $scope.password !== undefined) {
            $http.get('app/js/json/User.json').success(function (data) {
                var userList = data.userList;
                var i;
                for (i = 0; i < userList.length; i++) {
                    if (userList[i].userName === $scope.username && userList[i].Password === $scope.password) {
                        $rootScope.userLogin = "Yes";
                        $rootScope.LoginUser = $scope.username;
                        $location.path('/DashBoard');
                    } else {
                        $scope.UserError = "unrar password incorrect"
                    }
                }
            }).error(function (data) {


            });;

        }

    }
};

//--------------------------------FBLogin---------------------/

function FacebookLogin($scope, $rootScope, $http, $location) {
    $scope.FBLogin = function () {
       FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
       console.log(response);
       var accesstoken=FB.getAuthResponse();
       console.log(accesstoken);
     });
   FB.api(
  '/me',
  'GET',
  {"fields":"about,gender,friendlists,friends,relationship_status,email,birthday,name,picture,education,albums"},
  function(response) {
      console.log(response);
  }
);
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});

    }
};


//-----------------DashBoard -----------------
function DashBoard($scope, $rootScope, $http) {
   
   


}




//********************Controller for count ***************/


angular
    .module('app')
    .controller('MainCtrl', MainCtrl)
    .controller('Login', Login)
    .controller('FacebookLogin',FacebookLogin)
    .controller('DashBoard',DashBoard)
