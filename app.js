var angular = require('angular')
var minesweeper = require('minesweeper')

var ma = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
})
var board = new minesweeper.Board(ma)

angular.module('app', [])
  .constant('board', board)
  .component('appComponent', require('./components/app'))
  .component('navComponent', require('./components/nav'))
  .component('boardComponent', require('./components/board'))
