import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/check-box.less'
import CheckBox from './check-box'
import Group from './group'
export type { CheckBoxProps } from './check-box'
export type { CheckBoxGroupProps } from './group'

export default attachPropertiesToComponent(CheckBox, { Group })
