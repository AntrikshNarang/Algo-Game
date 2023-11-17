class AlgoCard {
    constructor (color_arg) {
        if(color_arg instanceof AlgoCard || color_arg instanceof Object) {
            const [obj] = [color_arg];
            this.number = obj.number;
            this.color = obj.color;
        } else {
            this.number = this.generateRandomNumber(0, 12);
            this.color = color_arg;
            // color = "black" or "white"
        }
    }

    getColor () {
        return this.color;
    }

    getNumber () {
        return this.number;
    }

    setNumber(number) {
        this.number = number;
    }

    setColor(color) {
        this.color = color;
    }

    generateRandomNumber (min=0, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    isCorrectGuess(guess) {
        return guess === this.number;
    }
}

// Shuffle a Deck of AlgoCards
function shuffle(deck) {
	for(var i = deck.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * i);
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	
	return deck;
}

// Get Shuffled Deck of said number of AlgoCards
function getShuffledDeck(numberOfCards) {
    deck = [];

    for(var i = 0; i < numberOfCards/2; i++) {
        var card = new AlgoCard("black");
        deck.push(card);
    }

    for(var i = 0; i < numberOfCards/2; i++) {
        var card = new AlgoCard("white");
        deck.push(card);
    }

    return shuffle(deck);
}

function sortPlayerHand(hand) {
    hand.sort((a, b) => {
        if (a.getColor() !== b.getColor() && a.getNumber() === b.getNumber()) {
            if (a.getColor() === 'black') {
                // a < b according to algo rules
                return -1;
            }
            // a > b according to algo rules
            return 1;
        }

        return a.getNumber() - b.getNumber();
    });
    return hand;
}

function removeNums(cards) {
    var retval = cards;
    for(i = 0; i < retval.length; i++) {
        retval[i].number = null;
    }
    return retval;
}

function ObjectArray_to_AlgoCardArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = new AlgoCard(arr[i]);
    }
    return arr;
}

module.exports = {
    AlgoCard: AlgoCard,
    shuffle: shuffle,
    getShuffledDeck: getShuffledDeck,
    removeNums: removeNums,
    sortPlayerHand: sortPlayerHand,
    ObjectArray_to_AlgoCardArray: ObjectArray_to_AlgoCardArray
}