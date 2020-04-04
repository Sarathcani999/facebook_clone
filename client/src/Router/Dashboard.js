/**
 * @docs
 * 
 * Router/Dashoard redirects to the portal or view portal based on isAuthenticated
 */

import React  from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import Portal from '../components/User/Dashboard'
import ViewPortal from '../components/User/ViewPortal'
import { Redirect } from 'react-router-dom'

function Dashboard(props) {
    let {username} = props.match.params
    let viewUser = {
        name : "NOT DEFINED" ,
        occupation : "NOT FOUND" ,
        bio : "NOT DEFINED" ,
        city : "NOT DEFINED"
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
            ) : (username === props.user.username) ? (<Portal/>) : (<ViewPortal viewUser = {viewUser}/>))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated ,
    token : state.auth.token ,
    user : state.auth.user
})


export default connect(mapStateToProps)(Dashboard)