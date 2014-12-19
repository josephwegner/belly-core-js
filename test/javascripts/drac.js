angular.module('dracApp', ['bly.drac'])

.controller('rootController', function(blyDrac) {
  alert(blyDrac.replace('Hello, Bellycard!'));
});