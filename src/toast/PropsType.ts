export interface ToastProps {
  content: React.ReactNode;
  duration?: number;
  position?: any;
  onClose?: () => void;
  mask?: boolean;
  icon?: React.ReactNode;
};

export interface IToastConfig {
  duration: number;
  mask: boolean;
  position: string;
}