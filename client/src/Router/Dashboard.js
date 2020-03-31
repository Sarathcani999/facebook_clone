import React , {useState} from 'react'
import { connect } from 'react-redux'
import { Spinner, Label } from 'reactstrap'
import Portal from '../components/User/Dashboard'
import ViewPortal from '../components/User/ViewPortal'
import { Redirect } from 'react-router-dom'

function Dashboard(props) {
    let {username} = props.match.params

    const checkUserExists = () => {
        // Make API call to check whether User found in database
        
        return false
    }

    return (
        <div>
            { (props.isAuthenticated === null) ? 
            (
                // User Loading 
                <div> 
                    <center>
                        <Spinner />    
                    </center>    
                </div>
                
            ) : 
            ((props.isAuthenticated === false) ? 
            (
                // User Not Auth go to Login Page
                <Redirect to="/" />
            ) : (username === props.user.username) ? (<Portal/>) : (checkUserExists() ? (<ViewPortal username={username}/>) : <Redirect to='/NOT_FOUND' />))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated ,
    user : state.auth.user
})


export default connect(mapStateToProps)(Dashboard)