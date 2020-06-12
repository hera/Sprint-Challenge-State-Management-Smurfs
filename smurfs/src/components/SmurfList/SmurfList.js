import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../../actions';
import Smurf from '../Smurf/Smurf';

function SmurfList (props) {
    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <>
            <hr />
            {
                props.smurfs && props.smurfs.map((smurf, key) => {
                    return <Smurf key={key} smurf={smurf} />
                })
            }
        </>
    );
}

const mapState = (state) => ({
    smurfs: state.smurfs
});

export default connect(mapState, {getSmurfs})(SmurfList);