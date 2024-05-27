import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Home from "./pages/Home";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import {useAuth} from "./hooks/useAuth";
import OAuth2RedirectHandler from "./services/OAuth2RedirectHandler";
import QuizCreate from "./pages/QuizCreate";
import QuizCreateModal from "./components/QuizCreateModal";

function App() {

    const { authenticated, setAuthenticated, loadCurrentlyLoggedInUser } = useAuth(); // useAuth에서 값 받아오기

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signIn" element={<SignInModal authenticated={authenticated} setAuthenticated={setAuthenticated} onLogin={loadCurrentlyLoggedInUser}/>} />
                <Route path="/signUp" element={<SignUpModal />} />
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
                <Route path="/quizCreate" element={<QuizCreate />} />
                <Route path="/quizCreateModal" element={<QuizCreateModal/>}/>
            </Routes>
        </Router>
    );
}

export default App;
