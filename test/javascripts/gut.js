angular.module('gutApp', ['bly.gut'])

.controller('rootController', function(blyGut) {
  alert(blyGut.replace('Hello, Bellycard!'));
});