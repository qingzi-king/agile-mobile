import React, { useState, useEffect, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { CountDownPropsType } from './PropsType';
import { padZero } from '../utils/format/string';

const prefixCls = 'fam-count-down';

export type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const initTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
}

const initTimeFormat = {
  days: {
    isExist: false,
    separator: '',
  },
  hours: {
    isExist: false,
    separator: '',
  },
  minutes: {
    isExist: false,
    separator: '',
  },
  seconds: {
    isExist: false,
    separator: '',
  },
  milliseconds: {
    isExist: false,
    separator: '',
  }
}

const ShareSheet: React.FC<CountDownPropsType> = props => {

  const {
    className,
    childRef,
    autoStart = true,
    freeStyle = false,
    time = 0,
    format = 'HH:mm:ss',
    millisecond,
    onChange,
    onFinish
  } = props;

  let reqID: any;
  let nowDate = new Date();
  let nowTimestamp = nowDate.getTime() + time; // 毫秒

  const [timeFormat, setTimeFormat] = useState<any>(initTimeFormat); // 结束时间
  const [endTime, setEndTime] = useState<any>(nowTimestamp); // 结束时间
  const [currentTime, setCurrentTime] = useState<any>(''); // 格式化后的时间
  const [currentHashTime, setCurrentHashTime] = useState<any>(initTime); // hash形式
  const [isContinue, setIsContinue] = useState(autoStart); // 是否继续执行
  const [remain, setRemain] = useState(time); // 时间差（毫秒）

  // 初始化
  useEffect(() => {
    handleTick(time);
    handleFormat(format);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isContinue) {
      handleTime();
    }
    // eslint-disable-next-line
  }, [isContinue])

  useEffect(() => {

    handleTime();

    // 卸载时取消渲染
    return () => window.cancelAnimationFrame(reqID);

    // eslint-disable-next-line
  }, [currentHashTime])

  const wrapCls = classnames(prefixCls, className);

  useImperativeHandle(childRef, () => ({
    start: () => {

      setIsContinue(true);
      handleSetRealEndTime(remain); // 最近一次时间差，毫秒

    },
    pause: () => {
      setIsContinue(false);
    },
    reset: () => {

      let currentRemain = Math.max(time, 0);

      setIsContinue(false);
      handleSetRealEndTime(time); // 初始时间差，毫秒
      handleTick(currentRemain);

    }
  }));

  // 拆分格式
  const handleFormat = (_format: string) => {

    let Obj = {
      days: {
        isExist: _format.includes('DD'),
        separator: handleSeparator(_format, 'DD','HH'),
      },
      hours: {
        isExist: _format.includes('HH'),
        separator: handleSeparator(_format, 'HH', 'mm'),
      },
      minutes: {
        isExist: _format.includes('mm'),
        separator: handleSeparator(_format, 'mm','ss'),
      },
      seconds: {
        isExist: _format.includes('ss'),
        separator: handleSeparator(_format, 'ss','SS'),
      },
      milliseconds: {
        isExist: _format.includes('SS'), // 至少2个字符
        separator: '',
      },
    };

    setTimeFormat(Obj);

  }

  // 提取分隔符
  const handleSeparator = (_format: string, firstStr: string, secondStr: string) => {

    if (!_format || !firstStr || !secondStr) return '';

    let firstStrIndex = _format.indexOf(firstStr) + firstStr.length;
    let secondStrIndex = _format.indexOf(secondStr);

    if (secondStrIndex <= firstStrIndex ) return '';

    return _format.substring(firstStrIndex, secondStrIndex);

  }

  // 设置真实的结束时间戳
  const handleSetRealEndTime = (_time = 0) => {
    let endTimestamp = (new Date()).getTime() + _time; // 初始时间差，毫秒
    setEndTime(endTimestamp);
  }

  // 拆分解析时间
  const parseTimeData = (_time: number) => {
    const days = Math.floor(_time / DAY);
    const hours = Math.floor((_time % DAY) / HOUR);
    const minutes = Math.floor((_time % HOUR) / MINUTE);
    const seconds = Math.floor((_time % MINUTE) / SECOND);
    const milliseconds = millisecond ? Math.floor(_time % SECOND) : 0; // 是否更新毫秒

    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }

  // 时间格式化
  const parseFormat = (_format: string, _parseTime: TimeData) => {
    const { days } = _parseTime;
    let { hours, minutes, seconds, milliseconds } = _parseTime;

    if (_format.indexOf('DD') === -1) {
      hours += days * 24;
    } else {
      _format = _format.replace('DD', padZero(days));
    }

    if (_format.indexOf('HH') === -1) {
      minutes += hours * 60;
    } else {
      _format = _format.replace('HH', padZero(hours));
    }
  
    if (_format.indexOf('mm') === -1) {
      seconds += minutes * 60;
    } else {
      _format = _format.replace('mm', padZero(minutes));
    }
  
    if (_format.indexOf('ss') === -1) {
      milliseconds += seconds * 1000;
    } else {
      _format = _format.replace('ss', padZero(seconds));
    }
  
    if (_format.indexOf('S') !== -1) {
      const ms = padZero(milliseconds, 3);
  
      if (_format.indexOf('SSS') !== -1) {
        _format = _format.replace('SSS', ms);
      } else if (_format.indexOf('SS') !== -1) {
        _format = _format.replace('SS', ms.slice(0, 2));
      } else {
        _format = _format.replace('S', ms.charAt(0));
      }
    }
  
    return _format;
  }

  const handleTime = () => {

    if (!isContinue) {

      if (onFinish) onFinish(time);

      return;

    }

    let nowDate = (new Date()).getTime();

    let remain = Math.max(endTime - nowDate, 0);

    // requestAnimationFrame 是关键，否则useEffect直接检测依赖值更新会导致内存泄漏风险
    reqID = window.requestAnimationFrame(() => handleTick(remain));

  }

  const handleTick = (remain: number) => {

    let timeData = parseTimeData(remain);

    let formatTime = parseFormat(format, timeData);

    setCurrentTime(formatTime);
    setCurrentHashTime(timeData);
    setRemain(remain);

    if (onChange) {
      onChange(timeData);
    }

    if (remain <= 0) {
      setIsContinue(false);
    }

  }

  if (freeStyle) {

    return (
      <div className={wrapCls} ref={childRef}>
        {
          timeFormat.days.isExist && <span className={`${prefixCls}-block`}>{padZero(currentHashTime.days)}</span>
        }
        {
          timeFormat.days.isExist && timeFormat.hours.isExist && <span className={`${prefixCls}-colon`}>{timeFormat.days.separator}</span>
        }
        {
          timeFormat.hours.isExist && <span className={`${prefixCls}-block`}>{padZero(currentHashTime.hours)}</span>
        }
        {
          timeFormat.hours.isExist && timeFormat.minutes.isExist && <span className={`${prefixCls}-colon`}>{timeFormat.hours.separator}</span>
        }
        {
          timeFormat.minutes.isExist && <span className={`${prefixCls}-block`}>{padZero(currentHashTime.minutes)}</span>
        }
        {
          timeFormat.minutes.isExist && timeFormat.seconds.isExist && <span className={`${prefixCls}-colon`}>{timeFormat.minutes.separator}</span>
        }
        {
          timeFormat.seconds.isExist && <span className={`${prefixCls}-block`}>{padZero(currentHashTime.seconds)}</span>
        }
        {
          timeFormat.seconds.isExist && timeFormat.milliseconds.isExist && <span className={`${prefixCls}-colon`}>{timeFormat.seconds.separator}</span>
        }
        {
          timeFormat.milliseconds.isExist && <span className={`${prefixCls}-block`}>{padZero(currentHashTime.milliseconds, 3)}</span>
        }
      </div>
    )

  }

  return (
    <div className={wrapCls} ref={childRef}>
      { currentTime }
    </div>
  )
}

export default ShareSheet;