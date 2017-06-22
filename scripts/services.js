'use strict';

angular.module('LostPetsApp')
  .factory('petDBFactory', function() {

    var petFac = {};

    var DBofPets = {

      name: 'Search by literally anything',
      image: 'image/location',
      category: 'search',
      label: 'DATABASE',
      price: '4.99',
      description: 'Enter characteristics such as "retriever" or "brown, husky" or "peyton, retriever"',
      comments: [{
          rating: 5,
          comment: "comment",
          author: "author",
          date: "2012-10-16T17:57:28.556094Z",
          moreDetails: "JL's Details"
        },
        {
          rating: 4,
          comment: "comment",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z",
          moreDetails: "PM's Details"
        },
        {
          rating: 3,
          comment: "comment",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z",
          moreDetails: "MJ's Details"
        },
        {
          rating: 4,
          comment: "comment",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z",
          moreDetails: "RS's Details"
        },
        {
          rating: 2,
          comment: "comment",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z",
          moreDetails: "25cents's Details"
        }

      ]

    }; //closes var dishes = ...


    petFac.getDB = function() {
      return DBofPets;
    };
/*    dishFac.getDish = function(index) {
      return dishes[index];
    };*/
    return petFac;

  });
