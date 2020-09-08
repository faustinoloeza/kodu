import React from 'react';
import './App.css';

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
                <tr>
                    <td>Pikachu</td>
                    <td>Bolbasur</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;