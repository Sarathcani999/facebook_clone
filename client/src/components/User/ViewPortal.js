import React , {useState} from 'react'
import { connect } from 'react-redux'
import { Fade , Container , Col, Row ,TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'reactstrap'
import Posts from './Posts/Posts';
import AppNavbar from '../AppNavbar';

function ViewPortal(props) {
    
    const [fadeIn, ] = useState(true);
    const [activeTab, setActiveTab] = useState('1');
    const [isFollowing , setIsFollowing] = useState(false)
    

    console.log("View Portal")
    console.log(props.viewUser)

    return (
        <div>
            <AppNavbar />
            <Container >

                <Row style={{ padding : "20px"}}>
                    <Col xl="2" lg="3" style={{border : "1px solid black" , borderRadius : 100 , height : 200 , width : 200}}>
                        <div style={{minHeight : "200px"}}/>
                    </Col>
                    <Col xl="8" lg="7" md="10" sm="10" style={{paddingTop : "0px"}} >
                        <Fade in={fadeIn} tag="h5" className="mt-3">
                            <p className="display-4">{props.viewUser.name} </p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}><i>{props.viewUser.occupation}</i></p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}>{props.viewUser.city}</p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "12px"}}><i>"{props.viewUser.bio}"</i></p>
                        </Fade>    
                    </Col>
                    <Col xl="2" lg="2" md="2" sm="2" >
                        {isFollowing ? <Button className="btn-alert" onClick={() => setIsFollowing(!isFollowing)}>Unfollow</Button> : <Button className="btn-primary" onClick={() => setIsFollowing(!isFollowing)}>Follow</Button>}
                    </Col>
                </Row>
                <hr />
                <div >
                    <Nav tabs>
                        <NavItem>
                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            Posts
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Fade in={fadeIn} tag="h5" className="mt-3">
                                <Posts hideCreatePost={true}/>
                            </Fade>
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated ,
    user : state.auth.user
})


export default connect(mapStateToProps)(ViewPortal)
