import React, { useState } from "react";
import RulesHooks from "./components/RulesHooks";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import ShortCirEval from "./components/ShortCirEval";
import BasicForms from "./components/forms/BasicForms";
import UseEffect from "./components/forms/UseEffect3";
import UseEffect3 from "./components/forms/UseEffect3";
import UseEffectAPI from "./components/useEffectAPI";
const App = () => {
  // let val = 'laiba khalid';

  // const[myName ,setMyName]= useState('laiba khalid');
  // const chngeName = () => {
  //  val = 'khalid nazir';
  //  console.log(val);
  // let val = myName;

  // if (val === 'laiba khalid'){
  //     setMyName('khalid nazir');
  // }else{
  //   setMyName('laiba khalid');
  // }
  //with ternary operation
  // (val === 'laiba khalid')?
  // setMyName('khalid nazir'):setMyName('laiba khalid');
  // }
  // console.log(myName);
  return (
    <div>
      {/* <h1>{myName}</h1>
           <button className="btn" onClick={chngeName}>click on me</button> */}
      {/* <RulesHooks /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCirEval /> */}
      {/* <BasicForms /> */}
      <UseEffect3 />
      {/* <UseEffectAPI /> */}
    </div>
  );
};
export default App;
