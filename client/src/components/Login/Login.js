import React , {useState} from 'react'
import AppNavbar from '../AppNavbar'
import {
    Container, Col, Form, Row , Card ,
    FormGroup, Label, Input, CardBody, CardFooter  , Alert
  } from 'reactstrap';
import { connect } from 'react-redux';
import uuid from 'react-uuid'

import { loginUser, clearErrors} from '../../redux/index';
import { Link } from 'react-router-dom'
export const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [ visible , setVisible] = useState(false);

    const onDismiss = () => setVisible(false);
    

    return (
        <div className="content">
            <Card style={{minHeight : "100%" , border : "none"}}>
            <AppNavbar />
            <Container style={{paddingBottom : "10px" , minHeight : "60vh"}}>
                <Row>
                    <Col xl="8" lg="8" md="6" >
                        <h1 className="display-3">Villa</h1>
                        <p className="lead">The complete Social Platform</p>
                        <hr/>
                        <p style={{color : "grey" , padding : "20px 0px 0px 0px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corporis tenetur magnam accusantium temporibus. Perspiciatis voluptatum dolor repudiandae. Nulla porro officiis neque possimus inventore expedita dolorum eos tenetur illum nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corporis tenetur magnam accusantium temporibus. Perspiciatis voluptatum dolor repudiandae. Nulla porro officiis neque possimus inventore expedita dolorum eos tenetur illum nam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corporis tenetur magnam accusantium temporibus. Perspiciatis voluptatum dolor repudiandae. Nulla porro officiis neque possimus inventore expedita dolorum eos tenetur illum nam.</p>
                    </Col>
                    <Col xl="4" lg="4" md="6" >
                        <Card style={{backgroundColor : "#f2f2f2" , border : "none" , minHeight : "100%"}}>
                            <CardBody >
                                <div>
                                    <h2 style={{padding : "10px" , textAlign : "center"}}>Sign In</h2>
                                </div>
                                <Form>
                                    
                                    <FormGroup>
                                        <Label>Username</Label>
                                        <Input
                                            required
                                            type="text"
                                            value={username}
                                            placeholder="Username"
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                        </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input
                                        required
                                            type="password"
                                            value={password}
                                            placeholder="********"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Input type="button" className="btn btn-primary"
                                        onClick={() => {
                                            setVisible(true)
                                            props.loginUser({username , password})
                                        }
                                        }
                                        value="Login" />
                                    </FormGroup>
                                <p style={{textAlign : "right"}}>Not a member ? <Link to='/register'>Register</Link></p>
                                    <FormGroup>
                                        {props.errors.map(error => (
                                            <Alert key={uuid()} color="info" isOpen={visible} toggle={onDismiss}>
                                                {error}
                                            </Alert>
                                        ))}
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <CardFooter style={{backgroundColor : "white" , border : "none"}}>
                <hr style={{width : "60%"}}/>
                <p style={{textAlign : "center"}} className="lead">&copy; Copyright 2020</p>
                {/* &copy; Copyright 2020 */}
            </CardFooter>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        errors : state.error.msg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser : ({username , password}) => dispatch(loginUser({username , password})) ,
        clearErrors : () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)