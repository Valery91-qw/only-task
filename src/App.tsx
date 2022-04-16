import styled from 'styled-components'
import React from 'react';
import Router from "./router/Router";

function App() {
    return (
        <AppWrapper>
            <Header>
                Only.
            </Header>
            <Router />
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
padding: 40px;  
`
const Header = styled.h1`
font-weight: 700;
font-size: 64px;
line-height: 78px;
text-transform: uppercase;
text-align: center;  
`

export default App;
