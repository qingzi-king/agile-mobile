import React, { useState } from 'react'
import { NumberKeyboard, Button, Icon } from 'agile-mobile'
import './index.less'

const DemoUnit = () => {

  const [values, setValues] = useState<any>([]);

  const keyFormatter = (val: any) => {
    return val === '.' ? 'X' : val;
  }

  const handleChange = (e: any) => {
    console.log('变更：', e);
    setValues([...e.values]);
  }

  const handleDelete = (e: any) => {
    console.log('删除：', e);
    setValues([...e.values]);
  }

  const handleConfirm = (e: any) => {
    console.log('确认：', e);
    setValues([]);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>
      <div className="d-demo-block">
        <Button
          block
          onClick={
            () => NumberKeyboard(
              {
                maxLength: 6,
                maskClosable: false,
                transparent: true,
                onDelete: handleDelete,
                onConfirm: handleConfirm,
                onChange: handleChange
              }
            )
          }
        >唤起键盘</Button>
      </div>
      <h2 className="d-demo-block__title">乱序</h2>
      <div className="d-demo-block">
        <Button
          block
          onClick={
            () => NumberKeyboard(
              {
                disorder: true,
                maskClosable: false,
                header: (
                  <>
                    <img src="http://docs.antjob.ink/agile-ui/icon/safety.svg" style={{width:16}} alt="icon" />
                    安全支付
                  </>
                ),
                onDelete: handleDelete,
                onConfirm: handleConfirm,
                onChange: handleChange
              }
            )
          }
        >唤起键盘</Button>
      </div>
      <h2 className="d-demo-block__title">简洁模式<small>（数字乱序）</small></h2>
      <div className="d-demo-block">
        <Button
          block
          onClick={
            () => NumberKeyboard(
              {
                type: 'simple',
                disorder: true,
                maskClosable: false,
                onDelete: handleDelete,
                onConfirm: handleConfirm,
                onChange: handleChange
              }
            )
          }
        >唤起键盘</Button>
      </div>
      <h2 className="d-demo-block__title">替换值</h2>
      <div className="d-demo-block">
        <Button
          block
          onClick={
            () => NumberKeyboard(
              {
                disorder: true,
                maskClosable: false,
                textRender: keyFormatter,
                onDelete: handleDelete,
                onConfirm: handleConfirm,
                onChange: handleChange
              }
            )
          }
        >唤起键盘</Button>
      </div>
      <h2 className="d-demo-block__title">自定义头部标识<small>（简洁模式、数字乱序）</small></h2>
      <div className="d-demo-block">
        <Button
          block
          onClick={
            () => NumberKeyboard(
              {
                type: 'simple',
                disorder: true,
                maskClosable: false,
                header: (
                  <>
                    <img src="http://docs.antjob.ink/agile-ui/icon/safety.svg" style={{width:16}} alt="icon" />
                    安全支付
                  </>
                ),
                onDelete: handleDelete,
                onConfirm: handleConfirm,
                onChange: handleChange
              }
            )
          }
        >唤起键盘</Button>
      </div>
      <div className="d-demo-example-center">{values.join('')}</div>
    </section>
  );
};

export default DemoUnit;