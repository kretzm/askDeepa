

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

    // send in the input to the user to see if it matches
    $scope.custom = function(output) {
        $scope.output = deepaAnswer(output);
        $scope.randBackground = randBackground();
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
            'have to': 'Child, stop your complaining. Yes.',
            'problem': 'Do I really have to deal with this?',
            'issue': "Talk to Ed."
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
              response = "No. Just No.";
            }
            else if(randDefault == 2) {
              response = "Yes. Seriously, Just Yes";
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





$(document).ready(function() {

  //show hint text
  //$(".ng-scope").on("click", ".hint-text", function() {
  //  $(".hint-content").fadeIn(600);
  //});

  randBackground();
});


function randBackground() {
  var rand = Math.floor((Math.random() * 4) + 1);

  //randomize the background
  //console.log($(".modal").length);
  //$(".response").css("background", "url(/images/deepa-bg-" + rand + ".jpg");
  console.log(rand);

  return "/images/deepa-bg-" + rand + ".jpg";
}

