import React from 'react';
import MarkdownView from '../../components/markdownView';

const markdownDoc = require('../../../src/search-bar/README.md');

export default (props: any) => {
  const content = { __html: markdownDoc };
  return (
    <MarkdownView content={content} />
  );
};