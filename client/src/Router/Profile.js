import React from 'react'
import { connect } from 'react-redux'

function Profile() {
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
            ) : 
            (
                // User Authenticated go to home
                <Portal />
            ))} 
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated , user : state.auth.user
})


export default connect(mapStateToProps)(Profile)