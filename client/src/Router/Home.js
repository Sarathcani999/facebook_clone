import React from 'react'
import HomeRender from '../components/User/Home/Home'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import { Redirect } from 'react-router-dom'

function Home(props) {
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
                <HomeRender />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps)(Home)