angular.module('hairApp', ['bly.hair'])

.controller('rootController', function(blyHair) {
  alert(blyHair.replace('Hello, Bellycard!'));
});''