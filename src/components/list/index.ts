import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/list.less'
import List from './list'
import Item from './item'

export type { ListProps } from './list'
export type { ListItemProps } from './item'

export default attachPropertiesToComponent(List, { Item })
