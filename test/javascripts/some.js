angular.module('someApp', ['bly'])

.controller('rootController', function(blyHair, blyHole) {
  alert(blyHair.replace('Hello, Bellycard!'));
  alert(blyHole.replace('Hello, Bellycard!'));
});