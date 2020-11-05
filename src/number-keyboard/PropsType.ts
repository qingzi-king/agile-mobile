
export interface NumberKeyboardPropsType {
  className?: string;
  style?: object;
  type?: 'professional' | 'simple';
  defaultValues?: Array<number | string>;
  disorder?: boolean;
  isHideConfirm?: boolean;
  okText?: string;
  header?: React.ReactNode;
  maxLength?: number;
  textRender?: (e?: any) => void;
  onDelete?: (e?: any) => void;
  onConfirm?: (e?: any) => void;
  onChange?: (e?: any) => void;
  maskClosable?: boolean;
  overlay?: boolean;
  transparent?: boolean;
}