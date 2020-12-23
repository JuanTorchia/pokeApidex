import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../layout/Loading';
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    loading: true,
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    // url: `https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset}&limit=${this.state.limit}`,
    pokemon: null,
    offset: 0,
    limit: 0
  };



  async componentDidMount() {
    this.fetchCharacters();
    
  }

    fetchCharacters = async () =>{
    this.setState({ loading: true, error: null });


    try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
    

    this.setState({
      loading: true,
      pokemon: res.data['results'],
      offset: this.state.offset + 20,
      limit: this.state.limit + 20


      });
    } catch (error) {
      this.setState({ loading: false, error: error });
      
    }
  };
    

  render() {
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
        
        {!this.state.loading && this.state.res.info.next && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
      </div>
    ) ;
  }
}
