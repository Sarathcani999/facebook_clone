import React from 'react'
import { Container } from 'reactstrap'
import AppNavbar from '../components/AppNavbar'

function NotFound() {
    return (
        <div>
            <AppNavbar />
            <Container>
                <center>
                    <h2 className="display-1" style={{ color : "red" }}><b>404!</b></h2>
                    <h2 className="display-3">Page Not Found</h2>
                    <hr style={{width : "60%"}}/>
                    <p className="lead" style={{width : "75%"}}>
                        The entered route doesn't contain any information. 
                        Try using some other routes
                    </p>
                </center>
            </Container>
        </div>
    )
}

export default NotFound
