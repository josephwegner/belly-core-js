angular.module('holeApp', ['bly.hole'])

.controller('rootController', function(blyHole) {
  alert(blyHole.replace('Hello, Bellycard!'));
});