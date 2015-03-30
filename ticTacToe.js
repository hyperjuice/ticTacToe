$(function() {
	var playerTurn = "X";
	function Player(symbol) {
		this.mark = symbol;
	}

	function Board() {
		this.playerX = new Player("X");
		this.playerO = new Player("O");
		this.$boxes = $('.box');
		this.$reset = $('#reset');
	}

	Board.prototype.switchPlayer = function() {
		this.boxes.click(function() {
			var $switchTurn = $(event.target);
			if ($switchTurn.html() === "&nbsp;") {
				if (playerTurn === "X") {
					$switchTurn.html("X");
					$switchTurn.css("background-color", "purple");
				    if (checkForWinner(playerTurn)) {
				    	$("#header").html(playerTurn + " wins!");
				    	alert(playerTurn + " wins!");
				    	return location.reload();
					}
				    playerTurn = "O";
				    $("#header").html("Now it's O's turn");
				} else {
			    	$switchTurn.html("O");
			    	$switchTurn.css("background-color", "orange");
			    	if (checkForWinner(playerTurn)) {
			    		$("#header").html(playerTurn + " wins!");
			    		alert(playerTurn + " wins!");
			    		return location.reload();
				    }
			    	playerTurn = "X";
			    	$("#header").html("Now it's X's turn");
				}

				function checkForWinner(move) {
			    	var result = false;
			    	if (checkRow(1, 2, 3, move) || 
			    	    checkRow(4, 5, 6, move) || 
			    	    checkRow(7, 8, 9, move) ||   
			    	    checkRow(1, 4, 7, move) ||
			    	    checkRow(2, 5, 8, move) || 
			    	    checkRow(3, 6, 9, move) || 
			    	    checkRow(1, 5, 9, move) || 
			    	    checkRow(3, 5, 7, move)) {
			    		result = true;
			    	}
			    	return result;
				}

			    function checkRow(a, b, c, move) {
			    	var result = false;
			    	if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
			    		result = true;
			    	}
			    	return result;
			    }

			    function getBox(number) {
			    	return $("#cell" + number).html();
			    }
			}
		}
	};

	Board.prototype.init = function() {
		var _this = this;
		this.$boxes.click(function(evnt) {
			_this.nextPlayer();
		}	
	};

	Board.prototype.reset = function() {
		this.$reset.click(function(event) {
			location.reload();
		}
	};

	var board = new Board();
  	board.init();
};