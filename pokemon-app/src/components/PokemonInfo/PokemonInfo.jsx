import { useState, useEffect } from "react";
import {Dna} from 'react-loader-spinner'

export const PokemonInfo = (name) => {

const [pokemon, setPokemon] = useState(null)
const [error, setError] = useState(null)
const [status, setStatus] = useState('idle')
const [loading, setLoading] = useState(null)

useEffect(() => {
    setStatus('pending')
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>{
      if (response.status=== 200) {
        return response.json()
      }
       return new Promise.reject( new Error(`Pokemon ${name} was not found`) )
    } 
  )
    .then(pokemon => {
        setPokemon(pokemon); 
        setStatus('resolved'); 
    })
    .catch((error) => {
        setError(error);
        setStatus('rejected');
    })
    .finally(() => {setLoading(false)})
    
}, [name]
)



   


    


//   const {pokemon, loading, error,status} = this.state
  switch (status) {
    case 'idle':
      return<p>Ведіть ім'я покемона</p>
      break;
      case 'pending':
      return <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
      
      break;
      case 'resovled':
        return <div>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          width="240"
          height="100"
          alt={pokemon.name}
        />
        <h2>{pokemon.name}</h2>
        <ul>
          {pokemon.stats.map(entry => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
      
      break;
      case 'rejected':
        return <p>error.message</p>
      
      break;
  
    default:
      break;
  }
 
}
