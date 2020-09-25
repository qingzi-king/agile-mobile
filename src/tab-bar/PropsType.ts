
export interface TabBarPropsTypes {
  className?: string;
  style?: object;
  rotate?: boolean;
  selectedColor?: string;
  onClick?: (e: any) => void;
  activeKey?: string;
  barBgColor?: string;
}

export interface TabBarItemPropsTypes {
  key: string | number;
  className?: string;
  style?: object;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  badge?: string | number;
  dot?: boolean;
  onClick?: (e: any) => void;

  selectedColor?: string;
  activeKey?: string;
  fkey?: string;
}