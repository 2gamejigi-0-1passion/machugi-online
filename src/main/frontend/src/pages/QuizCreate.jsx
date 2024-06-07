import React from "react";
import Header from "../components/Header";
import { useLogout } from "../services/Utils";
import QuizCreateRoom from "../components/QuizCreateRoom";
import { useAuth } from "../hooks/useAuth";

function QuizCreate() {
    const { authenticated, setAuthenticated, currentUser, setCurrentUser } = useAuth();
    const handleLogout = useLogout(setAuthenticated, setCurrentUser);

    return (
        <div>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} onLogout={handleLogout} />
            <div>
                <QuizCreateRoom />
            </div>
        </div>
    );
}

export default QuizCreate;
