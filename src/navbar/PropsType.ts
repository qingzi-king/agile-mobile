
export interface NavBarPropsType {
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onLeftClick?: React.MouseEventHandler<HTMLDivElement>;
  mode?: 'dark' | 'light';
  title?: React.ReactNode;
  fixed?: boolean;
  placeholder?: boolean;
  zIndex?: number;
}