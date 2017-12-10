  var app = angular.module("myApp",["ngRoute"]);

//factory
app.factory('GetData',function($http){
  return{
    //get data of movies from api
    movieData: function(type,passdata,response){
      var urlLink = "https://api.cinemalytics.com/v1/movie/" + "/" +passdata+ "/?auth_token=1EFAE82FE7F4F8E6813FD4FA429E5170";
      $http.get(urlLink).success(response);
    }
  }
})



//controller
app.controller('allMovie',function($scope,GetData,$routeProvider,$route,$location){

  $scope.year = $routeParams.year;

//call to factory for movie data
  GetData.movieData('year',$routeParams.year,function(response){
    $scope.movie = response;
  });

  //redirect to page
  $scope.getMovie = function(id){
    $location.path("/id/" + id);
  };

  ///redirect to page
   $scope.getMovie = function(year){
    $location.path("/year/" + year);
  };
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