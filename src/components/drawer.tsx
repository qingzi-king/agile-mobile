import React, { Component, useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';

const Home = (props: any) => {

  const { title, isVisible, width, children, callbackParent } = props;

  const [visible, setVisible] = useState(isVisible);

  const onClose = () => {
    setVisible(false);

    if (callbackParent) callbackParent();

  };

  useEffect(() => {
    setVisible(isVisible);
  })

  return (
    <>
      <Drawer
        width={ width || '60%' }
        title={ title }
        placement="right"
        onClose={ onClose }
        visible={ visible }
      >
        { children }
      </Drawer>
    </>
  );
};

export default Home;