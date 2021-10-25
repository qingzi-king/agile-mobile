import * as React from "react";

function DownOutline(props: any) {
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
      d: "M512 802.33408092l-466.92627308-466.9262731 75.82792579-75.82792583L512 650.67822927l391.09834729-391.09834728 75.82792579 75.82792583z",
      id: "DownOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default DownOutline;
