import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor() {
    super();
    this.state = { list: ['Sacar la ropa', 'Hacer la cama',  'Leer un rato'], value: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({ value: ''});
    const newList = this.state.list.concat(this.state.value);
    this.setState({ list: newList});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
{/*            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>*/}
            {this.state.list.map(element => 
              <li key={element}>{element}</li>

            )}
          </ul>
           <form onSubmit={this.handleSubmit.bind(this)}>
             <input type="text" id="new-task" value={this.state.value} placeholder="Ingresa una tarea y oprime Enter" onChange={this.handleChange.bind(this)} />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
