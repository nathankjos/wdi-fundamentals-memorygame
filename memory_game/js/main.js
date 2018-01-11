var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You've Found a match!");
		}else{
			alert("Sorry, try again.");
		}
	}
}
flipCard(0);
flipCard(2);
console.log(cards[0].cardImage);
console.log(cards[0].suit);
console.log(cards[2].cardImage);
console.log(cards[2].suit);