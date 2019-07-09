let secondAttempt;
let prize = 0;
let totalPrize = 0;
let lowPocketNumber = 0;
let highPocketNumber = 8;
let numbersOfAttempt = 3;
let lowPrizeRate = 25;
let numberRange = 4;
let coefficientOfWin = 2;

let start = confirm("Do you want to play a game?");
if (start === false) {
    alert("You did not become a billionaire, but can.");
} else {
    let game = Math.floor(Math.random() * ( highPocketNumber - lowPocketNumber ) + 1);
    for (let i = 1; i <= numbersOfAttempt; i++) {
        totalPrize = lowPrizeRate * Math.pow( coefficientOfWin, numbersOfAttempt - i );
        let userChoice = Number(prompt( "Choose a roulette pocket number from " +
            lowPocketNumber + " to " + highPocketNumber + "\nAttempts left: " +
            ( numbersOfAttempt - i + 1 ) + "\nTotal prize: " + prize + "$" +
            "\nPossible prize on current attempt: " + totalPrize + "$", "" ));
        if ( userChoice === game ) {
            prize += totalPrize;
            secondAttempt = confirm( "Congratulation, you won! Your prize is: " +
                prize + "$. \nDo you want to continue?" );
            break;
        } else if ( i === numbersOfAttempt ) {
            prize = 0;
            alert("Thank you for your participation. Your prize is: " + prize + "$.");
            secondAttempt = confirm( "Do you want to play again?" );
        }
    }
    if ( secondAttempt === false ) {
        alert( "Thank you for your participation. Your prize is: " + prize + "$.");
        secondAttempt = confirm("Do you want to play again?" );
    } else {
        do {
            if ( prize !== 0 ) {
                highPocketNumber += numberRange;
                lowPrizeRate += lowPrizeRate;
            }
            game = Math.floor(Math.random() * ( highPocketNumber - lowPocketNumber + 1 ));
            for (let i = 1; i <= numbersOfAttempt; i++) {
                totalPrize = lowPrizeRate * Math.pow( coefficientOfWin, numbersOfAttempt - i);
                let userChoice = Number(prompt("Choose a roulette pocket number from " +
                    lowPocketNumber + " to " + highPocketNumber + "\nAttempts left: " +
                    (numbersOfAttempt - i + 1 ) + "\nTotal prize: " + prize + "$" +
                    "\nPossible prize on current attempt: " + totalPrize + "$", ""));
                if ( userChoice === game ) {
                    prize += totalPrize;
                    secondAttempt = confirm( "Congratulation, you won! Your prize is: " +
                        prize + "$. \nDo you want to continue?" );
                    break;
                } else if ( i === numbersOfAttempt ) {
                    prize = 0;
                    alert( "Thank you for your participation. Your prize is: " + prize + "$.");
                    secondAttempt = confirm("Do you want to play again?" );
                }
            }
        } while ( secondAttempt )
    }
}