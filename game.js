 		var welcome= window.prompt("Please enter your name ");
		document.write( welcome +" ,Welcom to play this game");

			var kind = 0;
			var paperTimes = 0;
			var scissorsTimes= 0;
			var rockTimes = 0;
			function play()
			{
				kind++;
				var play = [ "scissors", "paper", "rock" ];
				var theComputerChoice = play[Math.floor(Math.random()*3)];
				var theUserChoice = (document.theUserChoice.Selection.value);
				
				document.getElementById('play').innerHTML = theComputerChoice;
				document.getElementById('theComputerChoice').innerHTML = theComputerChoice;
				document.getElementById('theUserChoice').innerHTML = theUserChoice;
				document.getElementById('output').innerHTML= output;
				var output= output();
				
				
			 						//==============********===============//
			 	if (theUserChoice=="paper") {
			 		paperTimes++;

			 	}
			 	if (theUserChoice=="scissors"){
			 		scissorsTimes++;
			 	}
			 	if (theUserChoice=="rock"){
			 		rockTimes++;
			 	}
				document.getElementById("output").innerHTML= kind;
				document.getElementById('paperTimes').innerHTML= paperTimes;
				document.getElementById('scissorsTimes').innerHTML= scissorsTimes;
				document.getElementById('rockTimes').innerHTML= rockTimes;
			    				
									//==============********===============//
						 
			function output()
			{
				var theUserChoice= "";
				if (theComputerChoice==theUserChoice){
					return output = " There is Draw !!"
				}
				else if (theComputerChoice== "paper" && theUserChoice== "scissors")
				{
					return output = " You Win :) "
				}
				else if (theComputerChoice== "paper" && theUserChoice== "rock")
				{
					return output = " You Lost :( "
				}
				else if (theComputerChoice== "scissors" && theUserChoice== "paper")
				{
					return output = " You Lost :( "
				}
				else if (theComputerChoice== "scissors" && theUserChoice== "rock")
				{
					return output = " You Win :) "
				}
				else if (theComputerChoice== "rock" && theUserChoice== "paper")
				{
					return output = " You Win :) "
				}
				else if (theComputerChoice== "rock" && theUserChoice== "scissors"){

					return output = " You Lost :( "
				}
			}
		}