// <script type="text/javascript">
// first the user should make a choice
//second the computer should make a choice
//capture the choice of the user and capture the choice of the computer
//compare the choices and determine a win, loss or tie
//display the result to the user
	
	var options = ["d","o","g"];
	var wins = 0;
	var losses = 0;
	var guess = 0;

	//This will display working on the screen when any key on the keyboard is pressed.
	document.onkeyup = function(){
		alert("Guess what letter I am thinking of by pressing a key from the keyboard");

		//next capture what the user is actually pressing
		var userguess = String.fromCharCode(event.keyCode).toLowerCase();// is handling user error just to make sure only the lower case is given to the computer.

		console.log(userguess);

		var computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);

		if (userguess=='d' || userguess=='o' || userguess=='g') {

			if((userguess=='d') && (computerGuess=='d')) {
				alert("You Guess correct!");
				wins++;
			}

			if((userguess=='o') && (computerGuess=='o')) {
				alert("You Guess correct!!");
				wins++;
			}

			if((userguess=='g') && (computerGuess=='g')) {
				alert("You Guess correct!");
				wins++;
			}

			if((userguess=='s') && (computerGuess=='r')) {
				alert("You Guess wrong!");
				losses++;
			}

			if((userguess=='p') && (computerGuess=='s')) {
				alert("You Guess wrong!");
				losses++;
			}

			if((userguess=='p') && (computerGuess=='r')) {
				alert("You Guess wrong!");
				losses++;
			}


			// if((userguess=='r') && (computerGuess=='r')) {
				// alert("You tie!");
				// ties++;
			// }

		} else {
				alert("Please press a letter from the keyboard");
		}

		var html = "<h1> The Psychic Game </h1>" + "<p> Guess what letter I am thinking of... </p>" + "<p> Wins: " + wins + "</p>" + "<p> losses: " + losses + "</p>" + "<p> Guess Left: " + guess + "</p>";

		document.querySelector('#game').innerHTML = html;
	}
	
// </script>