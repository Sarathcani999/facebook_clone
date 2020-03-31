import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'

function Friends() {
    return (
        <div style={{padding : "20px"}}>
            <ListGroup>
                <ListGroupItem>
                    <Link className="lead" to='Person/user' style={{textDecoration : "none"}}>Sarath Click</Link>
                    {/* <p >Sarath Click</p> */}
                </ListGroupItem>
                <ListGroupItem>
                    <p className="lead">Sarath</p>
                </ListGroupItem>
                
            </ListGroup>
        </div>
    )
}

export default Friends