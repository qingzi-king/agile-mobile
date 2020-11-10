import React, { Fragment } from 'react';

import LayoutHOC from '../components/layout';
import MenuUnit from './menu';
import ButtonUnit from './button/index';
import IconUnit from './icon/index';
import ModalUnit from './modal/index';
import PopupUnit from './popup/index';
import FlexUnit from './flex/index';
import ToastUnit from './toast/index';
import ProgressUnit from './progress/index';
import NavBarUnit from './nav-bar/index';
import NoticeBarUnit from './notice-bar/index';
import TagUnit from './tag/index';
import BadgeUnit from './badge/index';
import ListUnit from './list/index';
import CollapseUnit from './collapse/index';
import TabBarUnit from './tab-bar/index';
import TabsUnit from './tabs/index';
import CardUnit from './card/index';
import StepsUnit from './steps/index';
import CarouselUnit from './carousel/index';
import ResultUnit from './result/index';
import RadioUnit from './radio/index';
import CheckBoxUnit from './check-box/index';
import SkeletonUnit from './skeleton/index';
import StickyUnit from './sticky/index';
import ShareSheetUnit from './share-sheet/index';
import StepperUnit from './stepper/index';
import SwitchUnit from './switch/index';
import NumberKeyboardView from './number-keyboard/index';
import PasswordInputUnit from './password-input/index';
import CountDownUnit from './count-down/index';

declare var global: any;
export interface IProps {
  history?: any;
}

const docComponents: any = {
  'button': <ButtonUnit />,
  'icon': <IconUnit />,
  'modal': <ModalUnit />,
  'popup': <PopupUnit />,
  'flex': <FlexUnit />,
  'toast': <ToastUnit />,
  'progress': <ProgressUnit />,
  'nav-bar': <NavBarUnit />,
  'notice-bar': <NoticeBarUnit />,
  'tag': <TagUnit />,
  'badge': <BadgeUnit />,
  'list': <ListUnit />,
  'collapse': <CollapseUnit />,
  'tab-bar': <TabBarUnit />,
  'tabs': <TabsUnit />,
  'card': <CardUnit />,
  'steps': <StepsUnit />,
  'carousel': <CarouselUnit />,
  'result': <ResultUnit />,
  'radio': <RadioUnit />,
  'check-box': <CheckBoxUnit />,
  'skeleton': <SkeletonUnit />,
  'sticky': <StickyUnit />,
  'share-sheet': <ShareSheetUnit />,
  'stepper': <StepperUnit />,
  'switch': <SwitchUnit />,
  'number-keyboard': <NumberKeyboardView />,
  'password-input': <PasswordInputUnit />,
  'count-down': <CountDownUnit />,
}

const Home = (props: any) => {

  let realKeys = global.G_SPLIT_URL_PARAMS();
  let defaultSelectedKey = realKeys[1];

  return (
    <Fragment>
      <div className="d-left-container">
        <MenuUnit {...props} />
      </div>
      <div className="d-center-container">
        { docComponents[defaultSelectedKey] || '持续完善中...' }
      </div>
      <div className="d-phone-simulator">
        <iframe src={`/m/${defaultSelectedKey}`} frameBorder="0" scrolling="auto" title="simulator" ></iframe>
      </div>
    </Fragment>
  );
}

export default LayoutHOC(Home);