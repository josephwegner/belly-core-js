angular.module('bly.gut', [])

.factory 'blyGut', ->
  replace: (string) ->
      string.replace /card/g, 'gut'

injectBlyModule('bly.gut')
