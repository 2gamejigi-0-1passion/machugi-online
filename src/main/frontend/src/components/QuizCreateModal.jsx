import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";

function QuizCreateModal(props){

    const [isChecked, setIsChecked] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div>
                    <div>
                        <span>퀴즈 만들기</span>
                    </div>
                    <div>
                        <span>제목</span>
                        <input/>
                    </div>
                    <div>
                        <span>설명</span>
                        <input/>
                    </div>
                    <div>
                        <span>썸네일(선택)</span>
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            style={{
                                width: '300px',
                                height: '300px',
                                border: '2px dashed #ccc',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {previewImage ? (
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            ) : (
                                <p>이미지를 여기에 드래그하세요</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <span>공개여부</span>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                        />
                    </div>
                    <div>
                        <button>
                            <span>저장</span>
                        </button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}

export default QuizCreateModal;