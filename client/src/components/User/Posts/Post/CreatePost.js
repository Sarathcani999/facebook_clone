import React, { useState } from 'react'
import {  Button } from 'reactstrap'
import { Card, CardBody , CardFooter  } from 'reactstrap'
import { createPost } from '../../../../redux/index'
import { connect } from 'react-redux'

function CreatePost(props) {

    let [body , setBody] = useState('')

    return (
        <div style={{width : "100%"}}>
            <Card style={{ width : "100%"}}>
                <CardBody style={{padding : 0}}>
                    {/* <Input type={Text} style={{border : "none" , width : "100%" , height : "100%", minHeight : "150px" , textAlign : "start"}} placeholder="Write something ..." /> */}
                    <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Write Something..." style={{padding : "10px" , border : "none" , width : "100%" , height : "100%", minHeight : "150px" , textAlign : "start"}}></textarea>
                    <hr style={{marginBottom : "0px" , marginTop : "0px" , width : "97%"}}/>
                </CardBody>
                <CardFooter style={{padding : "5px 12px" , backgroundColor : "white" , border : "none" }}>
                    <Button onClick={() => {
                            props.createPost(body)
                            setBody('')
                        }}>Post</Button> 
                    <select style={{margin : "0px 10px" , border : "none"}}>
                        <option value="public">Public</option>
                        <option value="private">Friends</option>
                    </select>
                </CardFooter>
            </Card>
        </div>
    )
}


// const mapStateToProps = state => {

// }

const mapDispatchToProps = dispatch => {
    return {
        createPost : (body) => dispatch(createPost(body))
    }
}

export default connect(null , mapDispatchToProps)(CreatePost)
