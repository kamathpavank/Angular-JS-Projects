  var app = angular.module("myApp",["ngRoute"]);

  app.config(function($routeProvider){
  	$routeProvider
  	.when("/year/:year",{
  		templateUrl : "template/main.html",
  		controller :"allMovie"
  	})

  	.when("/year/:year",{
  		templateUrl : "template/single.html",
  		controller : "singleMovie"
  	})

  	.otherwise({redirectTo: '/year/2016'});
  })