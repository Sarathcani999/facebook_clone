import { CREATE_POST_SUCCESS, CREATE_POST_REQUEST, CREATE_POST_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS , DELETE_POST_REQUEST , DELETE_POST_SUCCESS,DELETE_POST_FAILURE } from "./postTypes"

const initialState = {
    posts : [] ,
    loading : false ,
    error : '' 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_POST_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case CREATE_POST_SUCCESS:
        return { 
            ...state,
            posts : [payload , ...state.posts ] ,
            loading : false
        }
    case CREATE_POST_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload
        }
    case FETCH_POSTS_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case FETCH_POSTS_SUCCESS:
        return {
            ...state ,
            loading : false ,
            posts : payload
        }
    case FETCH_POSTS_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload
        }
    case DELETE_POST_REQUEST:
        return {
            ...state ,
            loading : true
        }
    case DELETE_POST_SUCCESS:
        return {
            ...state ,
            loading : false ,
            posts : state.posts.filter(post => post._id !== payload)
        }
    case DELETE_POST_FAILURE:
        return {
            ...state ,
            loading : false ,
            error : payload
        }


    default:
        return state
    }
}