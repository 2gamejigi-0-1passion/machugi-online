import { ACCESS_TOKEN } from '../constants';

export function useLogout() {
    const handleLogout = (setAuthenticated, setCurrentUser) => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false);
        setCurrentUser(null);
    };

    return handleLogout;
}