import React, {useState} from "react";
import "../styles/QuizCreateRoom.css";
import googleBtn from '../assets/web_neutral_sq_na@1x.png';
import TypeSelectModal from "./TypeSelectModal";

function QuizCreateRoom() {

    const [modalShowQuizCreate, setModalQuizCreate] = useState(false);

    return (
        <div className="quiz-create-room-container">
            <div className="quiz-search-container">
                {/* 검색창 */}
                <input
                    className="quiz-search-input"
                    placeholder="검색창 입니다."
                />
            </div>
            <div>
                <div>
                    {/* 퀴즈 생성 컨테이너 */}
                    <div>
                        <button className={"quiz-create-btn-icon"} onClick={() => setModalQuizCreate(true)}>
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: 'pointer' }} // 마우스가 올라가면 커서를 포인터로 변경합니다.
                            >
                                <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="20" />
                                <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="20" />
                            </svg>
                        </button>
                        <TypeSelectModal
                            show={modalShowQuizCreate}
                            onHide={() => setModalQuizCreate(false)}
                        />
                    </div>
                    <div>
                        <div className={"quiz-created-icon"}>
                            <a>
                                <img src={googleBtn} alt={"임시 이미지"}/>
                            </a>
                        </div>
                        <div>
                            <span>퀴즈이름</span>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <span>제작한 퀴즈가 없습니다. 퀴즈를 만들어 볼까요?</span>
                    {/* 퀴즈 없을 시 알림 화면 */}
                </div>
            </div>
        </div>
    );
}

export default QuizCreateRoom;
