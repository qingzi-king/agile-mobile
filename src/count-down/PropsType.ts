
export interface CountDownPropsType {
  className?: string;
  style?: object;
  time?: number;
  format?: string;
  millisecond?: boolean;
  autoStart?: boolean;
  freeStyle?: boolean;
  childRef?: any;
  start?: (e?: any) => void;
  pause?: (e?: any) => void;
  reset?: (e?: any) => void;
  onChange?: (e?: any) => void;
  onFinish?: (e?: any) => void;
}