
export interface StepPropsType {
  style?: object;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  status?: 'wait' | 'process' | 'finish' | 'error';
  current?: number;
  children: any[];
}

export interface StepsPropsType {
  style?: object;
  className?: string;
  status?: 'wait' | 'process' | 'finish' | 'error';
  icon?: React.ReactNode;
  iconSize?: string;
  title?: string;
  description?: string;
  _index?: number;
}