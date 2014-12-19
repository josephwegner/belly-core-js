angular.module('bly.hole', [])

.factory 'blyHole', ->
  replace: (string) ->
      string.replace /card/g, 'hole'

injectBlyModule('bly.hole')
