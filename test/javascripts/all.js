angular.module('allApp', ['bly'])

.controller('rootController', function(blyHair, blyHole, blyDrac, blyGut) {
  alert(blyHair.replace('Hello, Bellycard!'));
  alert(blyDrac.replace('Hello, Bellycard!'));
  alert(blyGut.replace('Hello, Bellycard!'));
  alert(blyHole.replace('Hello, Bellycard!'));
});''