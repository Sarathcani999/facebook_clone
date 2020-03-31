import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Register from '../components/Register/Register';
import {Spinner} from 'reactstrap'

function SignUp(props) {

    return (
        <div>
            {props.isAuthenticated === false ? <Register /> : props.isAuthenticated === true ? <Redirect to={'/Person/' + props.user.username} /> : (
            <center>
                <Spinner />
            </center>
            ) }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated  , user : state.auth.user
    }
}

export default connect(mapStateToProps)(SignUp) 
