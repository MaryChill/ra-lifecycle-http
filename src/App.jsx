import React from 'react';
import './App.css';
import Watches from './components/Watches';
import Crud from './components/Crud';

export default function App() {

    return (
      <>
        <div className='box'>
            <Watches />
        </div>
        <div className="App">  
          <Crud/>
        </div>
      </>
    )
}