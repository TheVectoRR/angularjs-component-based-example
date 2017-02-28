(function() {
    "use strict";

    var module = angular.module("psMovies");

    // transclude, allows to import html content from outside the component.
    // inorder to allow a component to that, it needs to set the transclude flag to true.
    module.component("accordion", {
        transclude: true,
       template: "<div class='panel-group' ng-transclude></div>",
        controller: function(){
            var model = this;
            var panels = [];

            model.selectPanel = function(panel){
              for(var i in panels){
                  if(panel === panels[i]){
                      panels[i].turnOn();
                  }else{
                      panels[i].turnOff();
                  }
              }
            };

            model.addPanel = function(panel){
                panels.push(panel);
                if(panels.length > 0){
                    panels[0].turnOn();
                }
            };
        }
    });

    module.component("accordionPanel", {
        bindings:{
            "heading": "@" // attribute binding
        },
        require:{
          "parent": "^accordion" // this will find a parent component with the given name
        },
        controllerAs: "model",
        controller: function(){
            var model = this;
            model.selected = false;

            model.$onInit = function(){
                model.parent.addPanel(model);
            }

            model.turnOn = function(){
                model.selected = true;
            }

            model.turnOff = function(){
                model.selected = false;
            }

            model.select = function(){
                model.parent.selectPanel(model);
            }
        },
        transclude: true,
       template: "<div class='panel panel-default'>" +
                    "<div class='panel-heading' ng-click='model.select()'>" +
                        "<h4 class='panel-title'>{{model.heading}}</h4>" +
                    "</div>" +
                    "<div ng-if='model.selected' class='panel-body' ng-transclude>" +
                    "</div>" +
                "</div>"
    });

}());