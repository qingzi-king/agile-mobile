import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/collapse.less'
import Collapse from './collapse'
import Panel from './panel'
export type { CollapseProps } from './collapse'
export type { CollapseItemProps } from './panel'

export default attachPropertiesToComponent(Collapse, { Panel })
