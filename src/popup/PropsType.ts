export interface PopupPropsType {
  prefixCls?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  maskClosable?: boolean;
  closable?: boolean;
  overlay?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  radius?: any;
  onClose?: (e?: any) => void;
}