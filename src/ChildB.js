import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildB = ({ getParentRef }) => {

  return(
    <div className="frame2">
        <div>
          <button onClick={() => {getParentRef.current.qtyIncrement()}}>+</button> button in ChildB
      </div>
    </div>   
    );
};

ChildB.displayName = "ChildB";
export default ChildB;