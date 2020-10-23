
export interface CheckBoxGroupPropsType {
  className?: string;
  style?: object;
  values?: any[string | number];
  activeColor?: string;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  maxCheckedCounts?: number;
  children: any[];
  onChange?: (e: object) => void;
}

export interface CheckBoxListPropsType {
  className?: string;
  style?: object;
  values?: string | number;
  selectedValues?: string | number;
  activeColor?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  describe?: React.ReactNode;
}

export interface CheckBoxPropsType {
  className?: string;
  style?: object;
  value?: string | number;
  selectedValues?: any[string | number];
  checked?: boolean; // 仅List模式有效与values不冲突
  shape?: 'round' | 'square';
  activeColor?: string;
  disabled?: boolean;
  transparent?: boolean;
  mode?: 'list';
  onChange?: (e: any) => void;
}