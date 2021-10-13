import React, { Fragment, useState } from 'react';
import { NumberKeyboard, Button } from '../../index';
import '../style/index.less';

const Demo = () => {

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
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">NumberKeyboard</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <Button
            type="default"
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
            type="default"
            block
            onClick={
              () => NumberKeyboard(
                {
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
        <h2 className="d-demo-block__title">简洁模式<small>（数字乱序）</small></h2>
        <div className="d-demo-block">
          <Button
            type="default"
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
            type="default"
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
            type="default"
            block
            onClick={
              () => NumberKeyboard(
                {
                  type: 'simple',
                  disorder: true,
                  maskClosable: false,
                  header: (
                    <Fragment>
                      <img src="http://docs.antjob.ink/agile-ui/icon/safety.svg" style={{width:16}} alt="icon" />
                      安全支付
                    </Fragment>
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
    </div>
  );
};

export default Demo;