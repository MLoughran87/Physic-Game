   //setting up the variables, wins, losses, guesses, guesses made by user
    // and the random letter the computer chooses, finally an array of the total letters
    var win = 0;
    var loss = 0;
    var guesses = 10;
    var guessesSofar = [];
    var randomLetter = randomletter;
    var letters = "qwertyuiopasdfghjklzxcvbnm"

        // random generator, from Crystal example 
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

    function jsGuess(){
        randomLetter = letters[Math.floor(Math.random() * letters.length)]
        console.log(randomLetter)
    }
        // using onkeyup to capture player input 

    document.onkeyup = function (event){
        var playerGuess = event.key; 

        if (playerGuess === randomLetter ){
            win++;
            guesses = 10
            guessesSofar = [];
        } 

        jsGuess();
        if (playerGuess !== randomLetter){
            guesses--;

        }

        if (guesses == 0){
            loss++;
            guessesSofar = []
            guesses = 10;
        }

        if (guessesSofar.indexOf(playerGuess) >=0){

        }

        else {
            guessesSofar.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = guessesSofar;
            console.log(guessesSofar);

        }

        document.getElementById('win').innerHTML = win;
        document.getElementById('loss').innerHTML = loss;
        document.getElementById('guesses').innerHTML = guesses;
    }

    