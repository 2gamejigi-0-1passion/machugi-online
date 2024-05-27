import React from "react";
import {useAuth} from "../hooks/useAuth";

function MainNotice(){

    const { currentUser } = useAuth();

    return(
        <div>
            <span>이 사이트는 게임 제작 사이트입니다.</span>
            {currentUser && <p>어서오세여, {currentUser.name}!</p>}
        </div>
    );
}

export default MainNotice;