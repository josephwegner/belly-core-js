angular.module('bly.drac', [])

.factory 'blyDrac', ->
  replace: (string) ->
      string.replace /card/g, 'drac'

injectBlyModule('bly.drac')

