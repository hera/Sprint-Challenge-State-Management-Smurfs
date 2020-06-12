import React from "react";
import { Toast, ToastBody, ToastHeader, Row, Col, Table } from 'reactstrap';
import './Smurf.css';

function Smurf (props) {
    const { name, age, height } = props.smurf; 

    return (
        <Row>
            <Col>
                <Toast>
                    <ToastHeader>
                        { name }
                    </ToastHeader>
                    <ToastBody>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Age:</th>
                                    <td>{ age } years</td>
                                </tr>
                                <tr>
                                    <th>Height:</th>
                                    <td>{ height } cm</td>
                                </tr>
                            </tbody>
                        </table>
                    </ToastBody>
                </Toast>
            </Col>
        </Row>
    );
}

export default Smurf;