export interface ButtonPropsType {
  type?: 'default' | 'primary' | 'warning' | 'success' | 'danger' | 'link';
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
  loading?: boolean;
}