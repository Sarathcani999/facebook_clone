import React from 'react'
import AppNavbar from '../../AppNavbar'
import { Container } from 'reactstrap'
import Posts from '../Posts/Posts'

function Home() {
    return (
        <div>
            <AppNavbar/>
            <Container>
                <h2 className='display-4'>Feeds</h2>
                <Posts/>
            </Container>
        </div>
    )
}

export default Home
