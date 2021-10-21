import * as React from "react";

function ForbiddenOutline(props: any) {
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
      d: "M805.056 759.808L264.192 218.912A382.24 382.24 0 0 1 512 128.032c212.064 0 384 171.872 384 384 0 94.464-34.24 180.896-90.944 247.776M128 512a382.08 382.08 0 0 1 90.944-247.84l540.864 540.896A381.984 381.984 0 0 1 512 896C299.936 896 128 724.064 128 512M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64",
      id: "ForbiddenOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default ForbiddenOutline;
