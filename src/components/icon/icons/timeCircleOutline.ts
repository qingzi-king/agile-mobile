import * as React from "react";

function TimeOutline(props: any) {
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
      d: "M544 224h-64v288c0 8.832 3.584 16.832 9.376 22.656l192 191.968 45.248-45.248L544 498.752V224z",
      id: "TimeOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    }),
    React.createElement("path", {
      d: "M512 896C300.256 896 128 723.744 128 512S300.256 128 512 128s384 172.256 384 384-172.256 384-384 384m0-832C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64",
      id: "TimeOutline-2",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default TimeOutline;
