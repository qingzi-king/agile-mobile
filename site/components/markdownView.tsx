import React, { useEffect } from 'react';
import hljs from 'highlight.js';

const MarkdownView = (props: any) => {

  useEffect(() => {
    highlightCallBack();
  }, []);

  const highlightCallBack = () => {
    document.querySelectorAll("pre code").forEach((block: any) => {
      try {
        hljs.highlightBlock(block);
      } catch(e) {
        console.log(e);
      }
    });
  };

  return (
    <div className="d-doc-container">
      <section>
        <div dangerouslySetInnerHTML={props.content}></div>
      </section>
    </div>
  )
};

export default MarkdownView;