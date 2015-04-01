$(function() {
  function Player(symbol) {
    this.mark = symbol;
  }
  function Board() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.$boxes = $('.box');
    this.$reset = $('#reset');
    this.playerTurn = "X";
    this.$reset.click(function(event) {
      location.reload();
    });
  }

  Board.prototype.init = function() {
    var _this = this;
        this.$boxes.click(function() {
      var $switchTurn = $(event.target);

      if ($switchTurn.html() === "&nbsp;") {
        if (_this.playerTurn === "X") {
          $switchTurn.html("X");
          $switchTurn.css("background-color", "purple");
          if (_this.checkForWinner(_this.playerTurn)) {
            $("#header").html(_this.playerTurn + " wins!");
            alert(_this.playerTurn + " wins!");
            return location.reload();
          }
          _this.playerTurn = "O";
          $("#header").html("Now it's O's turn");
        } else {
          $switchTurn.html("O");
          $switchTurn.css("background-color", "orange");
          if (_this.checkForWinner(_this.playerTurn)) {
            $("#header").html(_this.playerTurn + " wins!");
            alert(_this.playerTurn + " wins!");
            return location.reload();
          }
          _this.playerTurn = "X";
          $("#header").html("Now it's X's turn");
        }
      }
    });
  };

  Board.prototype.checkForWinner = function(move) {
    var result = false;
    if (this.checkRow(1, 2, 3, move) || 
      this.checkRow(4, 5, 6, move) || 
      this.checkRow(7, 8, 9, move) ||   
      this.checkRow(1, 4, 7, move) ||
      this.checkRow(2, 5, 8, move) || 
      this.checkRow(3, 6, 9, move) || 
      this.checkRow(1, 5, 9, move) || 
      this.checkRow(3, 5, 7, move)) {
      result = true;
    }
    return result;
  }

  Board.prototype.checkRow = function(a, b, c, move) {
    var result = false;
    if (this.getBox(a) === move && this.getBox(b) === move && this.getBox(c) === move) {
      result = true;
    }
    return result;
  }

  Board.prototype.getBox = function(number) {
    return $("#cell" + number).html();
  }

  Board.prototype.switchPlayer = function() {
    var _this = this;
  };

  var board = new Board();
  board.init();
});
