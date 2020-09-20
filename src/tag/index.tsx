import classnames from 'classnames';
import * as React from 'react';
import Icon from '../icon';
import { TagPropsType } from './PropsType';

export default class Tag extends React.Component<TagPropsType, any> {
  static defaultProps = {
    onClose() {},
  };

  constructor(props: TagPropsType) {
    super(props);
    this.state = {
      show: true
    };
  }

  onTagClose = () => {
    const { disabled, closeable, onClose } = this.props;
    if (disabled) return false;
    if (closeable) {
      if (onClose) {
        onClose();
      }
      this.setState({ show: false });
    }
  }

  render() {
    const {
      icon,
      children,
      className,
      type = 'primary',
      color,
      textColor,
      round = false,
      closeable = false,
      hairline = false,
      disabled = false,
      size = 'md',
      style = {},
      ...restProps
    } = this.props;

    const prefixCls = 'fam-tag';

    const tagType = disabled ? 'disabled' : type;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-${hairline ? 'hairline' : 'fill'}-${tagType}`]: tagType,
      [`${prefixCls}-round`]: round,
      [`${prefixCls}-${size}`]: size,
    });

    return this.state.show ? (
      <div className={wrapCls} style={style} {...restProps}>
        {
          icon && (
            <div className={`${prefixCls}-icon`}>
              { icon }
            </div>
          )
        }
        { children }
        {
          closeable && (
            <div
              className={`${prefixCls}-icon-close`}
              onClick={this.onTagClose}
            >
              <Icon type="cross" size="xxs" />
            </div>
          )
        }
      </div>
    ) : null;
  }
}