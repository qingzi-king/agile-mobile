
export interface StepperPropsType {
  className?: string;
  style?: object;
  readOnly?: boolean;
  disabled?: boolean;
  disablePlus?: boolean;
  disableMinus?: boolean;
  value?: number;
  defaultValue?: number;
  step?: number;
  min?: number | string;
  max?: number | string;
  integer?: boolean;
  onChange?: (e: object) => void;
}