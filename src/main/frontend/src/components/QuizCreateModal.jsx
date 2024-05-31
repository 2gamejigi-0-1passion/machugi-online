import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useRef, useEffect } from "react";
import "../styles/Modal.css";

function QuizCreateModal({ show, onHide, images, selectedImageIndex }) {

    const [isChecked, setIsChecked] = useState(false);
    const [previewImage, setPreviewImage] = useState(null); // 문제 이미지
    const [previewAnswerImage, setPreviewAnswerImage] = useState(null); // 정답 이미지
    const fileInputRef = useRef(null);

    useEffect(() => {
        // 선택된 이미지의 인덱스가 변경될 때마다 해당 이미지의 미리보기 설정
        if (selectedImageIndex !== null) {
            setPreviewImage(images[selectedImageIndex]);
            setPreviewAnswerImage(images[selectedImageIndex]);
        }
    }, [selectedImageIndex, images]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // 문제 이미지 설정
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAnswerFileChange = (e) => {
        const file = e.target.files[0];
        handleAnswerFile(file);
    };

    const handleAnswerFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewAnswerImage(reader.result); // 정답 이미지 설정
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return(
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="custom-modal" // 사용자 정의 CSS 클래스
        >
            <Modal.Body>
                <div className={"modal-container"}>
                    <div>
                        <span>퀴즈 만들기 / 이미지 잘라내기</span>
                    </div>
                    <hr/>
                    <div className={"image-edit-container"}>
                        <div className={"quiz-image-edit"}>
                            <span>문제 이미지</span>
                            <div>
                                {previewImage && (
                                    <img className={"quiz-image"} src={previewImage} alt={`문제 이미지`} />
                                )}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }} // 파일 입력 요소를 숨깁니다.
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <div className={"quiz-image-correct"}>
                            <span>정답 이미지</span>
                            <div>
                                {previewAnswerImage && (
                                    <img className={"quiz-image"} src={previewAnswerImage} alt={`정답 이미지`} />
                                )}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }} // 파일 입력 요소를 숨깁니다.
                                    onChange={handleAnswerFileChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>정답</span>
                    </div>
                    <input/>
                    <div className={"modal-check-btn-container"}>
                        <Button variant="success">확인</Button>
                        <Button variant="success">취소</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default QuizCreateModal;
