import * as React from "react";

function CloseOutline(props: any) {
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
      d: "M223.072183 854.346552a37.481949 37.481949 0 0 1-52.979911 0 37.481949 37.481949 0 0 1 0-52.979911l628.159792-628.159793a37.460543 37.460543 0 0 1 52.969208 52.979911l-628.149089 628.159793z",
      id: "CloseOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    }),
    React.createElement("path", {
      d: "M170.092272 226.186759a37.460543 37.460543 0 1 1 52.979911-52.979911l628.149089 628.159793a37.460543 37.460543 0 1 1-52.969208 52.979911l-628.159792-628.159793z",
      id: "CloseOutline-2",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default CloseOutline;
