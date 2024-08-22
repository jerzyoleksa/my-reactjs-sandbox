import logo from './logo.svg';
import './App.css';
import React, { useRef, useImperativeHandle } from "react";
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

function App() {
  const childRef = useRef()
  return (
    <div className="parent">
      <div>Parent space in black frame</div>
      <ChildA ref = {childRef}/>
      <ChildB getParentRef = {childRef}/>
      <div>
          <button onClick={() => {childRef.current.qtyIncrement()}}>+</button> button in parent
      </div>

    </div>
  );
}

export default App;
