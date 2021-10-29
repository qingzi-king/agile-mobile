import React, { Fragment } from 'react'
import classnames from 'classnames'
import Popup from '../popup'
import Icon from '../icon'
import Button from '../button'
import { PopupProps } from '../popup'

const prefixCls = 'fam-share-sheet'

export interface ShareSheetProps extends PopupProps {
  className?: string
  style?: object
  options?: Array<object>
  title?: React.ReactNode
  description?: React.ReactNode
  cancelText?: string
  onCancel?: () => void
  onSelect?: (e: object) => void
}

const ShareSheet = (props: ShareSheetProps) => {

  const {
    className,
    title,
    description,
    options = [],
    cancelText = '取消',
    onCancel,
    onSelect,
    ...restProps
  } = props

  let res: any

  const handleClose = () => {

    if (res) {
      res.close()
      res = ''
    }

    if (onCancel) onCancel()

  }

  const handleSelect = (option: object) => {

    if (onSelect) onSelect(option)

    handleClose()

  }

  const wrapCls = classnames(prefixCls, className)

  const style: any = {
    '--border-color': 'transparent'
  }

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
                            <span className={`${prefixCls}-icon`}>{option.icon}</span>
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
                          <span className={`${prefixCls}-icon`}>{option.icon}</span>
                      }
                      <span className={`${prefixCls}-name`}>{option.name}</span>
                    </div>
                  )
                })
              }
            </div>
        }
        <div className={`${prefixCls}-footer`}>
          <Button block onClick={handleClose} style={style}>{cancelText}</Button>
        </div>
      </div>
    ),
  })

  return {}
}

export default ShareSheet