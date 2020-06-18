import React from "react";
import { Container } from 'reactstrap';
import './App.css';
import Header from '../Header/Header';
import AddForm from '../AddForm/AddForm';
import SmurfList from '../SmurfList/SmurfList';

function App () {
    return (
        <Container className="App">
            <Header />
            <AddForm />
            <SmurfList />
        </Container>
    );
}

export default App;