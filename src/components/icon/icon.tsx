/**
 * TODO：图标独立维护
 */
import * as React from 'react'
import classnames from 'classnames'

import AbnormalIcon from '../../assets/abnormal.svg'
import AddIcon from '../../assets/add.svg'
import ArrowDownIcon from '../../assets/arrow_down.svg'
import ArrowLeftIcon from '../../assets/arrow_left.svg'
import ArrowRightIcon from '../../assets/arrow_right.svg'
import ArrowUpIcon from '../../assets/arrow_up.svg'
import CheckIcon from '../../assets/check.svg'
import CheckFilledIcon from '../../assets/check_filled.svg'
import CircleIcon from '../../assets/circle.svg'
import CloseIcon from '../../assets/close.svg'
import CloseFilledIcon from '../../assets/close_filled.svg'
import DefaultIcon from '../../assets/default.svg'
import DepartmentIcon from '../../assets/department.svg'
import DisconnectedIcon from '../../assets/disconnected.svg'
import EllipsisIcon from '../../assets/ellipsis.svg'
import Empty2Icon from '../../assets/empty2.svg'
import Empty1Icon from '../../assets/empty1.svg'
import ForbiddenIcon from '../../assets/forbidden.svg'
import ForbiddenFilledIcon from '../../assets/forbidden_filled.svg'
import HomeIcon from '../../assets/home.svg'
import InfoIcon from '../../assets/info.svg'
import InfoFilledIcon from '../../assets/info_filled.svg'
import LikeIcon from '../../assets/like.svg'
import LikeFilledIcon from '../../assets/like_filled.svg'
import LoadingIcon from '../../assets/loading.svg'
import NoticeIcon from '../../assets/notice.svg'
import OfflineIcon from '../../assets/offline.svg'
import PageTurningLeftIcon from '../../assets/page_turning_left.svg'
import PersonIcon from '../../assets/person.svg'
import ReduceIcon from '../../assets/reduce.svg'
import RefreshIcon from '../../assets/refresh.svg'
import SearchIcon from '../../assets/search.svg'
import SelectorCheckMarkIcon from '../../assets/selector_check_mark.svg'
import SettingIcon from '../../assets/setting.svg'
import ShowLessIcon from '../../assets/show_less.svg'
import ShowMoreIcon from '../../assets/show_more.svg'
import SliderIcon from '../../assets/slider_thumb.svg'
import SpinIcon from '../../assets/spin.svg'
import StarIcon from '../../assets/star.svg'
import StarFilledIcon from '../../assets/star_filled.svg'
import SuccessIcon from '../../assets/success.svg'
import TimeIcon from '../../assets/time.svg'

const typeHash: any = {
  abnormal: AbnormalIcon,
  add: AddIcon,
  arrow_down: ArrowDownIcon,
  arrow_left: ArrowLeftIcon,
  arrow_right: ArrowRightIcon,
  arrow_up: ArrowUpIcon,
  check: CheckIcon,
  check_filled: CheckFilledIcon,
  circle: CircleIcon,
  close: CloseIcon,
  close_filled: CloseFilledIcon,
  default: DefaultIcon,
  department: DepartmentIcon,
  disconnected: DisconnectedIcon,
  ellipsis: EllipsisIcon,
  empty2: Empty2Icon,
  empty1: Empty1Icon,
  forbidden: ForbiddenIcon,
  forbidden_filled: ForbiddenFilledIcon,
  home: HomeIcon,
  info: InfoIcon,
  info_filled: InfoFilledIcon,
  like: LikeIcon,
  like_filled: LikeFilledIcon,
  loading: LoadingIcon,
  notice: NoticeIcon,
  offline: OfflineIcon,
  page_turning_left: PageTurningLeftIcon,
  person: PersonIcon,
  reduce: ReduceIcon,
  refresh: RefreshIcon,
  search: SearchIcon,
  selector_check_mark: SelectorCheckMarkIcon,
  setting: SettingIcon,
  show_less: ShowLessIcon,
  show_more: ShowMoreIcon,
  slider_thumb: SliderIcon,
  spin: SpinIcon,
  star: StarIcon,
  star_filled: StarFilledIcon,
  success: SuccessIcon,
  time: TimeIcon,
}

export interface IconProps {
  prefixCls?: string
  className?: string
  type: 
    'abnormal' |
    'add' |
    'arrow_down' |
    'arrow_left' |
    'arrow_right' |
    'arrow_up' |
    'check' |
    'check_filled' |
    'circle' |
    'close' |
    'close_filled' |
    'default' |
    'department' |
    'disconnected' |
    'ellipsis' |
    'empty2' |
    'empty1' |
    'forbidden' |
    'forbidden_filled' |
    'home' |
    'info' |
    'info_filled' |
    'like' |
    'like_filled' |
    'loading' |
    'notice' |
    'offline' |
    'page_turning_left' |
    'person' |
    'reduce' |
    'refresh' |
    'search' |
    'selector_check_mark' |
    'setting' |
    'show_less' |
    'show_more' |
    'slider_thumb' |
    'spin' |
    'star' |
    'star_filled' |
    'success' |
    'time' |
    string
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | string
  color?: string
  style?: React.CSSProperties
}

export default (props: IconProps) => {
  const {
    type,
    className,
    color,
    style,
    size = 'md',
    ...restProps
  } = props;

  const wrapCls = classnames(
    className,
    'fam-icon',
    `fam-icon-${type}`,
    {
      [`fam-icon-${size}`]: size
    }
  );

  let newStyles: React.CSSProperties = { ...style };

  if (color) {
    newStyles.color = color;
  }

  if (typeof size === 'number') {
    newStyles.fontSize = size;
  }

  return (
    <img src={typeHash[type]} className={wrapCls} style={newStyles} {...(restProps as any)} />
  );
};