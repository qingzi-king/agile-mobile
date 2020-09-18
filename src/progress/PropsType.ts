
export interface ProgressPropsType {
  className?: string;
  percent?: number; // 进度
  unfilled?: boolean; // 是否显示填充块
  textColor?: string; // 文字颜色
  sliderColor?: string; // 滑块颜色
  inactive?: boolean; // 是否未激活
  info?: boolean; // 显示进度
  sliderWidth?: number; // 滑块宽度
  style?: React.CSSProperties; // 进度条样式
  barStyle?: React.CSSProperties; // 进度样式
}