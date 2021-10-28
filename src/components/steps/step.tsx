import * as React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-step'
const defaultIcon = <span className={`${prefixCls}-icon-dot`} />

export interface StepProps {
  style?: object
  icon?: React.ReactNode
  title?: string
  description?: string
  _index?: number
  _current?: number
  _status?: string
}

const Step: React.FC<StepProps> = props => {

  const {
    title,
    description,
    icon = defaultIcon,
    _status = 'wait',
    _index = 0,
    _current = 0,
  } = props

  let style = {}
  let currentStatus = _status

  if (_status === 'error' && (_index + 1) === _current) {
    style = {
      ...style,
      '--line-to-next-color': 'var(--fam-color-danger)'
    }
  }

  if (_index < _current) {
    currentStatus = 'finish'
  } else if (_index > _current) {
    currentStatus = 'wait'
  }

  const wrapCls = classnames(prefixCls, `${prefixCls}-status-${currentStatus}`)

  return (
    <div className={wrapCls}>
      <div className={`${prefixCls}-indicator`} style={style}>
        <div className={`${prefixCls}-icon-container`}>{icon ? icon : _index}</div>
      </div>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-title`}>{title}</div>
        {!!description && (
          <div className={`${prefixCls}-description`}>{description}</div>
        )}
      </div>
    </div>
  )
}

export default Step