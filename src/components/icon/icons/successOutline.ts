import * as React from "react";

function SuccessOutline(props: any) {
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
      d: "M381.648013 814.724a37.481949 37.481949 0 0 1-52.979911 0L78.924013 564.969208a37.460543 37.460543 0 1 1 52.969208-52.979911L381.648013 761.733386a37.492652 37.492652 0 0 1 0 52.990614z",
      id: "SuccessOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    }),
    React.createElement("path", {
      d: "M328.668102 814.724a37.460543 37.460543 0 0 1 0-52.979911l552.478793-552.478792a37.460543 37.460543 0 0 1 52.969208 52.979911L381.648013 814.724a37.481949 37.481949 0 0 1-52.979911 0z",
      id: "SuccessOutline-2",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default SuccessOutline;
