import React, {useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function Header(props){

    const [modalShowSignIn, setModalShowSignIn] = React.useState(false);
    const [modalShowSingUp, setModalShowSingUp] = React.useState(false);

    return (
        <div>
            <Navbar bg="white" className="my-4">
                <Container>
                    <Navbar.Collapse className="justify-content-end">
                        {props.authenticated ? (
                            // true
                            <>
                                <Button variant="outline-dark" onClick={() => setModalShowSignIn(true)} style={{ marginRight: '10px' }}>
                                    <span>마이페이지</span>
                                </Button>
                                <SignInModal show={modalShowSignIn} onHide={() => setModalShowSignIn(false)} />
                                <Button variant="success" onClick={() => props.onLogout()}>
                                    <span>로그아웃</span>
                                </Button>
                                <SignUpModal show={modalShowSingUp} onHide={() => setModalShowSingUp(false)} />
                            </>
                        ) : (
                            // false
                            <>
                                <Button variant="outline-dark" onClick={() => setModalShowSignIn(true)} style={{ marginRight: '10px' }}>
                                    <span>로그인</span>
                                </Button>
                                <SignInModal
                                    show={modalShowSignIn}
                                    onHide={() => setModalShowSignIn(false)}
                                />
                                <Button variant="outline-dark" onClick={() => setModalShowSingUp(true)}>
                                    <span>회원가입</span>
                                </Button>
                                <SignUpModal
                                    show={modalShowSingUp}
                                    onHide={() => setModalShowSingUp(false)}
                                />
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr style={{margin:0}}/>
        </div>
    );
}

export default Header;
