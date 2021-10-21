import * as React from "react";

function ReduceOutline(props: any) {
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
      d: "M975.804336 522.692309a37.460543 37.460543 0 0 1-37.460544 37.460543h-856.240985a37.460543 37.460543 0 1 1 0-74.921086h856.240985a37.460543 37.460543 0 0 1 37.460544 37.460543z",
      id: "ReduceOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default ReduceOutline;
