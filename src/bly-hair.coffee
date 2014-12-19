angular.module('bly.hair', [])

.factory 'blyHair', ->
  replace: (string) ->
      string.replace /card/g, 'hair'

injectBlyModule('bly.hair')
