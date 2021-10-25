import * as React from "react";

function RightOutline(props: any) {
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
      d: "M382.86729462 978.92627308l-75.8279258-75.82792579L698.08408955 512l-391.09834727-391.09834729 75.82792581-75.82792579L849.79356773 512z",
      id: "RightOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default RightOutline;
