
export interface SwitchPropsType {
  className?: string;
  style?: object;
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  checkedText?: string;
  uncheckedText?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  checkedBackGround?: string;
  uncheckedBackGround?: string;
  onChange?: (e?: object) => void;
  onClick?: (e?: object) => void;
}