import React, { useState } from "react";
import { connect } from 'react-redux';
import { toggleAddForm, setSmurfCandidate, addSmurf } from '../../actions';

import {
    Row,
    Col,
    Collapse,
    Button,
    CardBody,
    Card,
    FormGroup,
    Form,
    Label,
    Input
} from 'reactstrap';
import { smurfCandidateReducer } from "../../reducers/reducers";

function AddForm (props) {

    function handleAddFormChange () {
        props.setSmurfCandidate({
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            height: document.getElementById('height').value
        });
    }

    function handleSmurfSubmit (event) {
        event.preventDefault();
        props.addSmurf(props.smurfCandidate);
    }

    return (
        <Row>
            <Col>
                <Button color="primary" onClick={props.toggleAddForm} style={{ marginBottom: '1rem' }}>New</Button>
                <Collapse isOpen={props.isAddFormExpanded}>
                    <Card>
                        <CardBody>
                        <Form onSubmit={(event) => handleSmurfSubmit(event)}>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" name="name" id="name" placeholder="e.g. Mike" value={props.smurfCandidate.name} onChange={handleAddFormChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">Age:</Label>
                                <Input type="number" name="age" id="age" min="1" max="1000" value={props.smurfCandidate.age} onChange={handleAddFormChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="height">Height (cm):</Label>
                                <Input type="number" name="height" id="height" min="1" value={props.smurfCandidate.height} onChange={handleAddFormChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button color="warning">Add a Smurf</Button>
                            </FormGroup>
                        </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    );
}


const mapState = (state) => ({
    isAddFormExpanded: state.isAddFormExpanded,
    smurfCandidate: state.smurfCandidate
});

export default connect(mapState, {toggleAddForm, setSmurfCandidate, addSmurf})(AddForm);