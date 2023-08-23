import React, { useState } from "react";
import { useKeyPress } from "@reactusehooks/core";
import PlayGround from "@/components/cards/PlayGround";

const UseKeyPress = () => {
  const [isClicked, setIsClicked] = useState(false);
  useKeyPress("", () => setIsClicked(true));

  return (
    <PlayGround>
      <div>{isClicked ? "Arrow Down Key was clicked" : "Not Clicked Yet"}</div>
    </PlayGround>
  );
};

export default UseKeyPress;
