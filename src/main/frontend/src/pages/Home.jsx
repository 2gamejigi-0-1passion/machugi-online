import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QuizCreateButton from '../components/QuizCreateButton';
import GameCreateButton from '../components/GameCreateButton';
import MainNotice from '../components/MainNotice';
import { getCurrentUser } from '../services/APIUtils';
import '../styles/MainContents.css';
import {useLogout} from "../services/Utils";

function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogout = useLogout(setAuthenticated, setCurrentUser);

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, []);

    function loadCurrentlyLoggedInUser() {
        getCurrentUser()
            .then(user => {
                setCurrentUser(user);
                setAuthenticated(true);
            })
            .catch(err => {
                setAuthenticated(false);
                setCurrentUser(null);
            });
    }

    return (
        <div>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} onLogout={handleLogout}/>
            <div className="main-contents-container">
                <MainNotice/>
            </div>
            <div className="buttons-container">
                <QuizCreateButton/>
                <GameCreateButton/>
            </div>
        </div>
    );
}

export default Home;
