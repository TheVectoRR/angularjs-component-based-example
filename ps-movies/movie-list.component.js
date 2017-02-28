(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieList", {
        templateUrl: "ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller],
        // bindings: {                          // how to navigate programatically
        //     "$router": "<"
        // }
    });

    function controller($http){
        var model = this;

        model.movies = [];

        model.$onInit = function(){
            fetchMovies($http).then(function(movies){
               model.movies = movies;
            });
        };

        // module.goto = function(id){                          // how to navigate programatically
        //     module.$router.navigate(["Details", {id:id}]);
        // };

        model.setRating = function(movie, newRating){
           movie.rating = newRating;
        };

        model.upRating = function(movie){
            if(movie.rating < 5){
                movie.rating += 1;
            }
        };

        model.downRating = function(movie){
            if(movie.rating > 1){
                movie.rating -= 1;
            }
        };
    }

    function fetchMovies($http){
        return $http.get("/movies.json")
            .then(function(response){
                return response.data;
            });
    }

}());