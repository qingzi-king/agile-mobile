import * as React from "react";

function InfoCircleOutline(props: any) {
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
      d: "M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64",
      id: "InfoCircleOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    }),
    React.createElement("path", {
      d: "M480 768h64v-288h-64zM512 272a48 48 0 1 0 0 96 48 48 0 0 0 0-96",
      id: "InfoCircleOutline-2",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default InfoCircleOutline;
