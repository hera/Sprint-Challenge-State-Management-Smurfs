import React from "react";
import {
    Toast,
    ToastBody,
    ToastHeader,
    Row,
    Col,
    Label,
    Input,
    Form,
    FormGroup,
    Button
} from 'reactstrap';
import '../Smurf/Smurf.css';

function EditForm (props) {
    const { name, age, height } = props.smurf;

    return (
        <Row>
            <Col>
                <Toast>
                    <Form>
                        <ToastHeader>
                            Edit Smurf
                        </ToastHeader>
                        <ToastBody>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" name="name" id="name" value={name} />
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
                                <Button color="warning">Save</Button>
                            </FormGroup>
                        </ToastBody>
                    </Form>
                </Toast>
            </Col>
        </Row>
    );
}

export default EditForm;