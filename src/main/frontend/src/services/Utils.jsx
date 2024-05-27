import { ACCESS_TOKEN } from '../constants';
import { useNavigate } from "react-router-dom";

// 로그아웃 처리
export function useLogout(setAuthenticated, setCurrentUser) {
    const navigate = useNavigate(); // useNavigate 훅 호출

    return () => {
        setAuthenticated(false);
        setCurrentUser(null);
        localStorage.removeItem(ACCESS_TOKEN);
        navigate('/'); // 로그아웃 후 / URL로 이동
        window.location.reload(); // 페이지 새로고침
    };
}
