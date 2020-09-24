import React from 'react';
import agileConfig from '../../agile.config';
import ButtonView from '../../src/button/demo/index';
import IconView from '../../src/icon/demo/index';
import ModalView from '../../src/modal/demo/index';
import PopupView from '../../src/popup/demo/index';
import FlexView from '../../src/flex/demo/index';
import ToastView from '../../src/toast/demo/index';
import ProgressView from '../../src/progress/demo/index';
import NavBarView from '../../src/nav-bar/demo/index';
import NoticeBarView from '../../src/notice-bar/demo/index';
import TagView from '../../src/tag/demo/index';
import BadgeView from '../../src/badge/demo/index';
import ListView from '../../src/list/demo/index';
import CollapseView from '../../src/collapse/demo/index';

import { Button } from '../../src/index';

declare var global: any;

const docComponents: any = {
  'button': <ButtonView />,
  'icon': <IconView />,
  'modal': <ModalView />,
  'popup': <PopupView />,
  'flex': <FlexView />,
  'toast': <ToastView />,
  'progress': <ProgressView />,
  'nav-bar': <NavBarView />,
  'notice-bar': <NoticeBarView />,
  'tag': <TagView />,
  'badge': <BadgeView />,
  'list': <ListView />,
  'collapse': <CollapseView />,
};

const BrowseIndex = (props: any) => {

  let realKeys = global.G_SPLIT_URL_PARAMS();
  let defaultSelectedKey = realKeys[1];

  if (defaultSelectedKey === 'home') {
    return <DemoHome {...props} />
  }

  return docComponents[defaultSelectedKey] || <div className="d-empty-tips">暂未匹配相应内容</div>;

};

// 示例主页
const DemoHome = (props: any) => {

  const handleRedirect = (menu: any) => {
    props.history.push(`/m/${menu.key}`);
  }

 return (
    <div>
      <div className="d-demo-home">
        <img src="http://docs.antjob.ink/agile-ui/agile-logo.svg" alt="logo" />
        <div className="d-demo-home__title">{ global.G_SYSTEM_TITLE.welcome.name }</div>
      </div>
      <div className="d-demo-home__describe">{ global.G_SYSTEM_TITLE.welcome.describe }</div>
      {
        agileConfig.navMenus.commponentMenus.map((option: any) => {
          return (
            <div key={option.key} style={{padding:5}}>
              <h2 className="d-demo-block__title">{option.name}</h2>
              {
                option.items.map((item: any) => {
                  return <Button key={item.key} type="default" block disabled={item.disabled} style={{marginBottom:5,border:'1px solid #f3f3f3'}} onClick={() => handleRedirect(item)}>{item.name}</Button>
                })
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default BrowseIndex;