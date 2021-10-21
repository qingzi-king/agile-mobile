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
      d: "M589.088 790.624L310.464 512l278.624-278.624 45.248 45.248L400.96 512l233.376 233.376z",
      id: "RightOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default RightOutline;
