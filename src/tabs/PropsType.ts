import { Models, PropsType } from 'rmc-tabs';

interface TabsProps extends PropsType {
  /** render for replace the tab of tabbar. */
  renderTab?: (tab: Models.TabData) => React.ReactNode;
  mode?: string;
  activeKey?: string | number;
  onTabClick?: (tab: Models.TabData, index: number) => void;
  tintColor?: string;
}

export default TabsProps;
