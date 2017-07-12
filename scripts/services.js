'use strict';

angular.module('LostPetsApp')
  .constant("baseURL", "http://localhost:3000/")
  .factory('petDBFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    var petFac = {};

//function with $http method
    /*petFac.getDB = function () {
      console.log("here is the url...");
      console.log("base url: " + baseURL);
      console.log($http.get(baseURL+"DBofPets"));
      return $http.get(baseURL+"DBofPets");
    };*/

//function with $resource method (from ng-resource module)
      petFac.getDB = function(){
        return $resource(baseURL+"DBofPets",null,{
          'update':{//update function needs to be implemented
            method:'PUT' 
          }
        });
      }



    /*    dishFac.getDish = function(index) {
          return dishes[index];
        };*/
    return petFac;

  }]);
