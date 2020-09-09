import React from 'react';
import pokemon from './pokemon.json';
import PropTypes from 'prop-types';
import './App.css';

const PokemonRow = ({pokemon, onSelect}) =>(
        <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td><button onClick={ () => onSelect(pokemon)}>Seleccionar</button></td>
        </tr>
);

PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string,
        }),
        type: PropTypes.arrayOf(PropTypes.string),
    }),
    onSelect: PropTypes.func,
}

function App() {
    const [filter, filterSet] = React.useState("");
    const [selectedItem, selectedItemSet] = React.useState("");

    return ( 
        <div className='main'>
            <h1 className='title'> Buscar Pokemon </h1>
            <input value={filter} onChange={(e)=> filterSet(e.target.value)} className='myImput'></input>
            {selectedItem && (
                <div>
                    <h1>{selectedItem.name.english}</h1>
                </div>
            )}
            <div className='myGrid'>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='th'>Nombre</th>
                            <th className='th'>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.filter((pokemon) => pokemon.name.english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 100).map((pokemon) => (
                            <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon)=> selectedItemSet(pokemon)}/>
                        ))}
                    
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default App;