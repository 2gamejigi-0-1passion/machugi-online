import { ACCESS_TOKEN } from '../constants';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function useLogout() {
    const handleLogout = (setAuthenticated, setCurrentUser) => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false);
        setCurrentUser(null);
    };

    return handleLogout;
}