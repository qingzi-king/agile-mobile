
export interface ResultPropsType {
  className?: string;
  style?: object;
  imgUrl?: string;
  imgType?: string;
  img?: React.ReactElement<any> | null;
  title?: React.ReactNode;
  message?: React.ReactNode;
  expandNode?: React.ReactNode;
  empty?: boolean;
  onClick?: () => void;
}