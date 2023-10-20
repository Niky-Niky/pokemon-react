import { useState } from 'react';
import './App.css';
import  {PokemonForm}  from './components/PokemonForm/PokemonForm';

export const App = () => {


const [pokemon, setPokemon] = useState(null)
const [error, setError] = useState(null)
const [status, setStatus] = useState('idle')

const getPokemonName = (name) => {
  setPokemon(name)
 }

  
    return (
      <>
      <PokemonForm onSubmit={this.getPokemonName}/>
      {/* <PokemonInfo name={this.state.pokemon}/> */}
      {/* <ToastContainer
            position="top-right"
            autoClose={5000}
      /> */}
      </>
    ) 
    
}

