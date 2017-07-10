'use strict';

angular.module('LostPetsApp')
  .constant("baseURL", "http://localhost:3000/")
  .factory('petDBFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    var petFac = {};

    // var DBofPets = {

    //   name: 'Search by literally anything',
    //   image: 'image/location',
    //   category: 'search',
    //   label: 'DATABASE',
    //   price: '4.99',
    //   description: 'Enter characteristics such as "retriever" or "brown, husky" or "peyton, retriever"',
    //   entries: [{
    //     author: "author",
    //     date: "2012-10-16T17:57:28.556094Z",
    //     moreDetails: "JL's Details",
    //     picture: "../img/catHidingMirror.jpg"
    //   },
    //   {
    //     author: "Paul McVites",
    //     date: "2014-09-05T17:57:28.556094Z",
    //     moreDetails: "PM's Details To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from men's motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.",
    //     picture: "../img/dogBehindTree.jpg"
    //   },
    //   {
    //     author: "Michael Jaikishan",
    //     date: "2015-02-13T17:57:28.556094Z",
    //     moreDetails: "MJ's Details",
    //     picture: "../img/pugInBlanket.jpg"
    //   },
    //   {
    //     author: "Ringo Starry",
    //     date: "2013-12-02T17:57:28.556094Z",
    //     moreDetails: "RS's Details",
    //     picture: "../img/pugInSweater.jpg"
    //   },
    //   {
    //     author: "25 Cent",
    //     date: "2011-12-02T17:57:28.556094Z",
    //     moreDetails: "25cents's Details",
    //     picture: "../img/Peyton.jpg"
    //   }

    //   ]

    // }; //closes var dishes = ...

//function with $http method
    /*petFac.getDB = function () {
      console.log("here is the url...");
      console.log("base url: " + baseURL);
      console.log($http.get(baseURL+"DBofPets"));
      return $http.get(baseURL+"DBofPets");
    };*/

//function with $resource method (from ng-resource module)
      petFac.getDB = function(){
        return $resource(baseURL+"DBofPets",null,{'update':{method:'PUT' }});//update function needs to be implemented
      }



    /*    dishFac.getDish = function(index) {
          return dishes[index];
        };*/
    return petFac;

  }]);
