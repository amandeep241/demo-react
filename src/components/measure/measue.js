import React, { useLayoutEffect, useRef, useState } from "react";

function MeasureExample() {
  const [width, setWidth] = useState(0);
  const elementRef = useRef();

  useLayoutEffect(() => {
    // Measure the element's width
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
    }
  }, []); // Runs only once

  return (
    <div>
      <div ref={elementRef} style={{ width: "50%", border: "1px solid black" }}>
        Resizable Element
      </div>
      <p>The width of the element is: {width}px</p>
    </div>
  );
}

export default MeasureExample;
