(function(){
   "use-strict";

   var module = angular.module("psMovies");

   module.component("movieApp",{
       templateUrl: "/ps-movies/movie-app.component.html",
       $routeConfig:[
           {path: "/list", component: "movieList", name: "List"},
           {path: "/about", component: "appAbout", name: "About"},
           {path: "/detail/:id/...", component: "movieDetails", name: "Details"}, // /... -> tels the component there is another child component that needs to be load.
           {path: "/**", redirectTo: ["List"]}
       ]
   })

}())