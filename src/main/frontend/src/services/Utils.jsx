import {ACCESS_TOKEN} from '../constants';
import {useNavigate} from "react-router-dom";

// 로그아웃 처리
export function useLogout(setAuthenticated, setCurrentUser) {

    return () => {
        setAuthenticated(false);
        setCurrentUser(null);
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.reload();
    };
}
