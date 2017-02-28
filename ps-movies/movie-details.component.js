(function(){
   "use strict";

   var module = angular.module("psMovies");

   module.component("movieDetails",{
       templateUrl: "/ps-movies/movie-details.component.html",
       // $canActivate: function($timeout){ // $canActivate, if returned false user may not activate this component
       //     return $timeout(function(){   // useful for authorization for example.
       //         return true;              // function here will block access to this component for 2 seconds.
       //     }, 2000);
       // },
       $routeConfig:[
           {path: "/overview", component:"movieOverview", name: "Overview"},
           {path: "/cast", component:"movieCast", name: "Cast"},
           {path: "/director", component:"movieDirector", name: "Director"},
       ],
       controllerAs: "model",
       controller: function(){
           var model = this;

           // OnActivate is called when component is activated (when user navigates to the url...)
           // this method can also get 2 parameters, e.g: function(next, previous) -> next wil contain details about
           // current url (of this component) and previous will contain details about the url we navigated from.
           model.$routerOnActivate = function(next){
             model.id = next.params.id;
           };
       }
   });

   module.component("movieOverview",{
       template: "This is the overview."
   });

    module.component("movieCast",{
        template: "This is the cast."
    });

    module.component("movieDirector",{
        template: "This is the director."
    });

}());