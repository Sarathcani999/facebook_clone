import React , { useState} from 'react'
import { logoutUser } from '../redux/index'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Button,
    NavLink ,
    Input
  } from 'reactstrap'
import { connect } from 'react-redux'

function AppNavbar(props) {
    let [isOpen , setIsOpen] = useState(false)
    return (
        <div>
        <Navbar color="light" light expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Villa</NavbarBrand>
                <Nav className="ml-auto" navbar style={{minWidth : "60%" , maxWidth : "100%" , padding : "0px 30px" , margin : 0}}>
                    {(props.isAuthenticated === true) ? (
                        <NavItem style={{width : "100%"}}>
                            <Input type="search" placeholder="Search a User"/>
                        </NavItem>
                    ) :
                    <div></div>
                    }
                    
                </Nav>
                <NavbarToggler style={{border : "none"}} onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    
                    <Nav className="ml-auto" navbar>
                        {(props.isAuthenticated === true) ? (
                            <NavItem>
                            <NavLink style={{paddingTop : "5px"}} href="/home">Home</NavLink>
                        </NavItem>
                        ) :
                        <div></div>
                        }

                        {(props.isAuthenticated === true) ? (
                        <NavItem>
                            <Button onClick = {() => props.logoutUser() } size="sm"> Logout </Button>
                        </NavItem>
                        ) :
                        <div></div>
                        }
                        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         logoutUser : () => dispatch(logoutUser())
//     }
// }

export default connect(mapStateToProps , { logoutUser })(AppNavbar)