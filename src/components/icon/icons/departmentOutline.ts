import * as React from "react";

function DepartmentOutline(props: any) {
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
      d: "M79 370.4l342.7 202.2c28.1 16.9 59 25.3 89.9 25.3s61.8-8.4 89.9-25.3l342.7-202.2c19.7-11.2 22.5-42.1 0-56.2L593 89.5c-25.3-16.9-53.4-25.3-81.5-25.3s-56.2 8.4-81.5 25.3L79 314.2c-22.5 14.1-19.6 45 0 56.2z m382-236c14-8.4 30.9-14 50.6-14 19.7 0 36.5 5.6 50.6 14l317.4 205-309 182.6c-19.7 11.2-39.3 16.9-61.8 16.9s-42.1-5.6-61.8-16.9L138 339.5l323-205.1zM76.2 541.7L421.7 758c28.1 16.9 59 25.3 89.9 25.3s61.8-8.4 89.9-25.3L947 541.7c8.4-5.6 14-14 14-22.5 0-22.5-25.3-36.5-42.1-22.5L573.4 713.1c-19.7 11.2-39.3 16.9-61.8 16.9s-42.1-5.6-61.8-16.9L104.3 494c-16.9-14-42.1 0-42.1 22.5 0 11.2 5.6 19.6 14 25.2z m842.7 132L573.4 890c-19.7 11.2-39.3 16.9-61.8 16.9s-42.1-5.6-61.8-16.9L104.3 673.7c-16.9-14-42.1 0-42.1 22.5 0 8.4 5.6 19.7 14 22.5L421.7 935c28.1 16.9 59 25.3 89.9 25.3s61.8-8.4 89.9-25.3L947 718.7c8.4-5.6 14-14 14-22.5 0-22.5-25.3-36.5-42.1-22.5z",
      id: "DepartmentOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default DepartmentOutline;
