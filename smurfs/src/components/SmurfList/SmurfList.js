import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../../actions';

function SmurfList (props) {
    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <div>{JSON.stringify(props.smurfs)}</div>
    );
}

const mapState = (state) => ({
    smurfs: state.smurfs
});

export default connect(mapState, {getSmurfs})(SmurfList);