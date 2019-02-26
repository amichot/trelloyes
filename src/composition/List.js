import React from 'react';
import Card from './Card';
import '../List.css'

function List ({header, cards}) {
  const cardsArray = cards.map(card => (
    <Card key={card.key} title={card.title} content={card.content} />
  ))
  return (
    <section className='list'>
      <header>
        {header}
      </header>
      <div className='list-cards'>
        {cardsArray}
      </div>
    </section>
  )
}

export default List;
