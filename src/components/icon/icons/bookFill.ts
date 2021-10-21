import * as React from "react";

function BookFill(props: any) {
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
      d: "M896 128l0 832-672 0c-53.024 0-96-42.976-96-96s42.976-96 96-96l608 0 0-768-640 0c-70.4 0-128 57.6-128 128l0 768c0 70.4 57.6 128 128 128l768 0 0-896-64 0z",
      id: "BookFill-1",
      fill: "currentColor",
      fillRule: "nonzero"
    }),
    React.createElement("path", {
      d: "M224.064 832l0 0c-0.032 0-0.032 0-0.064 0-17.664 0-32 14.336-32 32s14.336 32 32 32c0.032 0 0.032 0 0.064 0l0 0 607.904 0 0-64-607.904 0z",
      id: "BookFill-2",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default BookFill;
