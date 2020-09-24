
const ENV = process.env.NODE_ENV;

if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  // tslint:disable-next-line:no-console
  console.warn(
    'You are using a whole package of agile-mobile, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Button } from './button/index';
export { default as Icon } from './icon/index';
export { default as Modal } from './modal/index';
export { default as Popup } from './popup/index';
export { default as Flex } from './flex/index';
export { default as Toast } from './toast/index';
export { default as Progress } from './progress/index';
export { default as NavBar } from './nav-bar/index';
export { default as NoticeBar } from './notice-bar/index';
export { default as Tag } from './tag/index';
export { default as Badge } from './badge/index';
export { default as List } from './list/index';
export { default as Collapse } from './collapse/index';