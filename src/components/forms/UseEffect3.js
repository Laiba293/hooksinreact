//cleanup function
import React, { useState, useEffect } from "react";

const UseEffect3 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  }, []);

  return (
    <div>
      <p>the actual size of the window is:</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default UseEffect3;
