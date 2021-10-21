import * as React from "react";

function EllipsisOutline(props: any) {
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
      d: "M221 592c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z",
      id: "EllipsisOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default EllipsisOutline;
