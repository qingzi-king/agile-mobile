import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/tab-bar.less'
import TabBar from './tab-bar'
import Item from './item'
export type { TabBarProps } from './tab-bar'
export type { TabBarItemProps } from './item'

export default attachPropertiesToComponent(TabBar, { Item })
