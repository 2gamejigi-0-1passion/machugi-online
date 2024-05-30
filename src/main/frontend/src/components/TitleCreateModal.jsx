import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState, useRef } from "react";
import "../styles/Modal.css";

function TitleCreateModal(props){

    const [isChecked, setIsChecked] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
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
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className={"modal-container"}>
                    <div>
                        <span>퀴즈만들기</span>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <span>제목</span>
                        </div>
                        <div>
                            <input
                                className={"modal-input"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>설명</span>
                        </div>
                        <div>
                            <textarea
                                className={"modal-textarea"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>썸네일(선택)</span>
                        </div>
                        <div
                            onClick={handleClick}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            className={"thumbnail-container"}
                        >
                            {previewImage ? (
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    // style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            ) : (
                                <p>썸네일을 추가해보세요</p>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>공개 여부</span>
                        </div>
                        <div>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                checked={isChecked}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={"modal-check-btn-container"}>
                        <Button variant="success">확인</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default TitleCreateModal;
