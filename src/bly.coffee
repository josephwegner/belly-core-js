try
  angular.module 'bly'
catch e
  angular.module 'bly', []

injectBlyModule = (name) ->
  angular.module('bly').requires.push name