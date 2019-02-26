import React from 'react';

import List from './composition/List';

import './App.css'

function App({store}) {
  
  function cardsHandle(list) {
    const cards = [];

    list.cardIds.forEach((cardId) =>
      cards.push(
        {...store.allCards[cardId],
        key: cardId}
        )  
    )

    return cards
  }
  
  const listsArray = store.lists.map((list) =>
    <List key={list.id} header={list.header} cards={cardsHandle(list)}></List>
  )

  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
      </header>
        <div className="App-list">
          {listsArray}
        </div>
    </main>
  );
}

export default App;
