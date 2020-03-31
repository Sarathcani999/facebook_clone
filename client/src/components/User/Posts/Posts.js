import React from 'react'
import { Row, } from 'reactstrap'
import Post from './Post/Post'
import CreatePost from './Post/CreatePost'

function Posts(props) {
    return (
        <div>
            <Row style={{minHeight : "150px" , padding : "10px"}}>
                {props.hideCreatePost ? <div></div> : <CreatePost />}
                <Post />
                <Post />
            </Row>
        </div>
    )
}

export default Posts
