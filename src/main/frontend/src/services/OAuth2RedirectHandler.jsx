import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ACCESS_TOKEN} from "../constants";

export function OAuth2RedirectHandler(){

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const getUrlParameter = (name) => {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            const results = regex.exec(location.search);
            return results && results[1];
        }

        const token = getUrlParameter('token');
        const error = getUrlParameter('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            navigate('/', { state: { from: location } });
        } else {
            navigate('/signIn', {
                state: {
                    from: location,
                    error: error
                }
            });
        }
    }, [location, navigate]);

    return null;
}

return OAuth2RedirectHandler;