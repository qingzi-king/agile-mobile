import * as React from "react";

function InfoFill(props: any) {
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
      d: "M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m32 704h-64v-288h64v288z m-32-400c-25.6 0-48-22.4-48-48s22.4-48 48-48 48 22.4 48 48-22.4 48-48 48z",
      id: "InfoFill-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default InfoFill;
