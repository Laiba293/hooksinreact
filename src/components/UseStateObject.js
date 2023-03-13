import React from "react";

const UseStateObject = () => {
  const [myObjet, setMyObject] = react.useState({
    myName: "laiba khalid",
    myAge: "24",
    degree: "bsSE",
    rollNo: 55,
  });
  const changeObject = () => {
    setMyObject({
      ...myObjet,
      myAge: 24,
    });
  };
  return (
    <div>
      <h1 className="h1style">
        Name:{myObjet.myName} & Age:{myObjet.myAge}& Degree:{myObject.degree}
      </h1>
      <button className="btn" onClick={changeObject}>
        update
      </button>
    </div>
  );
};

export default UseStateObject;
