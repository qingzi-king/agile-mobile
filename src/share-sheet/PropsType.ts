
import { PopupPropsType } from '../popup/PropsType'

export interface ShareSheetPropsType extends PopupPropsType {
  className?: string;
  style?: object;
  options?: Array<object>;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelText?: string;
  onCancel?: () => void;
  onSelect?: (e: object) => void;
}