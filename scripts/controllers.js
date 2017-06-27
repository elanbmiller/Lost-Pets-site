'use strict';

angular.module('LostPetsApp')
    .controller('DishDetailController', ['$scope', 'petDBFactory', function ($scope, petDBFactory) {


        //Stuff for dealing with no server info
        $scope.showData = true;
        $scope.message = "Processing Data ...";

        //initialize to empty and then try to get data from server -- this is $http method
        /*$scope.petDB = [];
        petDBFactory.getDB()
        .then(
            function(response) {
                $scope.DBofPets = response.data;
                console.log("inside");
                console.log(response.data);
                $scope.showData = true;
            },
            function(response){
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );*/

        $scope.petDB = petDBFactory.getDB().query();


        console.log("Printing petDB");
        console.log($scope.petDB);
        //initially false
        $scope.showDetails = false;

        $scope.entry = { author: "", date: new Date().toISOString(), moreDetails: "" };


        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };

        //$scope.dish = dish;

    }])

    .controller('ContactController', ['$scope', function ($scope) {
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };
        var channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

.controller('FeedbackController', ['$scope', function($scope) {
    $scope.sendFeedback = function() {
      console.log($scope.feedback);
      if ($scope.feedback.agree && ($scope.feedback.mychannel === "") && !$scope.feedback.mychannel) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      } else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {
          mychannel: "",
          firstName: "",
          lastName: "",
          agree: false,
          email: ""
        };
        $scope.feedback.mychannel = "";

        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };
  }])





.controller('PetDetailController', ['$scope', function($scope) {
    $scope.submitEntry = function () {
    console.log($scope.entry);

    //Step 2: This is how you record the date
    $scope.entry.date = new Date().toISOString();

    // Step 3: Push your comment into the dish's comment array
    $scope.DBofPets.entries.push($scope.entry);

    //Step 4: reset your form to pristine
    $scope.commentForm.$setPristine();

    //Step 5: reset your JavaScript object that holds your comment
    $scope.entry = {author: "", date: new Date().toISOString()};
    console.log($scope.entry);
    };
}]);



