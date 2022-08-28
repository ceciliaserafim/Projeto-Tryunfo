import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = { identificação: '',
    descrever: '',
    atributo1: '0',
    atributo2: '0',
    atributo3: '0',
    imagemCarta: '',
    seleciona: 'normal',
    cartaTrunfo: false,
    travarSalvar: true,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    // Caso seja checkbox target.checkbox se não target.value
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { identificação,
        descrever,
        atributo1,
        atributo2,
        atributo3,
        imagemCarta,
        seleciona,
      } = this.state;

      const minimo = 0;
      const maximo = 90;
      const maximoDaSoma = 210;
      const somaAtributos = Number(atributo1) + Number(atributo2) + Number(atributo3);

      if (identificação
      && descrever
      && imagemCarta
      && seleciona
      && atributo1 >= minimo
      && atributo1 <= maximo
      && atributo2 >= minimo
      && atributo2 <= maximo
      && atributo3 >= minimo
      && atributo3 <= maximo
      && somaAtributos <= maximoDaSoma
      ) {
        this.setState({ travarSalvar: false });
      } else {
        this.setState({ travarSalvar: true });
      }
    });
  };

  render() {
    // Desestruturação
    const {
      identificação,
      descrever,
      atributo1,
      atributo2,
      atributo3,
      imagemCarta,
      seleciona,
      cartaTrunfo,
      travarSalvar,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ travarSalvar }
          // onSaveButtonClick={ this.handleButtonDisable }
          cardName={ identificação }
          cardDescription={ descrever }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagemCarta }
          cardRare={ seleciona }
          cardTrunfo={ cartaTrunfo }
        />
        <Card
          cardName={ identificação }
          cardDescription={ descrever }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagemCarta }
          cardRare={ seleciona }
          cardTrunfo={ cartaTrunfo }

        />
      </div>
    );
  }
}

export default App;
// Consegui concluir a questão com a ajuda do colega João Matheus.
