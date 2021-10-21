import * as React from "react";

function CloseFill(props: any) {
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
      d: "M710.624 665.376l-45.248 45.248L512 557.248l-153.376 153.376-45.248-45.248L466.752 512l-153.376-153.376 45.248-45.248L512 466.752l153.376-153.376 45.248 45.248L557.248 512l153.376 153.376zM512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z",
      id: "CloseFill-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default CloseFill;
