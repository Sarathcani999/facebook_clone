import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Friends(props) {
    return (
        <div style={{padding : "20px"}}>
            <ListGroup>
                {props.user.followers.map(follower => (
                        <ListGroupItem>
                            <Link to='/Person/user'>Hai</Link>
                        </ListGroupItem>
                    )
                )}
                <ListGroupItem>
                    <Link to='/Person/user'>Hai</Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user : state.auth.user
    }
}

export default connect(mapStateToProps, null)(Friends)