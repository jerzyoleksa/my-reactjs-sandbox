import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildA = forwardRef((props, ref) => {


  useImperativeHandle(ref, () => ({
    qtyIncrement: () => qtyIncrement(),
    qtyDecrement: () => qtyDecrement(),
    deleteHandler: () =>deleteHandler(),
  }));
 
  const [counter, setCounter] = useState(0);

  const qtyIncrement = () => {
    console.log("qtyIncrement");
    setCounter(counter+1);
    // ...
  };
  const qtyDecrement = () => {
    console.log("qtyDecrement");
    setCounter(counter-1);
    // ...
  };
  const deleteHandler = () => {
    console.log("deleteHandler");
    // ...
  };
  return(
    <div className="frame1">
        <h2>{props?.title}</h2>
        <p>ChildA space {counter}</p>
    </div>   
    );
});

ChildA.displayName = "ChildA";
export default ChildA;