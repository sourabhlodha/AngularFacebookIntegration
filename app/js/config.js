function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    // Configure Idle settings


    $urlRouterProvider.otherwise("/Login");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        //Login
        .state('Login', {
            url: "/Login",
            templateUrl: "views/Login.html",
            data: {
                pageTitle: 'Login',
                specialClass: 'page-header-none'
            }            
        })
        //Dashboard
        .state('DashBoard',{
            url:"/DashBoard",
            templateUrl:"views/DashBoard.html",
            data:{
                pageTitle:'Dashboard',
                specialClass:'page-header'
            }
        })


}
angular
    .module('app')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
         $rootScope.userLogin = "no";
        $rootScope.LoginUser = "";
    });