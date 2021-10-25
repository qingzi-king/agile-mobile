import * as React from "react";

function EllipsisOutline(props: any) {
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
      d: "M158.83377778 609.09037037c-53.62179792 0-97.09037037-43.46857245-97.09037037-97.09037037s43.46857245-97.09037037 97.09037037-97.09037037 97.09037037 43.46857245 97.09037037 97.09037037-43.46857245 97.09037037-97.09037037 97.09037037z m353.16622222 0c-53.62179792 0-97.09037037-43.46857245-97.09037037-97.09037037s43.46857245-97.09037037 97.09037037-97.09037037 97.09037037 43.46857245 97.09037037 97.09037037-43.46857245 97.09037037-97.09037037 97.09037037z m353.16622222 0c-53.62179792 0-97.09037037-43.46857245-97.09037037-97.09037037s43.46857245-97.09037037 97.09037037-97.09037037 97.09037037 43.46857245 97.09037037 97.09037037-43.46857245 97.09037037-97.09037037 97.09037037z",
      id: "EllipsisOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default EllipsisOutline;
