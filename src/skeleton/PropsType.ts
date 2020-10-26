
export interface SkeletonPropsType {
  className?: string;
  style?: object;
  loading?: boolean;
  animate?: boolean;
  title?: boolean;
  avatar?: boolean;
  row?: number;
  rowWidth?: number;
  round?: boolean;
  titleWidth?: string | number;
  avatarSize?: number;
  avatarShape?: 'round' | 'square';
  loops?: number;
  onClick?: () => void;
}