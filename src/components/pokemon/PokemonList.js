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
    nextPage: 20
  };



  async componentDidMount() {
    this.fetchCharacters();
    
  }

    fetchCharacters = async () =>{
    this.setState({ loading: true, error: null });


    try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.state.nextPage}`);
    

    this.setState({
      loading: false,
      pokemon: res.data['results'],
      nextPage: this.state.nextPage + 20

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
        <div className="footer_button">
        {!this.state.loading &&(
            <span className="button_cont"><button className="button__load" onClick={() => this.fetchCharacters()}>More Pokemons +</button></span>
          )}
        </div>
      </div>
    ) ;
  }
}
