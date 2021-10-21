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
      d: "M434.944 790.624l-45.248-45.248L623.04 512l-233.376-233.376 45.248-45.248L713.568 512z",
      id: "RightOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default RightOutline;
