
export interface RadioPropsType {
  className?: string;
  style?: object;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: object) => void;
}

export interface RadioGroupPropsType {
  className?: string;
  style?: object;
  value?: string | number;
  onChange?: (e: object) => void;
}