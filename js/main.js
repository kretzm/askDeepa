


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
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.custom = function(output) {
        $scope.output = deepaAnswer(output);
    }
});




function deepaAnswer(input) {
    var response = "";
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

    $.each(dictionary.quotes, function(i, v) {
        if (v.match == input) {
            response = v.quote;
            return false;
        }
        else {
            response = "none";
        }
    });

    return response;
}