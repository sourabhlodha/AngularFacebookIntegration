/**
 * 
 *
 */
(function () {
    angular.module('app', [
        'ui.router',                   // Routing
        'oc.lazyLoad',                // ocLazyLoad
        'ui.bootstrap'               // Ui Bootstrap      
      
    ])
})();
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1966353557024130',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
      
    FB.AppEvents.logPageView();   
    FB.getLoginStatus(function(response){
if(response.status === 'connected'){
console.log("not connected");
}else if(response.status === 'not_authorized'){
console.log("not auth");
}
else{
console.log("we are not logged in to facebook");
}
});
      
  };

  ((function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk')));

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad