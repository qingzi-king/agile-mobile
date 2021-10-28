import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/radio.less'
import Radio from './radio'
import Group from './group'
export type { RadioProps } from './radio'
export type { RadioGroupProps } from './group'

export default attachPropertiesToComponent(Radio, { Group })
