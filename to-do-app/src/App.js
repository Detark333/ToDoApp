import React from 'react'
import Container from '@material-ui/core/Container';
import ContainerLayout from "./Container";

function App() {
    return (
        <Container maxWidth="sm" style={{
            marginTop: '20px',
            borderRadius: '2px',
            boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
            padding: '5px 10px'
        }}>
            <ContainerLayout/>
        </Container>
    );
}

export default App;
