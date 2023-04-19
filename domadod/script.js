const suits = ['hearts', 'spades'];
const cardsPerPlayer = 6;

function dealCards() {
  const player1Cards = document.getElementById('player1-cards');
  const player2Cards = document.getElementById('player2-cards');

  // Заповнення колоди і перемішування її
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({suit: suits[i], value: j});
    }
  }
  shuffleDeck(deck);

  // Роздавання карт гравцям
  for (let i = 0; i < cardsPerPlayer; i++) {
    const card1 = deck.pop();
    const card2 = deck.pop();
    player1Cards.appendChild(createCardElement(card1));
    player2Cards.appendChild(createCardElement(card2));
  }
}

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.suit = card.suit;
  cardElement.dataset.value = card.value;
  return cardElement;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

dealCards();
