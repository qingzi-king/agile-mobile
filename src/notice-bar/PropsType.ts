
export interface NoticeBarPropsType {
  mode?: 'closable' | 'link' | undefined;
  onClick?: () => void;
  icon?: React.ReactElement<any> | null;
  action?: React.ReactElement<any>;
  className?: string;
  style?: object;
  multiLine?: boolean;
  animateSpeed?: 'slow' | 'normal' | 'fast' | number
  animateLoop?: boolean
}