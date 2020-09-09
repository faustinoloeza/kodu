import React from 'react';
import pokemon from './pokemon.json';
import PropTypes from 'prop-types';
import './App.css';

const PokemonRow = ({pokemon}) =>(
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(', ')}</td>
        </tr>
);

PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string,
        }),
        type: PropTypes.arrayOf(PropTypes.string),
    }),
}

function App() {
    return ( 
        <div className='main'>
            <h1 className='title'> Buscar Pokemon </h1> 
            <table className='table'>
                <thead>
                    <tr>
                        <th className='th'>Nombre</th>
                        <th className='th'>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.slice(0, 100).map((pokemon) => (
                        <PokemonRow pokemon={pokemon} key={pokemon.id}/>
                    ))}
                
                </tbody>
            </table>
        </div>
    );
}

export default App;