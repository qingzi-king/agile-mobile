import './global.less'
import { isDom } from '../utils/is-dom'

if (isDom) {
  document.addEventListener('touchstart', () => {}, true)
}
