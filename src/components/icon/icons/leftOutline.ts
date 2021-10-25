import * as React from "react";

function LeftOutline(props: any) {
  return React.createElement("svg", Object.assign({
        width: "1em",
        height: "1em",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
      },
      props, {
        style: Object.assign({
          verticalAlign: '-0.125em'
        }, props.style),
        className: ['agile-mobile-icon', props.className].filter(Boolean).join(' ')
      }),
    React.createElement("path", {
      d: "M641.18633191 978.92627308L174.26005882 512l466.92627309-466.92627308 75.82792581 75.82792579L325.91591045 512l391.09834727 391.09834729z",
      id: "LeftOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default LeftOutline;
