  var app = angular.module("myApp",["ngRoute"]);

//factory
app.factory('GetData',function($http){
  return{
    movieData: function(type,passdata,response){
      var urlLink = "https://api.cinemalytics.com/v1/movie/" + "/" +passdata+ ""
    }
  }
})



//controller
app.controller('allMovie',function($scope,GetData,$routeProvider,$route,$location){

});

//controller
app.controller('singleMovie',function($scope,GetData,$routeProvider,$route,$location){

});
  app.config(function($routeProvider){
  	$routeProvider
  	.when("/year/:year",{
  		templateUrl : "template/main.html",
  		controller :"allMovie"
  	})

  	.when("/id/:ID",{
  		templateUrl : "template/single.html",
  		controller : "singleMovie"
  	})

  	.otherwise({redirectTo: '/year/2016'});
  })