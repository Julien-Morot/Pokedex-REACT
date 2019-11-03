import React, { Component } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
import './PokeList.css';
import Form from './Form';

class Pokelist extends Component {
  state = {
    value: "",
    url: 'https://pokeapi.co/api/v2/pokemon',
    pokemon: null,
    data:[]
  };

  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      value: new FormData(ev.currentTarget).get("filter")
    });
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {

    const PokeFiltre = this.state.data.filter(pokemon =>
      pokemon.name
      .toLowerCase()
      .includes(this.state.value.toLowerCase())
      );
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}
        value={this.state.value} />
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokeCard
               key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                data={PokeFiltre}

              />
            ))}
          </div>
        ) : (
          <h1>Chargement Pokemon</h1>
        )}
      </div>
    );
  }
}

export default Pokelist;