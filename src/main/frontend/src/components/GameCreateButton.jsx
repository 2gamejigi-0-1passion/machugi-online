import { useAuth } from "../hooks/useAuth";
import React, { useState } from "react";
import AlertModal from "./AlertModal";

function GameCreateButton(){

    return(
        <div>
            <button className={"game-create-btn"}>
                <span>게임하기</span>
            </button>
        </div>
    );
}

export default GameCreateButton;
