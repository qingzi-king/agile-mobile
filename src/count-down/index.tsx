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

const ShareSheet: React.FC<CountDownPropsType> = props => {

  const {
    className,
    childRef,
    autoStart = true,
    // freeStyle = false,
    time = 0,
    format = 'HH:mm:ss',
    millisecond,
    onChange,
    onFinish,
    children
  } = props;

  let reqID: any;
  let nowDate = new Date();
  let nowTimestamp = nowDate.getTime() + time; // 毫秒

  const [endTime, setEndTime] = useState<any>(nowTimestamp); // 结束时间
  const [currentTime, setCurrentTime] = useState<any>(''); // 格式化后的
  const [currentHashTime, setCurrentHashTime] = useState<any>(initTime); // 原始hash形式
  const [isContinue, setIsContinue] = useState(autoStart); // 是否继续执行
  const [remain, setRemain] = useState(time); // 时间差（毫秒）

  useEffect(() => {
    handleTick(time); // 初始化
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

      let nowTimestamp = (new Date()).getTime();
      let endTimestamp = nowTimestamp + remain; // 最近一次时间差，毫秒

      setIsContinue(true);
      setEndTime(endTimestamp);

    },
    pause: () => {
      setIsContinue(false);
    },
    reset: () => {

      let nowTimestamp = (new Date()).getTime();
      let endTimestamp = nowTimestamp + time; // 初始时间差，毫秒
      let remain = Math.max(time, 0);

      setIsContinue(false);
      setEndTime(endTimestamp);
      handleTick(remain);

    }
  }));

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

  if (children) {

    console.log(currentTime);
    

    return (
      <div className={wrapCls} ref={childRef}>
        {}
      </div>
    )

  }

  return (
    <div className={wrapCls} ref={childRef}>
      { currentTime }<br/>
    </div>
  )
}

export default ShareSheet;