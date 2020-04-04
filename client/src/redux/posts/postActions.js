import axios from 'axios'

import { CREATE_POST_SUCCESS, CREATE_POST_REQUEST, CREATE_POST_FAILURE , FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE } from './postTypes'

var url = "/api/posts/"

export const createPost = (body) => {
    return function(dispatch , getState){
        var config = setupConfig(getState)
        dispatch({
            type : CREATE_POST_REQUEST
        })
        axios.post(url , {body} , config)
            .then(res => { 
                dispatch({
                    type : CREATE_POST_SUCCESS ,
                    payload : res.data
                })
            }
            )
            .catch(err => dispatch({
                    type : CREATE_POST_FAILURE ,
                    payload : err
                })
            )
    }
}

export const fetchPosts = () => {
    return function(dispatch , getState){
        var config = setupConfig(getState)
        // dispatch fetch request
        dispatch({
            type : FETCH_POSTS_REQUEST
        })
        axios.get(url , config)
            .then(res => dispatch({
                type : FETCH_POSTS_SUCCESS ,
                payload : res.data
            }))
            .catch(error => dispatch({
                type : FETCH_POSTS_FAILURE
            }))
    }
}

export const deletePost = (id) => {
    return function(dispatch, getState){
        var config = setupConfig(getState)
        var url = '/api/posts/' + id

        dispatch({
            type : DELETE_POST_REQUEST
        })

        axios.delete(url, config)
            .then(res => dispatch({
                type : DELETE_POST_SUCCESS ,
                payload : id
            }))
            .catch(err => dispatch({
                type : DELETE_POST_FAILURE ,
                payload : err
            }))
    }
}

const setupConfig = (getState) => {
    var config = {
        headers : {
            "Content-type" : "application/json"
        }
    }

    var token = getState().auth.token

    if (token) {
        config.headers['x_auth'] = token
    }

    return config
}