   //setting up the variables, wins, losses, guesses, guesses made by user
    // and the random letter the computer chooses, finally an array of the total letters
    var win = 0;
    var loss = 0;
    var guesses = 10;

    //guesses is the container for listing the guess, random letter is the guess
    //the computer makes, letters is the total groupings of letters

    var guessesSofar = [];

    var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                    "a", "s", "d", "f", "g", "h", "j", "k", "l", "z",
                    "x", "c", "v", "b", "n", "m"]

        // create varaibles to hold reference to the place in HTML 
   var guessesText = document.getElementById('guessestext');
   var winsText = document.getElementById('winstext');
   var lossesText = document.getElementById('lossestext');
   var guessesSoFartext = document.getElementById('guessessofartext');
   var guessesLefttext = document.getElementById('guesseslefttext');
 


    
        // using onkeyup to capture player input 

    document.onkeyup = function (event){
        var playerGuess = event.key; 

        // random generator, from Rock,paper scissor example 

        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(randomLetter);

            //if player guesses the same as random letter, they win +1, reset guesses, reset guesses so far
        if (playerGuess === randomLetter ){
            win++;
            guesses = 10
            guessesSofar = [];
        } 

            //else if player does not guess right, minus to guesses, and text content of player guess (very unsure here)
       else if (playerGuess !== randomLetter){
            guesses--;
            guessesSofar.textcontent = " ";
            guessesLefttext -1;
        }
        
        // if guesses =0, +1 to loss, reset guessesofar, reset guesses to 10
       else if (guesses == 0){
            loss++;
            guessesSofar = []
            guesses = 10;
        }
        // honestly this is the same as the above, i got one of them to work at some point, i swear
       else if (guessesSofar.indexOf(playerGuess) >=0){
                loss++;
                guessesSofar = [];
                guesses = 10;
        }
        //
        else {
            guessesSofar.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = guessesSofar;
            console.log(guessesSofar);

        }

        //display the user guesses, wins, losses, and guesses left
        guessesText.textContent = 
        winsText.textContent = "Wins: " + winsText;
        lossesText.textContent = "Losses: " + lossesText;
        guessesSoFartext.textContent = "Your Guesses soo far: " + playerGuess
        guessesLefttext.textContent = "Guesses left: " + guessesLefttext
    
    }

    