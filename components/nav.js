module.exports = {
  controller($scope, board) {
    $scope.board = board

  },
  template: `
    <div class="navbar navbar-light fg-faded">
      <a href="#" class="navbar-brand">Minesweeper</a>
    </div>
  `
}
