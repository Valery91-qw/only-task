import React from 'react';
import Router from "./router/Router";
import Header from "./components/common/Header";
import AppWrapper from './components/common/AppWrapper';

const App = () => {
    return (
        <AppWrapper>
            <Header>
                Only.
            </Header>
            <Router />
        </AppWrapper>
    );
}

export default App;
