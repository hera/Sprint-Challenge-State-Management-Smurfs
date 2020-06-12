import React, { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);

    function toggleForm () {
        setIsOpen(!isOpen);
    }

    return (
        <Row>
            <Col>
                <Button color="primary" onClick={toggleForm} style={{ marginBottom: '1rem' }}>New</Button>
                <Collapse isOpen={isOpen}>
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

export default AddForm;