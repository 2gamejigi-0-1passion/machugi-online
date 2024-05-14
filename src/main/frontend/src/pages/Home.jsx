import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import QuizCreateButton from '../components/QuizCreateButton';
import GameCreateButton from '../components/GameCreateButton';
import MainNotice from '../components/MainNotice';
import { getCurrentUser } from '../services/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import '../css/MainContents.css';
import {useLogout} from "../services/Utils";

function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogout = useLogout();

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
                <div className="buttons-container">
                    <QuizCreateButton/>
                    <GameCreateButton/>
                </div>
            </div>
        </div>
    );
}

export default Home;
