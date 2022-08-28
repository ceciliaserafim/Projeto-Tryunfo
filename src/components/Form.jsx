import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    // hasTrunfo
    return (
      <form className="formulario">
        <div>
          <label htmlFor="Nome">
            <input
              name="identificação"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="Descrição">
            <textarea
              name="descrever"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              placeholder="Descrição"
            />
          </label>
          <label htmlFor="Atributo1">
            <input
              name="atributo1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              placeholder="Carta 1"
            />
          </label>
          <label htmlFor="Atributo2">
            <input
              name="atributo2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              placeholder="Carta 2"
            />
          </label>
          <label htmlFor="Atributo3">
            <input
              name="atributo3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              placeholder="Carta 3"
            />
          </label>
          <label htmlFor="Imagem da carta">
            <input
              name="imagemCarta"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              placeholder="Imagem da carta"
            />
          </label>
          <label htmlFor="carta">
            <select
              name="seleciona"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              id="carta"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>

          </label>
          <label htmlFor="Carta super trunfo">
            <input
              name="cartaTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
            />
          </label>
          <button
            name="travarSalvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            id="Botão salvar"
            type="button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};
