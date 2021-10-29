import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './styles/dialog.less'
import Dialog from './dialog'
import alert from './alert'
import operation from './operation'

export type { AlertProps } from './alert'
export type { OperationProps } from './operation'

export default attachPropertiesToComponent(Dialog, { operation, alert })
