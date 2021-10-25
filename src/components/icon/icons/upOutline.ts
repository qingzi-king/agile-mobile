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
      d: "M903.09834729 764.42011801L512 373.32177073l-391.09834729 391.09834728-75.82792579-75.82792583L512 221.66591908l466.92627308 466.9262731z",
      id: "UpOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default UpOutline;
