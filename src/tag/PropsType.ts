
export interface TagPropsType {
  className?: string;
  icon?: React.ReactElement<any> | null;
  type?: 'primary' | 'warning' | 'danger' | 'success';
  round?: boolean;
  closeable?: boolean;
  size?: 'lg' | 'md' | 'xs';
  color?: string;
  textColor?: string;
  hairline?: boolean;
  disabled?: boolean;
  style?: object;
  onClose?: () => void;
}