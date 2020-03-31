import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import SignIn from '../components/Login/Login'
import { Spinner } from 'reactstrap';

function Login(props) {

    
    return (
        <div className="content">
            {props.isAuthenticated === false ? <SignIn /> : props.isAuthenticated === true ? <Redirect to={'/Person/' + props.user.username} /> : (
            <center>
                <Spinner />
            </center>
            ) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated ,
        user : state.auth.user
    }
}

export default connect(mapStateToProps )(Login)
