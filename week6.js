//Create a class for a card that has 3 identifiers: Suit, Value, and Face if a face card. This should be used to create 52 unique cards 
class Card {
    constructor(suit, face, value) { 
    this.suit = suit;
    this.value = value;
    this.face = face; 
    }
} 


//Create a class to make a deck of cards  
class Deck {
    constructor() {
        this.entireDeck = this.makeDeck();
    } 

    makeDeck() { 
        let values = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
        let suits = ["Clubs", "Hearts", "Spades", "Diamonds"]; 

        let deckOfCards = [];

//Loop through my arrays to create a deck of 52 cards
        for (let x = 0; x < values.length; x++) {
            for (let s = 0; s < suits.length; s++) {
            let card = new Card (suits[s], values[x], x+2);
            deckOfCards.push(card); 
        }
    } 
//Return a shuffled deck of cards
        deckOfCards = deckOfCards.sort((a,b) => 0.5 - Math.random()); 
        return deckOfCards; 
    }   
 
} 

//Create new variables that create a new deck and splits it into two. 
const warDeck = new Deck(); 
let halfDeck1 = warDeck.entireDeck.splice(0,26); 
let halfDeck2 = warDeck.entireDeck; 



//create a class for new Players that gives them a hand, points counter, and a name. 
//The player's hand should be half of the shuffled deck 
class Player {
    constructor(hand, points, name) {
        this.hand = hand
        this.points = points;
        this.name = name;
      }
}


function playGame() { 
 //pass out the shuffled deck evenly by passing the two split deck variables as arguments for the player class
 //Edit* Added feature for user to pass a prompt as arguments for name so that player 1 and 2 could have custom names each playthrough. 
    let player1 = new Player(halfDeck1, 0, prompt(`What is Player 1's name?`)); 
    let player2 = new Player(halfDeck2, 0, prompt(`What is Player 2's name?`)); 

//Create a for loop to iterate through the hand array and alert through the cards each player plays 
    for (let i = 0; i < player1.hand.length; i++) {
   alert(`${player1.name} plays the ${player1.hand[i].face} of ${player1.hand[i].suit};
${player2.name} plays the ${player2.hand[i].face} of ${player2.hand[i].suit};`);   

//evaluate and add points to the winning hand 
    
if(player1.hand[i].value > player2.hand[i].value) {
    player1.points = player1.points += 1; 
alert(`${player1.name} takes the point!`)
} else if(player1.hand[i].value < player2.hand[i].value) { 
    player2.points = player2.points += 1; 
alert(`${player2.name} takes the point!`)
} else {
    alert(`It is a Tie! No Points earned.`)
};    

}

//Compare the points and declare a winner of the game. 
alert(`${player1.name} has ${player1.points} points.
${player2.name} has ${player2.points} points.`);

    if(player1.points > player2.points) {
    alert(`${player1.name} Wins!`) 
    } else if (player1.points < player2.points) {
        alert(`${player2.name} Wins!`)
    } else {
        alert(`It's a Tie!`); 
    }
}

playGame(); 

