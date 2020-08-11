// Function generates deck of cards with a given number of symbols per card.
// Any two cards will share *exactly* one symbol.
// Symbols will be shared maximally (ie, for any given symbol, that symbol
// will appear on n cards, where n is the number of symbols per card).

// ============================================================================

import SymbolService from "../services/SymbolService"

// For this algorithm to work, symbolsPerCard must be a prime number + 1.
// Most common symbolsPerCard will be 6 (5 + 1), 8 (7 + 1) and 12 (11 + 1).
export const createDeck = symbolsPerCard => {

  // Find the prime number which will (symbols per card - 1)
  const prime = symbolsPerCard - 1; 
  maximumCards
  
  // retrieve symbols from database
  const symbols = SymbolService.getSymbols();

};
