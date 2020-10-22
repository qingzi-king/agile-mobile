export interface RadioPropsType {
  className?: string;
  style?: object;
  value?: string | number;
  selectedValue?: string | number;
  checked?: boolean; // 仅List模式有效与value不冲突
  activeColor?: string;
  disabled?: boolean;
  transparent?: boolean;
  mode?: 'list';
  onChange?: (e: any) => void;
}

export interface RadioGroupPropsType {
  className?: string;
  style?: object;
  value?: string | number;
  activeColor?: string;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  children: any[];
  onChange?: (e: object) => void;
}

export interface RadioListPropsType {
  className?: string;
  style?: object;
  value?: string | number;
  selectedValue?: string | number;
  activeColor?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  describe?: React.ReactNode;
}