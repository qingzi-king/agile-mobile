
export interface NoticeBarPropsType {
  mode?: 'closable' | 'link' | undefined;
  onClick?: () => void;
  icon?: React.ReactElement<any> | null;
  action?: React.ReactElement<any>;
  className?: string;
  multiLine?: boolean;
  animateSpeed?: 'slow' | 'normal' | 'fast' | number
  animateLoop?: boolean
}