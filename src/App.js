import React, { Component } from "react";
import "./App.css";
import "./App_responsive.css";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todo: []
    };
  }

  handleChange(input) {
    this.setState({
      value: input
    });
  }

  aggiungiLista(input) {
    if (!this.state.value) {
      return;
    }
    const elemento = { nome: input, stato: false };
    const lista = [...this.state.todo, elemento];
    this.setState({
      todo: lista,
      value: ""
    });
    console.log(lista);
  }

  deleteElement(el) {
    const newLista = [...this.state.todo];
    newLista.splice(el, 1);
    this.setState({
      todo: newLista
    });
  }

  aggiungiClasse = e => {
    const nuovoToDo = this.state.todo;
    const nuovoStatoToDo = nuovoToDo.map(el => {
      const nuovoElemento = { ...el };
      return nuovoElemento;
    });
    nuovoStatoToDo[e].stato = !nuovoStatoToDo[e].stato;
    console.log(nuovoToDo, nuovoStatoToDo);
    this.setState({ todo: nuovoStatoToDo });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>

        <input
          type="text"
          className="input"
          value={this.state.value}
          placeholder="Insert text..."
          onChange={e => this.handleChange(e.target.value)}
          onKeyUp={event =>
            event.keyCode === 13 ? this.aggiungiLista(this.state.value) : null
          }
        />

        <ul>
          {this.state.todo.map((val, element) => (
            <li key={element} data-state={val.stato}>
              <button
                data-attr={element}
                onClick={e => this.deleteElement(e.target.dataset.attr)}
              >
                X
              </button>
              <button onClick={() => this.aggiungiClasse(element)}>Ok</button>
              {val.nome}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lista;
