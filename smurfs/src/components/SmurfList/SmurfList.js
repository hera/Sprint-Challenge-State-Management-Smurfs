import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs, setEditingSmurf } from '../../actions';
import Smurf from '../Smurf/Smurf';
import EditForm from '../EditForm/EditForm';
import './SmurfList.css';
import { Row, Col } from 'reactstrap';

function SmurfList (props) {
    useEffect(() => {
        props.getSmurfs();
    }, []);

    function handleSetEditingSmurf (event, smurfId) {
        event.preventDefault();
        props.setEditingSmurf(smurfId);
    }

    return (
        <>
            <hr />
            {
                props.smurfs && props.smurfs.map((smurf, key) => {
                    return (
                        <Row key={key}>
                            <Col>
                                <div className="controls">
                                    { /* <a href="/#" onClick={event => handleSetEditingSmurf(event, smurf.id)}>Edit</a> */ }
                                </div>
                                { smurf.id === props.editingSmurf
                                  ? <EditForm smurf={smurf} />
                                  : <Smurf smurf={smurf} />
                                }
                            </Col>
                        </Row>
                    );
                })
            }
        </>
    );
}

const mapState = (state) => ({
    smurfs: state.smurfs,
    editingSmurf: state.editingSmurf
});

const mapDispatch = {
    getSmurfs,
    setEditingSmurf
};

export default connect(mapState, mapDispatch)(SmurfList);