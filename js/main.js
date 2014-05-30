


// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the initial page
        .when('/', {
            templateUrl : 'views/initial.html'
        })

        // route for the about page
        .when('/test', {
            templateUrl : 'views/result.html'
        }); 
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // send in the input to the user to see if it matches
    $scope.custom = function(output) {
        $scope.output = deepaAnswer(output);
    }
});



// find matches based on user input
function deepaAnswer(input) {
    var response = '';

    // library of quotes
    var dictionary = {
        'quotes': [
            { 
                'match': 'home', 
                'quote': 'Are you kidding me?' 
            },
            { 
                'match': 'bathroom', 
                'quote': 'Fine' 
            }
        ]        
    };

    // sort through the dictionary to find the match
    $.each(dictionary.quotes, function(i, v) {

        // match is found
        if (input.indexOf(v.match) > -1) {
            response = v.quote;
            return false;
        }
        else {
            response = 'no match';
        }
    });

    // return the matched quote
    return response;
}