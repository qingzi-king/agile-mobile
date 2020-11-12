
export interface SearchBarPropsType {
  className?: string;
  style?: object;
  defaultValue?: string | number;
  value?: string | number;
  placeholder?: string;
  cancelColor?: string;
  showCancelButton?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  cancelText?: React.ReactNode;
  onClear?: (e?:any) => void;
  onSubmit?: (e?:any) => void;
  onBlur?: (e?:any) => void;
  onChange?: (e?:any) => void;
  onFocus?: (e?:any) => void;
  onCancel?: (e?:any) => void;
}