(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "ps-movies/movie-rating.component.html",
        bindings:{
            value: "<"
        },
        transclude: true, // a flag allowing saying this component brings html-content from the outside world.
        controllerAs: "model",
        controller: function(){
            var model = this;

            model.$onInit = function(){
                model.entries = new Array(model.value); // array because of ng-repeat
            };

            model.$onChanges = function(){
                model.entries = new Array(model.value);
            };
        }
    });
}());