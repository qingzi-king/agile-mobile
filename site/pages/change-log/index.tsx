import React, { Fragment } from 'react';
import LayoutHOC from '../../components/layout';
import MarkdownView from '../../components/markdownView';
import MenuUnit from '../menu';
import './common.less';

const markdownDoc = require('../../../CHANGELOG.zh-CN.md');

const LogContent = (props: any) => {
  const content = { __html: markdownDoc };
  return (
    <Fragment>
      <div className="d-left-container">
        <MenuUnit {...props} />
      </div>
      <div className="d-center-container d-changelog">
        <MarkdownView content={content} />
      </div>
    </Fragment>
  );
}

export default LayoutHOC(LogContent);