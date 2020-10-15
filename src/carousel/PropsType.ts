
export interface CarouselPropsType {
  className?: string;
  style?: object;
  axis?: 'x' | 'y';
  autoplay?: boolean;
  duration?: number;
  activeIndex?: number;
  speed?: number;
  loop?: boolean;
  indicator?: boolean;
  indicatorDirection?: string;
  children: any[];
  afterChange?: (e:object) => void;
}