import React, { Component } from 'react';
import './App.css';

const cards = [ //add caption as a key of the array to change for all images
  {
    imgSrc: 'imgs/square1.jpg',
    title: 'Card 1',
    caption: "Caption1 Content Here",
  }, {
    imgSrc: 'imgs/square2.jpg',
    title: 'Card 2',
    caption: "Caption2 Content Here",
  }, {
    imgSrc: 'imgs/square3.jpg',
    title: 'Card 3',
    caption: "Caption3 Content Here",
  }, {
    imgSrc: 'imgs/square4.jpg',
    title: 'Card 4',
    caption: "Caption4 Content Here",
  }, {
    imgSrc: 'imgs/square5.jpg',
    title: 'Card 5',
    caption: "Caption5 Content Here",
  }, {
    imgSrc: 'imgs/square6.jpg',
    title: 'Card 6',
    caption: "Caption6 Content Here",
  }
]


class App extends Component {

  render() {
    let cardsJSX = cards.map((card, i) => {
      return <Card
        card={card} key={i} />
    })
    return (
      <div>
        <header>
          <h1 className="text-center">Instagram Grid Sample</h1>
        </header>
        <div className="container">
          <div class="row">
            {cardsJSX}
          </div>
        </div>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const { card } = this.props
    return (

      <div class="col-md-4">
        <h2> {card.title} </h2>
        <img className="cardImg" alt="" src={card.imgSrc} />
        <p>{card.caption}</p>
      </div>

    )
  }
}

export default App;
