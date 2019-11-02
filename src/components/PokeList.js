import React, { Component } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
import './PokeList.css';
import Form from './Form';
import { cpus } from 'os';

class Pokelist extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon',
    pokemon: null,
  };


  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div>
        <Form />
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </div>
    );
  }
}

export default Pokelist;