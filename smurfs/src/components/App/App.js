import React from "react";
import { Container } from 'reactstrap';
import './App.css';
import Header from '../Header/Header';
import AddForm from '../AddForm/AddForm';

function App () {
    return (
        <Container className="App">
            <Header />
            <AddForm />
        </Container>
    );
}

export default App;