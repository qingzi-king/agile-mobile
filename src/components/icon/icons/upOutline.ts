import * as React from "react";

function UpOutline(props: any) {
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
      d: "M745.376 662.624L512 429.248l-233.376 233.376-45.248-45.248L512 338.752l278.624 278.624z",
      id: "UpOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default UpOutline;
