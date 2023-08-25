import React, {useState} from "react";
import {useKeyPress} from "@reactusehooks/core";
import PlayGround from "@/components/cards/PlayGround";

const UseKeyPress = () => {
    const [isClicked, setIsClicked] = useState(false);
    useKeyPress("ArrowDown", () => setIsClicked(true));

    return (
        <PlayGround>
            <div>
                Please click the <b>Arrow Down</b> key
            </div>
            <div>{isClicked ? "Arrow Down Key was clicked" : "Not Clicked Yet"}</div>
        </PlayGround>
    );
};

export default UseKeyPress;
