import React from 'react'
import {  Button } from 'reactstrap'
import { Card, CardBody , CardFooter  } from 'reactstrap'

function CreatePost() {
    return (
        <div style={{width : "100%"}}>
            <Card style={{ width : "100%"}}>
                <CardBody style={{padding : 0}}>
                    {/* <Input type={Text} style={{border : "none" , width : "100%" , height : "100%", minHeight : "150px" , textAlign : "start"}} placeholder="Write something ..." /> */}
                    <textarea placeholder="Write Something..." style={{padding : "10px" , border : "none" , width : "100%" , height : "100%", minHeight : "150px" , textAlign : "start"}}></textarea>
                    <hr style={{marginBottom : "0px" , marginTop : "0px" , width : "97%"}}/>
                </CardBody>
                <CardFooter style={{padding : "5px 12px" , backgroundColor : "white" , border : "none" }}>
                    <Button>Post</Button> 
                    <select style={{margin : "0px 10px" , border : "none"}}>
                        <option value="public">Public</option>
                        <option value="private">Friends</option>
                    </select>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CreatePost
