import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = { identificação: '',
    descrever: '',
    atributo1: 0,
    atributo2: 0,
    atributo3: 0,
    imagemCarta: '',
    seleciona: 'normal',
    cartaTrunfo: false,
    travarSalvar: true,
    // data é o local onde vamos armazenar as informações obtidas ao clicar no botão salvar
    data: [],
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

  // Requisito 6.
  // 1. Criar função para salvar o clicar
  onSaveButtonClick = () => {
    const { identificação,
      descrever,
      atributo1,
      atributo2,
      atributo3,
      imagemCarta,
      seleciona,
    } = this.state;
    const visualizacao = {
      identificação,
      descrever,
      atributo1,
      atributo2,
      atributo3,
      imagemCarta,
      seleciona,
    };
    // console.log(visualizacao);
    this.setState((previewState) => ({
      data: [...previewState.data, visualizacao],
      identificação: '',
      descrever: '',
      atributo1: 0,
      atributo2: 0,
      atributo3: 0,
      imagemCarta: '',
      seleciona: 'normal',
    }));
  };

  // 1. As informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação.

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
          onSaveButtonClick={ this.onSaveButtonClick }
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
// Consegui concluir o requisito 4 com a ajuda do colega João Matheus.
