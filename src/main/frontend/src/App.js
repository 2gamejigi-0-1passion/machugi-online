import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import {useEffect} from "react";

function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/signIn" element={<SignInModal authenticated={authenticated} setAuthenticated={setAuthenticated} onLogin={loadCurrentlyLoggedInUser}/>} />
                <Route path="/signUp" element={<SignUpModal />} />
            </Routes>
        </Router>
    );
}

export default App;
