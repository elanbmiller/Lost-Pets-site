'use strict';

angular.module('LostPetsApp')
  .controller('DishDetailController', ['$scope', 'petDBFactory', function($scope, petDBFactory) {

    $scope.petDB = petDBFactory.getDB();

    //initially false
    $scope.showDetails = false;

    $scope.comment = {author: "", rating: 5, comment: "", date: new Date().toISOString(), moreDetails: ""};


    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };

    //$scope.dish = dish;

  }])

  .controller('ContactController', ['$scope', function($scope) {
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
    $scope.submitComment = function () {
    console.log($scope.comment);

    //Step 2: This is how you record the date
    $scope.comment.date = new Date().toISOString();

    // Step 3: Push your comment into the dish's comment array
    $scope.dish.comments.push($scope.comment);

    //Step 4: reset your form to pristine
    $scope.commentForm.$setPristine();

    //Step 5: reset your JavaScript object that holds your comment
    $scope.comment = {author: "", rating: 5, comment: "", date: new Date().toISOString()};
    console.log($scope.comment);
};


  }]);
