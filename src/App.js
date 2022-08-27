import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = { identificação: '', descrever: '', };

  handleChange = (event) => {
    const evento = event.target;
    const chaveValor = evento.value;
    const chaveName = evento.name;
    this.setState({ [chaveName]: chaveValor });
  };

  render() {
    // Desestruturação do identificação
    const { identificação } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } />
        <Card cardName={ identificação } />
      </div>
    );
  }
}

export default App;
