
export interface ListPropsTypes {
  className?: string;
  renderHeader?: (() => React.ReactNode) | React.ReactNode
  renderFooter?: (() => React.ReactNode) | React.ReactNode
  style?: object
}

export interface ListItemPropsTypes {
  className?: string;
  extra?: React.ReactNode;
  describe?: React.ReactNode;
  disabled?: boolean;
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | '';
  wrap?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  thumb?: React.ReactNode | null;
}

export interface BriefPropsTypes {
  wrap?: boolean
}
