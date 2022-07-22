import './App.css';
import "./demo.css";
import React from 'react'
//import { Cursor } from './react-creative-cursor/dist';
import Cursor from "react-special-cursor";
import './react-creative-cursor/dist/styles.css';
import background from './assets/images/1.png';
import BlackBack from './assets/images/black.png';


function App() {
  const [black, setBlack] = React.useState(false)
  const leaveHandler = () =>{
    console.log("hello");
    setBlack(false)
  }
  const enterHandler = () =>{
    console.log("hello");
    setBlack(true)
  }
  return (
    <Cursor
      hoverClasses={[
        { classNameOfTargetElement: "head", classNameOfStyle: "head-hover" },
        { classNameOfTargetElement: "link", classNameOfStyle: "hover" },
        { classNameOfTargetElement: "react", classNameOfStyle: "react-hover" },
        {
          classNameOfTargetElement: "children",
          classNameOfStyle: "children-hover",
        },
      ]}>
      <div className="head">
        <img src={black?background:BlackBack} width="100%" height="100%" alt="error"
         onMouseLeave={()=>leaveHandler()}
         onMouseEnter={()=>enterHandler()} />
      </div>
    </Cursor>
  );
}

export default App;
