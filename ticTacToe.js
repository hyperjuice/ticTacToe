$(function() {
	var $move = $(".box"); 
		playerTurn = "X";

		//set the click functionality
		$move.click(function(event) {
			var $switchTurn = $(event.target);  
			if ($switchTurn.html() === "&nbsp;") {

				//mark a cell as "X" or "O"
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
			    
			    //gets its input from checkBox below
			    function checkForWinner(move) {
			    	var result = false;
			    	if (checkRow(1, 2, 3, move) || 
			    	    checkRow(4, 5, 6, move) || 
			    	    checkRow(7, 8, 9, move) ||   // place the winner logic from line 14 and 24 into this function
			    	    checkRow(1, 4, 7, move) ||
			    	    checkRow(2, 5, 8, move) || 
			    	    checkRow(3, 6, 9, move) || 
			    	    checkRow(1, 5, 9, move) || 
			    	    checkRow(3, 5, 7, move)) {
			    		result = true;
			    	}
			    	return result;
			    }

			    //gets its input from getBox below
			    function checkRow(a, b, c, move) {
			    	var result = false;
			    	if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
			    		result = true;
			    	}
			    	return result;
			    }

			    //
			    function getBox(number) {
			    	return document.getElementById("cell" + number).innerHTML;
			    	//return $("#cell" + number).html;
			    }
		    } 
		});

	//reset button
	$("#reset").click(function() {
		location.reload();
	});
});