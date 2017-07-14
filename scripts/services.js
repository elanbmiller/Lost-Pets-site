'use strict';

angular.module('LostPetsApp')
  .constant("baseURL", "http://localhost:3000/")
  .service('fileUploadService', function ($http, $q) {
 
        this.uploadFileToUrl = function (file, uploadUrl) {
            //FormData, object of key/value pair for form fields and values
            var fileFormData = new FormData();
            fileFormData.append('file', file);
 
            var deffered = $q.defer();
            $http.post(uploadUrl, fileFormData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
 
            }).success(function (response) {
                deffered.resolve(response);
 
            }).error(function (response) {
                deffered.reject(response);
            });
 
            return deffered.promise;
        }
    })
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
