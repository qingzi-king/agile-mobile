import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/steps.less'
import Steps from './steps'
import Step from './step'
export type { StepsProps } from './steps'
export type { StepProps } from './step'

export default attachPropertiesToComponent(Steps, { Step })
