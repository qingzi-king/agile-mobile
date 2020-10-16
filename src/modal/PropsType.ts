
export interface AlertPropsType {
  type?: string;
  color?: string;
  title?: string;
  message?: string;
  transparent?: boolean;
  maskClosable?: boolean;
  animation?: boolean;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  actions?: Array<any>
}

export interface OperationPropsType {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  actions?: Array<any>
  transparent?: boolean;
  maskClosable?: boolean;
  animation?: boolean;
}