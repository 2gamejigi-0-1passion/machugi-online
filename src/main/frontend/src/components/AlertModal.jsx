import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import React from "react";

function AlertModal(props) {

    const [modalShowSignIn, setModalShowSignIn] = React.useState(false);
    const [modalShowSingUp, setModalShowSingUp] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p>
                    퀴즈 만들기를 사용하시려면 로그인을 해야합니다.

                    로그인 하시겠습니까?
                </p>
            </Modal.Body>
            <Modal.Footer>
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
            </Modal.Footer>
        </Modal>
    );
}

export default AlertModal;