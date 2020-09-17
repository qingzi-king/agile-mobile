import React, { Component } from 'react';
import { Menu } from 'antd';
import agileConfig from '../../agile.config';

declare var global: any;
export interface IProps {
  history?: any;
}
declare module 'react' {
  interface HTMLProps<T> {
    linkpath?:string;
 }
}

class MenuUnit extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  handleMenu = (e: any) => {
    const { key } = e;
    
    if (key) {
      if (['quick-start', 'change-log'].includes(key)) {
        this.props.history.push(`/${key}`);
      } else {
        this.props.history.push(`/components/${key}`);
      }
    }

  }
  render() {

    let realKeys = global.G_SPLIT_URL_PARAMS();
    let defaultSelectedKey = realKeys.length > 1 ? realKeys[1] : realKeys[0];

    return (
      <div>
        <Menu
          onClick={this.handleMenu}
          selectedKeys={defaultSelectedKey}
          mode="inline"
        >
          {
            agileConfig.navMenus.commonMenus.map((option: any) => {
              return (
                <Menu.ItemGroup key={option.key} title={option.name}>
                  {
                    option.items.map((item: any) => {
                      return <Menu.Item key={item.key} disabled={item.disabled}>{item.name}</Menu.Item>
                    })
                  }
                </Menu.ItemGroup>
              )
            })
          }
          {
            agileConfig.navMenus.commponentMenus.map((option: any) => {
              return (
                <Menu.ItemGroup key={option.key} title={option.name}>
                  {
                    option.items.map((item: any) => {
                      return <Menu.Item key={item.key} disabled={item.disabled}>{item.name}</Menu.Item>
                    })
                  }
                </Menu.ItemGroup>
              )
            })
          }
        </Menu>
      </div>
    );
  }
}

export default MenuUnit;