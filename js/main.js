

//---------- Angular Goodness ---------

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // user root index page
        .otherwise('/');
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // send in the input to the user to see if it matches
    $scope.custom = function(output) {
        $scope.output = deepaAnswer(output);
    };
    $scope.reset = function()
    {
        $scope.output = null;
    };

});



// find matches based on user input
function deepaAnswer(input) {
    var response = 'no match';

    // library of quotes
    var dictionary = {
        'quotes': {
            'home': 'Are you kidding me?',
            'bathroom': 'Fine'
        }       
    };

    // sort through the dictionary to find the match
    angular.forEach(dictionary.quotes, 
        function(value, key) {

        // match is found
        if (input.indexOf(key) >= 0) {
            response = value;
            return false;
        }
    });

    // return the matched quote
    return response;
}












//---------- Gradient Background ---------
// http://codepen.io/zacharyhickson/pen/efaik

$( document ).ready(function() {
    var colors = new Array(
      [230,105,147],
      [58,164,178],
      [40,26,88],
      [232,24,122]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.02;

    function updateGradient() {
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];

      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

        $('#gradient').css({background: "-webkit-radial-gradient(80% 10%, circle, "+color1+", transparent), -webkit-radial-gradient(80% 50%, circle, "+color2+", transparent)"});
        
        step += gradientSpeed;
        if ( step >= 1 )
        {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];
          
          //pick two new target color indices
          //do not pick the same as the current one
          colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          
        }
    } setInterval(updateGradient,0.1);
});