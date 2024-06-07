import React from "react";
import Header from "../components/Header";
import QuizCreateButton from "../components/QuizCreateButton";
import GameCreateButton from "../components/GameCreateButton";
import MainNotice from "../components/MainNotice";
import "../styles/MainContents.css";
import { useLogout } from "../services/Utils";
import { useAuth } from "../hooks/useAuth";

function Home() {

    const { authenticated, setAuthenticated, setCurrentUser } = useAuth();
    const handleLogout = useLogout(setAuthenticated, setCurrentUser);

    return (
        <div>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} onLogout={handleLogout} />
            <div className="main-contents-container">
                <MainNotice />
            </div>
            <div className="buttons-container">
                <QuizCreateButton />
                <GameCreateButton />
            </div>
        </div>
    );
}

export default Home;
