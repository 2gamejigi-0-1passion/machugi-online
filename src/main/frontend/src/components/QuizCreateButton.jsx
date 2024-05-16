import '../styles/MainContents.css';
import React from "react";
import {useAuth} from "../hooks/useAuth";
import AlertModal from "./AlertModal";
import {useNavigate} from "react-router-dom";

function QuizCreateButton(){

    const [modalShow, setModalShow] = React.useState(false);
    const { authenticated } = useAuth();
    const navigate = useNavigate();

    const handleGameCreate = () => {
        if (!authenticated) {
            console.log("로그인안됨")
            console.log(authenticated);
            // 로그인되지 않은 경우 모달창을 표시합니다.
            setModalShow(true);
        } else {
            console.log("로그인됨")
            console.log(authenticated);
            navigate("quizCreateRoom");
        }
    };

    return(
        <div>
            <button className={"game-create-btn"} onClick={handleGameCreate}>
                <span>퀴즈 만들기</span>
            </button>
            <AlertModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default QuizCreateButton;