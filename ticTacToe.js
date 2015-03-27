window.onload = function() {
	var move = document.getElementsByClassName("box"); 
	var playerTurn = "X";	
	for (var i = 0; i < move.length; i++) { 
		move[i].addEventListener("click", function(event){ // Thanks Patrick
			var switchTurn = event.target;  // 
			if (switchTurn.innerHTML === "&nbsp;") {
				switchTurn.innerHTML = playerTurn;
				if (playerTurn === "X") {
				    playerTurn = "O";
				    switchTurn.style.backgroundColor="green"; //Thanks Hing
			    } else {
			    	playerTurn = "X";
			    	switchTurn.style.backgroundColor="red";
			    }
		    }
		});
	}
	var reset = document.getElementById("reset"); //Thanks Hing
	reset.onclick = function() {
		location.reload();
	};
};





