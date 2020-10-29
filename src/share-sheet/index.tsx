import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Popup, Button, Icon } from '../index';
import { ShareSheetPropsType } from './PropsType';

const prefixCls = 'fam-share-sheet';

const ShareSheet = (props: ShareSheetPropsType) => {

  const {
    className,
    title,
    description,
    options = [],
    cancelText = '取消',
    onCancel,
    onSelect,
    ...restProps
  } = props;

  let res: any;

  const handleClose = () => {

    if (res) {
      res.close();
      res = '';
    }

    if (onCancel) onCancel();

  }

  const handleSelect = (option: object) => {

    if (onSelect) onSelect(option);

    handleClose();

  }

  const wrapCls = classnames(prefixCls, className);

  res = Popup({
    ...restProps,
    children: (
      <div className={wrapCls}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          <span className={`${prefixCls}-description`}>{description}</span>
        </div>
        {
          options[0] && options[0] instanceof Array ?
          <Fragment>
            {
              options.map((subOptions: any, index) => {
                return <div key={index} className={`${prefixCls}-options`}>
                {
                  subOptions.map((option: any, i: any) => {
                    return (
                      <div key={i} className={`${prefixCls}-option`} onClick={() => handleSelect(option)}>
                        {
                          option.src ?
                            <img src={option.src} className={`${prefixCls}-icon`} alt="icon" />
                          :
                            <Icon type={option.icon} className={`${prefixCls}-icon`} />
                        }
                        <span className={`${prefixCls}-name`}>{option.name}</span>
                      </div>
                    )
                  })
                }
              </div>
              })
            }
            </Fragment>
          :
            <div className={`${prefixCls}-options`}>
              {
                options.map((option: any, i) => {
                  return (
                    <div key={i} className={`${prefixCls}-option`} onClick={() => handleSelect(option)}>
                      {
                        option.src ?
                          <img src={option.src} className={`${prefixCls}-icon`} alt="icon" />
                        :
                          <Icon type={option.icon} className={`${prefixCls}-icon`} />
                      }
                      <span className={`${prefixCls}-name`}>{option.name}</span>
                    </div>
                  )
                })
              }
            </div>
        }
        <div className={`${prefixCls}-footer`}>
          <Button block onClick={handleClose}>{cancelText}</Button>
        </div>
      </div>
    ),
  });

  return {}
}

export default ShareSheet;