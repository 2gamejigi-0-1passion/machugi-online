import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/SignIn.css';
import googleBtn from '../assets/google_login_btn.png';
import kakaoBtn from '../assets/kakao_login_btn.png'
import naverBtn from '../assets/naver_login_btn.png'
import testLogo from '../assets/size_s_icon_137187.png'
import { GOOGLE_AUTH_URL, NAVER_AUTH_URL, KAKAO_AUTH_URL } from '../constants/index';

function SignUpModal(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className={"form-background"}>
                    <img className={"form-logo"} src={testLogo} alt="로고 이미지"/>
                    <div className={"hr-sect"}>
                        <span>간편 회원가입</span>
                    </div>
                    <div>
                        <a href={NAVER_AUTH_URL}>
                            <img className={"from-signup-btn"} src={naverBtn} alt="네이버 로그인"/>
                        </a>
                    </div>
                    <div>
                        <a href={KAKAO_AUTH_URL}>
                            <img className={"from-signup-btn"} src={kakaoBtn} alt="카카오 로그인"/>
                        </a>
                    </div>
                    <div>
                        <a href={GOOGLE_AUTH_URL}>
                            <img className={"from-signup-btn"} src={googleBtn} alt="구글 로그인"/>
                        </a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default SignUpModal;
