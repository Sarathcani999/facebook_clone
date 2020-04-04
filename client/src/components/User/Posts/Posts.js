import React , {useEffect} from 'react'
import { Row, Spinner, } from 'reactstrap'
import Post from './Post/Post'
import CreatePost from './Post/CreatePost'
import { fetchPosts } from '../../../redux'
import { connect } from 'react-redux'

function Posts(props) {

    let {fetchPosts} = props

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])
    
    return (
        <div>
            <Row style={{minHeight : "150px" , padding : "10px"}}>
                {props.hideCreatePost ? <div></div> : <CreatePost />}
                {props.loading ? <div style={{width : "100%"}}>
                    <center>
                    <Spinner style={{margin : "5px"}}/>
                    </center>
                </div> : <div></div>}

                {props.userPost ? 
                props.posts.map(post => post.created_by === props.user._id ? <Post post={post} key={post._id}/> : <div key={post._id}></div> )
                : props.posts.map(post => <Post post={post} key={post._id}/>)}
            </Row>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts : () => dispatch(fetchPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts : state.post.posts ,
        loading : state.post.loading ,
        user : state.auth.user
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Posts)
