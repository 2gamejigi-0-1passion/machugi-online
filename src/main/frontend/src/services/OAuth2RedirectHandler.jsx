import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";

// OAuth2 리디렉션을 처리하는 함수형 컴포넌트를 정의합니다.
export function OAuth2RedirectHandler() {
    const location = useLocation(); // 현재 위치를 가져오는 useLocation 훅을 사용합니다.
    const navigate = useNavigate(); // 네비게이션을 수행하는 useNavigate 훅을 사용합니다.

    useEffect(() => {
        // URL에서 특정 매개변수 값을 가져오는 함수를 정의합니다.
        const getUrlParameter = (name) => {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            const results = regex.exec(location.search);
            return results && results[1];
        }

        const token = getUrlParameter('token'); // 'token' 매개변수 값을 가져옵니다.
        const error = getUrlParameter('error'); // 'error' 매개변수 값을 가져옵니다.

        if (token) { // 토큰이 존재하는 경우
            localStorage.setItem(ACCESS_TOKEN, token); // 액세스 토큰을 로컬 스토리지에 저장합니다.
            navigate('/', { state: { from: location } }); // 메인 페이지로 이동합니다.
        } else { // 토큰이 없는 경우
            navigate('/signIn', { // 로그인 페이지로 이동합니다.
                state: {
                    from: location, // 이전 위치 정보를 전달합니다.
                    error: error // 오류 메시지를 전달합니다.
                }
            });
        }
    }, [location, navigate]); // 위치 및 네비게이션 상태가 변경될 때마다 useEffect가 실행됩니다.

    return null; // 컴포넌트가 실제로 렌더링되지 않도록 null을 반환합니다.
}

export default OAuth2RedirectHandler;