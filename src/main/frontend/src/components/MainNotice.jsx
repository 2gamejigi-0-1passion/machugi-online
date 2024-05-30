import React from "react";
import {useAuth} from "../hooks/useAuth";
import "../styles/MainContents.css";

function MainNotice(){

    const { currentUser } = useAuth();

    return(
        <div className={"main-notice-text"}>
            <span>이 사이트는 게임 제작 사이트입니다.</span>
            {currentUser && <p>환영합니다, {currentUser.name}님!</p>}
        </div>
    );
}

export default MainNotice;