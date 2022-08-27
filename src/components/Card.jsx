import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <li
          data-testid="name-card"
        >
          { cardName }
        </li>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <li
          data-testid="description-card"
        >
          { cardDescription }
        </li>
        <li
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </li>
        <li
          data-testid="attr2-card"
        >
          { cardAttr2 }
        </li>
        <li
          data-testid="attr3-card"
        >
          { cardAttr3 }
        </li>
        <li
          data-testid="rare-card"
        >
          { cardRare }
        </li>
        {{ cardTrunfo } && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
