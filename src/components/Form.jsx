import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form className="formulario">
        <div>
          <label htmlFor="Nome">
            <input data-testid="name-input" type="text" placeholder="Nome" />
          </label>
          <label htmlFor="Descrição">
            <input data-testid="description-input" type="textarea" placeholder="Descrição" />
          </label>
          <label htmlFor="Atributo1">
            <input data-testid="attr1-input" type="number" placeholder="Carta 1" />
          </label>
          <label htmlFor="Atributo2">
            <input data-testid="attr2-input" type="number" placeholder="Carta 2" />
          </label>
          <label htmlFor="Atributo3">
            <input data-testid="attr3-input" type="number" placeholder="Carta 3" />
          </label>
          <label htmlFor="ImagemDaCarta">
            <input data-testid="image-input" type="text" placeholder="Imagem da carta" />
          </label>
          <label htmlFor="">
            <select name="" id=""></select>
          </label>
        </div>
      </form>
    );
  }
}
