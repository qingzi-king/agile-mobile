import * as React from "react";

function ForbiddenCircleFill(props: any) {
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
      d: "M714.368 759.616L264.352 309.6c13.536-16.544 28.736-31.68 45.28-45.248l449.984 450.016c-13.536 16.544-28.704 31.68-45.248 45.248M512 64C264.544 64 64 264.576 64 512s200.544 448 448 448c247.424 0 448-200.576 448-448S759.424 64 512 64",
      id: "ForbiddenCircleFill-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default ForbiddenCircleFill;
