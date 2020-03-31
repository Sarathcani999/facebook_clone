import React , {useState} from 'react'
import { connect } from 'react-redux'
import { Fade , Container , Col, Row ,TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'reactstrap'
import Posts from './Posts/Posts';
import AppNavbar from '../AppNavbar';

function ViewPortal(props) {
    
    const [fadeIn, ] = useState(true);
    const [activeTab, setActiveTab] = useState('1');
    const [isFollowing , setIsFollowing] = useState(false)
    
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
                            <p className="display-4">{props.username} </p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}><i>Student</i></p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}>Kerala , India</p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "12px"}}><i>"Student persuing Bsc. Agricultre"</i></p>
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
                        {/* <NavItem>
                        <NavLink className={activeTab ==='2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            Followers
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className={activeTab ==='3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            Following
                        </NavLink>
                        </NavItem> */}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Fade in={fadeIn} tag="h5" className="mt-3">
                                <Posts hideCreatePost={true}/>
                            </Fade>
                        </TabPane>
                        {/* <TabPane tabId="2">
                        <Fade in={fadeIn} tag="h5" className="mt-3">
                                <Followers />
                            </Fade>
                        </TabPane>
                        <TabPane tabId="3">
                        <Fade in={fadeIn} tag="h5" className="mt-3">
                                <Following />
                            </Fade>
                        </TabPane> */}
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
