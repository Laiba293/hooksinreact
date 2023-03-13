import React, { useState } from "react";

const ShortCireval = () => {
  const [demo, setDemo] = useState("check check");
  return (
    <div>
      <h1>{"technical" || demo}</h1>
      <h1>{demo && "support"}</h1>
    </div>
  );
};

export default ShortCireval;
