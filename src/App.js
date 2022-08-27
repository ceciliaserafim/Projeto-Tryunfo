import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = { identificação: '',
    descrever: '',
    atributo1: '',
    atributo2: '',
    atributo3: '',
    imagemCarta: '',
    seleciona: '',
    cartaTrunfo: '',
    botaoSalvar: '',
  };

  handleChange = (event) => {
    const evento = event.target;
    const chaveValor = evento.value;
    const chaveName = evento.name;
    this.setState({ [chaveName]: chaveValor });
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
      botaoSalvar,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } />
        <Card
          cardName={ identificação }
          cardDescription={ descrever }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagemCarta }
          cardRare={ seleciona }
          cardTrunfo={ cartaTrunfo }
          isSaveButtonDisabled={ botaoSalvar }

        />
      </div>
    );
  }
}

export default App;
