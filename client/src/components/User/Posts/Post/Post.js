import React, { useState, useEffect } from 'react'
import { Card, Button , CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { deletePost } from '../../../../redux/index'
import Axios from 'axios'

function Post(props) {
    
    let [name , setName] = useState('')
    let [month , setMonth] = useState('')
    let [year , setYear] = useState('')
    let [day , setDay] = useState('')
    let [like , setLike] = useState(true)
    let [likes , setLikes] = useState([])

    useEffect(() => {
    const fetchPostDetails = () => {
        let URL = '/api/auth/'+props.post.created_by
        let URL_LIKES = '/api/posts/likes/'+props.post._id
        // console.log(URL_LIKES)
        
        var d = new Date(props.post.created_at)
        
        var month = [
        "January" 
        ,"February" 
        ,"March" 
        ,"April" 
        ,"May" 
        ,"June"
        ,"July"
        ,"August"
        ,"September"
        ,"October"
        ,"November"
        ,"December"]
        var monthName = month[d.getMonth()];

        setMonth(monthName)
        setDay(d.getDate())
        setYear(d.getFullYear())

        Axios.get(URL)
            .then(res => {

                let user = res.data
                setName(user.name)
            })

        var config = setupConfig(props.token)

        Axios.get(URL_LIKES , config)
            .then(res => {
                if (res.data.filter( element => element.user_id === props.user._id ).length === 0) {
                    setLike(true)
                } else {
                    setLike(false)
                }
                setLikes(res.data)
            })
    }
      fetchPostDetails();
    }, [props.post.created_at , props.post.created_by , props.post._id , props.token , props.user._id]);

    const likeAction = () => {
        var config = setupConfig(props.token)
        var URL = "/api/posts/likes/"

        Axios.post(URL , {post_id : props.post._id} , config)
            .then(res => {
                setLikes([...likes , res.data])
                setLike(false)
            })
    }
    const unlikeAction = () => {
        var config = setupConfig(props.token)
        var URL = "/api/posts/likes/"+props.post._id

        Axios.delete(URL , config)
            .then(res => {
                setLikes(likes.filter(like => like._id !== res.data.id))
                setLike(true)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div style={{margin : "10px 0px" , width : "100%"}}>
            <Card style={{ width : "100%"}}>
                <CardHeader style={{backgroundColor : "white" , borderBottom : "none" , paddingBottom : 0}}>
                    <CardTitle >
                            <p className="lead" style={{marginBottom : "2px"}}><b>{name}</b>
                                {(props.user._id === props.post.created_by) ? 
                                <Button 
                                    style={{color : "red"}} 
                                    onClick={() => {
                                        props.deletePost(props.post._id)
                                    }} 
                                    close /> : <i></i> }
                            </p>
                                <p style={{fontSize : "small" , marginBottom : "0"}}><i>{day} {month} , {year}</i></p>
                    </CardTitle>
                </CardHeader>
                <CardBody style={{paddingTop : 0}}>
                    <hr style={{marginBottom : "6px" , marginTop : "3px"}}/>
                    <p className="lead">{props.post.body}</p>
                </CardBody>
                <CardFooter style={{padding : "5px 12px" }}>
                    <p style={{paddingBottom : 0 , margin : 0}}>{likes.length}
                        {like ? <Button 
                        style={{textDecoration : "none" , textAlign : "left" , minWidth : "60px"}}
                        onClick={() => likeAction()} 
                        color="link" 
                        size="sm">
                            Like
                        </Button> 
                        : 
                        <Button 
                        style={{textDecoration : "none" , textAlign : "left" , minWidth : "60px"}}
                        onClick={unlikeAction}
                        color="link" 
                        size="sm">
                            Unlike
                        </Button>}
                        {/* UNDER CONSTUCTION
                        <Button 
                        style={{textDecoration : "none" , textAlign : "left" , minWidth : "60px" , paddingLeft : 0}}
                        color="link" 
                        size="sm">
                            Comment
                        </Button> */}
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.auth.user ,
        token : state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost : (id) => dispatch(deletePost(id))
    }
}


const setupConfig = (token) => {
    var config = {
        headers : {
            "Content-type" : "application/json"
        }
    }
    if (token) {
        config.headers['x_auth'] = token
    }

    return config
}

export default connect(mapStateToProps , mapDispatchToProps )(Post)