var { CellStateEnum, CellFlagEnum } = require('minesweeper')

module.exports = {
  controller($scope, board) {
    $scope.board = board
    $scope.grid = board.grid()
    $scope.cellState = function (cell) {
      if (cell.state === CellStateEnum.CLOSED) {
        if (cell.flag === CellFlagEnum.NONE) {
            return 'X'
        } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
            return '!'
        } else if (cell.flag === CellFlagEnum.QUESTION) {
            return '?'
        }
      } else if (cell.state === CellStateEnum.OPEN) {
         if (cell.isMine) {
           return '*'
         } else {
           return cell.numAdjacentMines === 0 ?
             ' ' :
             cell.numAdjacentMines.toString()
         }
      }
    }

    $scope.openCell = function (cell) {
      board.openCell(cell.x, cell.y)
      $scope.grid = board.grid()
    }

  },
  template:
  `<div class="container">
    <div class="row" ng-repeat="row in grid" row="row" >
      <div class="col-xs-1" ng-repeat="cell in row" ng-click="openCell(cell)">
        {{cellState(cell)}}
      </div>
    </div>
  </div>`
}
