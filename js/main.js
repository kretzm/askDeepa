

//---------- Angular Goodness ---------

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // user root index page
        .otherwise('/');
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // define model properties
    $scope.hintVisible = false;
    $scope.randBackground = randBackground();
    $scope.randImage = randImage();

    // send in the input to the user to see if it matches
    $scope.custom = function(output) {
        $scope.output = deepaAnswer(output);
        $scope.randBackground = randBackground();
        $scope.randImage = randImage();
    };
    $scope.toggleHint = function()
    {
        $scope.hintVisible = !$scope.hintVisible;
    };
    $scope.reset = function()
    {
        $scope.output = null;
    };

});



// find matches based on user input
function deepaAnswer(input) {
    var response = 'no match';
    var randDefault = Math.floor((Math.random() * 4) + 1);
    var exit = 0;

    // library of quotes
    var dictionary = {
        'quotes': {
            'home': 'Are you kidding me?',
            'bathroom': 'Fine.',
            'have to': 'Child, stop your complaining.',
            'problem': 'Do I really have to deal with this?',
            'issue': "Talk to Ed.",
            'vacation': "GET OUTTA HERE!",
            'bug': "What is wrong with you!?",
            'good': "Heyyy... look at you!",
            'mike': "Mike is the coolest person in the world!",
            'misa': "Misa, whatever you're doing, I forbid you from doing it",
            'jackman': "Hugh Jackman is a beautiful man",
            'ali': "You are an interesting man Ali",
            'try': "I believe in you. Just do it.",
            "can't": "For the love of God...",
            "hate": "I hate you",
            "eat": "I'm down as long as it's vegetarian"
        }       
    };

    // sort through the dictionary to find the match
    angular.forEach(dictionary.quotes, 
      function(value, key) {
       
        if (exit == 0) {
          
          // match is found
          if (input.toLowerCase().indexOf(key) >= 0) {
            response = value;
            exit = 1;
          }
          else 
          {
            if(randDefault == 1) {
              response = "I hate you.";
            }
            else if(randDefault == 2) {
              response = "Yes. Seriously, Just Yes.";
            }
            else if(randDefault == 3) {
              response = "Let me think about it."
            }
            else {
              response = "Go away. Stop bugging me.";
            }     
          }
        }              
      });

    // return the matched quote
    return response;
}





function randBackground() {
  var rand = Math.floor((Math.random() * 4) + 1);
  return "/images/deepa-bg-" + rand + ".jpg";
}

function randImage() {
  var rand = Math.floor((Math.random() * 3) + 1);
  return rand;
}

