import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import "../styles/Icon.css";
import TitleCreateModal from "./TitleCreateModal";

function TypeSelectModal(props){

    const [modalSomeViewCreateModal, setModalSomeViewCreateModal] = useState(false);

    return(
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div>
                    <div>
                        <span>타입 선택</span>
                    </div>
                    <hr/>
                    <div className={"type-icon-container"}>
                        <button className={"type-icon-1"} onClick={() => setModalSomeViewCreateModal(true)}>
                            <span>일부 보기</span>
                        </button>
                        <TitleCreateModal
                            show={modalSomeViewCreateModal}
                            onHide={() => setModalSomeViewCreateModal(false)}
                        />
                        <button className={"type-icon-2"} onClick={() => setModalSomeViewCreateModal(true)}>
                            <span>음악</span>
                        </button>
                        <TitleCreateModal
                            show={modalSomeViewCreateModal}
                            onHide={() => setModalSomeViewCreateModal(false)}
                        />
                        <button className={"type-icon-3"} onClick={() => setModalSomeViewCreateModal(true)}>
                            <span>일반</span>
                        </button>
                        <TitleCreateModal
                            show={modalSomeViewCreateModal}
                            onHide={() => setModalSomeViewCreateModal(false)}
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default TypeSelectModal;