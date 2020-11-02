export interface ButtonPropsType {
  type?: 'default' | 'primary' | 'warning' | 'success' | 'danger' | 'link' | 'dark';
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
  loading?: boolean;
}