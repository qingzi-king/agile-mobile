import * as React from "react";

function PlusOutline(props: any) {
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
      d: "M938.343792 485.231766h-390.659949v-390.659949a37.460543 37.460543 0 1 0-74.921086 0v390.659949h-390.65995a37.460543 37.460543 0 1 0 0 74.921086h390.65995v390.65995a37.460543 37.460543 0 1 0 74.921086 0v-390.65995h390.659949a37.460543 37.460543 0 1 0 0-74.921086z",
      id: "PlusOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default PlusOutline;
