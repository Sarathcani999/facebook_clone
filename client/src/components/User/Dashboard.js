import React , {useState} from 'react'
import { connect } from 'react-redux'
import { Fade , Container , Col, Row ,TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import Posts from './Posts/Posts';
import Followers from './Followers/Follower'
import Following from './Following/Following'
import AppNavbar from '../AppNavbar';

function Dashboard(props) {
    const [fadeIn, ] = useState(true);
    const [activeTab, setActiveTab] = useState('1');
    
    return (
        <div>
            <AppNavbar />
            <Container >

                <Row style={{ padding : "20px"}}>
                    <Col xl="2" lg="3" style={{border : "1px solid black" , borderRadius : 100 , height : 200 , width : 200}}>
                        <div style={{minHeight : "200px"}}/>
                    </Col>
                    <Col xl="10" lg="9" style={{paddingTop : "0px"}} >
                        <Fade in={fadeIn} tag="h5" className="mt-3">
                            <p className="display-4">{props.user.name} </p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}><i>{props.user.occupation}</i></p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "2px"}}>{props.user.city}</p>
                            <p className="lead" style={{marginBottom : "2px" , marginTop : "12px"}}><i>"{props.user.bio}"</i></p>
                        </Fade>    
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
                        <NavItem>
                        <NavLink className={activeTab ==='2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            Followers
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className={activeTab ==='3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            Following
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Fade in={fadeIn} className="mt-3">
                                <Posts hideCreatePost={false} userPost={true}/>
                            </Fade>
                        </TabPane>
                        <TabPane tabId="2">
                        <Fade in={fadeIn} className="mt-3">
                                <Followers />
                            </Fade>
                        </TabPane>
                        <TabPane tabId="3">
                        <Fade in={fadeIn} className="mt-3">
                                <Following />
                            </Fade>
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </div>
    )
}


const mapStateToProps = (state) => ({
    user : state.auth.user
})

// const mapDispatchToProps = dispatch => {
//     return {
//         addItem : (item) => dispatch(createItem(item)),
//         deleteItem : (id) => dispatch(deleteItem(id))
//     }
// }


export default connect(mapStateToProps)(Dashboard)
