import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';
import PokeContainer from './components/PokeContainer';

const App = () => (
    <>
        <Navigation/>
        <PokeContainer />
    </>
);

export default App;