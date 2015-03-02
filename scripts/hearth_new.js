var numCards = 2;

var cardsInHand = [];
var graveyard = [];
var totalNumberOfCards = 30;

/*
*Card Object Constructor
*/

function Card (name, manaCost) {

this.name = name;
this.manaCost = manaCost;

this.setName =  function (name)
{
      this.name = name;
}

this.getName = function ()
{
      return this.name;
}

this.setMana = function (manaCost)
{
      this.manaCost = manaCost
}

this.getManaCost = function ()
{
      return this.manaCost
}

}

/**
* This is the list of test card objects each with a name and value;
*/

var azure = new Card("azure", 5);
var rag = new Card("rag", 8);
var defender= new Card("defender", 4);
var raptor= new Card("raptor", 2);
var thalnos = new Card("thalnos", 2);
var frostbolt = new Card("frostbolt", 2);
var sludge = new Card("sludge belcher", 5);
var shield = new Card("shieldmaiden", 5);
var alex = new Card("alexstraza", 9);
var gromash = new Card("gromash", 8);
var shredder = new Card("shredder", 4);
var backstab = new Card("backstab", 0);
var powerword = new Card("powerword shield", 1);
var fireball = new Card("fireball", 4);
var earthen = new Card("earthenring farseer", 3);


var deck = [azure, rag, defender, raptor, thalnos, frostbolt, sludge, shield, alex, gromash, shredder, backstab, powerword, fireball, earthen];


/**
* The basic working oout function that determines the probabality of drawing a card. Will be updated with name search
*/


function workout (numberOfCards) 
{
      if(totalNumberOfCards > 0)
    {
      this.numberOfCards = numberOfCards;
      var total = Math.floor(( numberOfCards/ deck.length) * 100);
      return " You have " +  total + "% chance";
     }
    else{return "No Cards left in deck";}
}


/**
*The Draw function - should remove an object from the deck array and place it in the hand or grave array
*/


function draw(cardName) 
{
      if(deck.length > 0)
	{
	      var card = deck[0].name;
	      deck[0].name.splice[0, 1]		
	      cardsInHand.push(card);
	      
	      return "You drew a card, there are " + deck.length + " cards left."
	}

	return "No cards left, you may not draw";
}



/**
* Test code for potential to work out the odds when you choose to mulligan-  must fix draw function first!
*/

function drawOpeningHand()
{
var goingFirst = [true, false][Math.round(Math.random())]

      if(goingFirst === true)
            {
	for(var i = 0; i < 3; i++)
	{
	      draw();      
	}

            } else {
	for(var i = 0; i < 4; i++)
	{
	      draw();      
	}
	
	}
	console.log(cardsInHand + " cards in hand and " +  totalNumberOfCards + " cards left in deck.")
}



/**
* Test code  - creating an array full of variables
*/
function createDeck(numberOfCardsInDeck)
{
	for(var i = 0; i < numberOfCardsInDeck; i++)
	      {
		return deck.push("Card " + i);
	      }
}



/**
* This allows you to search the deck for the number of cards with a particular mana cost.
*/

function getByManaCost(manacost)
{

var search = [];
	
      for(var i = 0; i < deck.length; i++)
	{
	      if(deck[i].getManaCost() === manacost)
		{
		     search.push(deck[i].getName());
		}
	}
	if(search.length === 0){return 0}
	else{return search;}

}


/**
* This function will take an argument and give you the probabaility of drawing cards with a certain mana cost
*/

function probOfManaCostDraw(manaCost)
{
      if (deck.length > 0)
    {
      var numCards = getByManaCost(manaCost).length;

      var total = Math.floor(( numCards/deck.length) * 100);

      if(isNaN(total)){return "No cards with " + manaCost + " mana";}
      else{return " You have " +  total + "% chance of drawing a " + manaCost + " mana cost card.";}
     }
    else{return "No Cards left in deck";}
}

/**
* This function will show all the cards remaining in the deck
*/

function cardsInDeck()
{
      for(var i = 0; i < deck.length; i ++)
	{
	      console.log(deck[i].name)
	}
	return;
}

/**
* This function will show all the cards in the hand
*/

function showCardsInHand()
{
      for(var i = 0; i < cardsInHand.length; i ++)
	{
	      console.log(cardsInHand[i].name)
	}
	return;
}
