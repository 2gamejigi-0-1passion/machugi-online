import React, { useRef, useState } from "react";
import "../styles/QuizCreateRoom.css";
import QuizCreateModal from "./QuizCreateModal";

function QuizCreateRoom() {
    const fileInputRef = useRef(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleFileInputChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(newImages).then((images) => {
            setSelectedImages((prevImages) => [...prevImages, ...images]);
        });
    };

    const handleImageButtonClick = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const handleFileInputButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="quiz-create-room-container">
            <div className="content-wrapper">
                {/* Selected images */}
                {selectedImages.map((image, index) => (
                    <button key={index} className="quiz-created-icon" onClick={() => handleImageButtonClick(index)}>
                        <a>
                            <img src={image} alt={`Selected ${index}`} />
                        </a>
                    </button>
                ))}
                {/* Quiz create modal */}
                <QuizCreateModal
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}
                    images={selectedImages}
                    selectedImageIndex={selectedImageIndex}
                />
                {/* Quiz create button */}
                <div>
                    <button className="quiz-create-btn-icon" onClick={handleFileInputButtonClick}>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ cursor: 'pointer' }}
                        >
                            <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="20" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="20" />
                        </svg>
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                        multiple
                    />
                </div>
            </div>
        </div>
    );
}

export default QuizCreateRoom;
