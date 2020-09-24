
export interface CollapsePropsTypes {
  className?: string;
  style?: object;
  accordion?: boolean;
  bordered?: boolean;
  onChange?: (e: any) => void;
  activeKeys?: Array<number | string>;
  defaultActiveKey?: Array<number | string> | string | number;
  expandIcon?: React.ReactNode;
}

export interface CollapseItemPropsTypes {
  className?: string;
  style?: object;
  key?: number | string;
  fkey?: number | string;
  title: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;
  showArrow?: boolean;
  callback?: () => void;
  activeKeys?: Array<number | string>;
  accordion?: boolean;
}