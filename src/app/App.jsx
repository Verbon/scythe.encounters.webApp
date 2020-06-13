import React from 'react';

import { EncountersList } from '../encountersList';
import Container from '../common/components/Container';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './App.scss';


const App = () => (
    <div className='app'>
        <AppHeader className='app__header' />
        <Container>
            <EncountersList />
        </Container>
        <AppFooter className='app__footer' />
    </div>
);

export default App;
