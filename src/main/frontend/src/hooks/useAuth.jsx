import { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/APIUtils';
import { ACCESS_TOKEN } from '../constants';
export function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, []);

    function loadCurrentlyLoggedInUser() {
        getCurrentUser()
            .then(user => {
                setCurrentUser(user);
                setAuthenticated(true);
            })
            .catch(err => {
                // Error Handling
            });
    }

    return { authenticated, setAuthenticated, currentUser, setCurrentUser, loadCurrentlyLoggedInUser  };
}
