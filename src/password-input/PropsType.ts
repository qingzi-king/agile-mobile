import { NumberKeyboardPropsType } from '../number-keyboard/PropsType'

export interface PasswordInputPropsType extends NumberKeyboardPropsType {
  className?: string;
  defaultValues?: Array<number | string>;
  maxLength?: number;
  gutter?: string | number;
  mask?: boolean;
  focused?: boolean;
  autofocus?: boolean;
  autoClose?: boolean;
  closable?: boolean;
  underline?: boolean;
  onClose?: () => void;
}