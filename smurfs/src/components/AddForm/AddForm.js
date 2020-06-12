import React, { useState } from "react";
import { connect } from 'react-redux';
import { toggleAddForm } from '../../actions';

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

function AddForm (props) {

    return (
        <Row>
            <Col>
                <Button color="primary" onClick={props.toggleAddForm} style={{ marginBottom: '1rem' }}>New</Button>
                <Collapse isOpen={props.isAddFormExpanded}>
                    <Card>
                        <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" name="name" id="name" placeholder="e.g. Mike" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">Age:</Label>
                                <Input type="number" name="age" id="age" min="1" max="1000" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="height">Height (cm):</Label>
                                <Input type="number" name="height" id="height" min="1" />
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
    isAddFormExpanded: state.isAddFormExpanded
});

export default connect(mapState, {toggleAddForm})(AddForm);