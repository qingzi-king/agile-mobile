import * as React from "react";

function TurnLeftFill(props: any) {
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
      d: "M726.50615507 941.01231019l-429.01231014-429.01231019 429.01231014-429.01231019z",
      id: "TurnLeftFill-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default TurnLeftFill;
