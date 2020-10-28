
export interface StickyPropsType {
  className?: string;
  style?: object;
  zIndex?: number;
  offsetTop?: number | string;
  container?: any;
  onScroll?: (e: any) => void;
}