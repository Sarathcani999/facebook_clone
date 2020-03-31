import React from 'react'
import { Card, CardBody, CardTitle, CardHeader, CardFooter  } from 'reactstrap'

function Post() {
    return (
        <div style={{margin : "10px 0px"}}>
            <Card style={{ width : "100%"}}>
                <CardHeader style={{backgroundColor : "white" , borderBottom : "none" , paddingBottom : 0}}>
                    <CardTitle >
                        <p className="lead" style={{marginBottom : "2px"}}><b>Lisha J Kappen</b></p>
                        <p style={{fontSize : "small" , marginBottom : "0"}}><i>August 2 , 2019</i></p>
                    </CardTitle>
                </CardHeader>
                <CardBody style={{paddingTop : 0}}>
                    <hr style={{marginBottom : "6px" , marginTop : "3px"}}/>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corporis tenetur magnam accusantium temporibus. Perspiciatis voluptatum dolor repudiandae. Nulla porro officiis neque possimus inventore expedita dolorum eos tenetur illum nam.</p>
                </CardBody>
                <CardFooter style={{padding : "5px 12px" }}>
                    <p style={{marginBottom : "0"}}>24 Likes  |  3 Comments</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Post
