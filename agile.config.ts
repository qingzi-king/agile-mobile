export default {
  name: 'agile',
  navMenus: {
    commonMenus: [
      {
        key: "g0",
        name: "开发指南",
        items: [
          {
            key: "quick-start",
            alias: "",
            name: "快速上手",
            linkpath: "/quick-start",
            disabled: false,
          },
          {
            key: "change-log",
            alias: "",
            name: "更新日志",
            linkpath: "/change-log",
            disabled: false,
          }
        ]
      }
    ],
    commponentMenus:   [
      {
        key: "g1",
        name: "基础",
        items: [
          {
            key: "button",
            name: "Button 按钮",
            disabled: false,
          },
          {
            key: "icon",
            name: "Icon 图标",
            disabled: false,
          },
          {
            key: "flex",
            name: "Flex 栅格",
            disabled: false,
          }
        ]
      },
      {
        key: "g2",
        name: "反馈",
        items: [
          // {
          //   key: "action-sheet",
          //   name: "ActionSheet 动作面板",
          //   disabled: true,
          // },
          // {
          //   key: "activity-indicator",
          //   name: "ActivityIndicator 活动指示器",
          //   disabled: true,
          // },
          {
            key: "modal",
            name: "Modal 对话框",
            disabled: false,
          },
          {
            key: "popup",
            name: "Popup 弹出层",
            disabled: false,
          },
          {
            key: "progress",
            name: "Progress 进度条",
            disabled: false,
          },
          {
            key: "toast",
            name: "Toast 轻提示",
            disabled: false,
          }
        ]
      },
      {
        key: "g3",
        name: "导航",
        items: [
          {
            key: "DropdownMenu",
            name: "DropdownMenu 下拉菜单",
            disabled: true,
          },
          {
            key: "nav-bar",
            name: "NavBar 导航栏",
            disabled: false,
          },
          {
            key: "popover",
            name: "Popover 气泡",
            disabled: true,
          },
          // {
          //   key: "segmented-control",
          //   name: "SegmentedControl 分段器",
          //   disabled: true,
          // },
          {
            key: "tab-bar",
            name: "TabBar 标签栏",
            disabled: false,
          },
          {
            key: "tabs",
            name: "Tabs 标签页",
            disabled: false,
          },
          // {
          //   key: "drawer",
          //   name: "Drawer 抽屉",
          //   disabled: true,
          // }
        ]
      },
      {
        key: "g4",
        name: "展示",
        items: [
          {
            key: "badge",
            name: "Badge 微标数",
            disabled: false,
          },
          {
            key: "card",
            name: "Card 卡片",
            disabled: false,
          },
          {
            key: "carousel",
            name: "Carousel 走马灯",
            disabled: false,
          },
          {
            key: "collapse",
            name: "Collapse 折叠",
            disabled: false,
          },
          {
            key: "list",
            name: "List 列表",
            disabled: false,
          },
          {
            key: "notify",
            name: "Notify 消息通知",
            disabled: true,
          },
          {
            key: "notice-bar",
            name: "NoticeBar 通告栏",
            disabled: false,
          },
          {
            key: "steps",
            name: "Steps 步骤条",
            disabled: false,
          },
          {
            key: "tag",
            name: "Tag 标签",
            disabled: false,
          },
          {
            key: "result",
            name: "Result 结果反馈",
            disabled: false,
          }
        ]
      },
      {
        key: "g5",
        name: "数据录入",
        items: [
          {
            key: "check-box",
            name: "CheckBox 复选框",
            disabled: false,
          },
          {
            key: "date-picker",
            name: "DatePicker 日期选择",
            disabled: true,
          },
          {
            key: "image-picker",
            name: "ImagePicker 图片选择",
            disabled: true,
          },
          {
            key: "input",
            name: "Input 文本输入",
            disabled: true,
          },
          {
            key: "number-keyboard",
            name: "NumberKeyboard 数字键盘",
            disabled: false,
          },
          {
            key: "password-input",
            name: "PasswordInput 密码输入",
            disabled: false,
          },
          {
            key: "picker",
            name: "Picker 选择器",
            disabled: true,
          },
          {
            key: "radio",
            name: "Radio 单选框",
            disabled: false,
          },
          {
            key: "range",
            name: "Range 区域选择",
            disabled: true,
          },
          {
            key: "search-bar",
            name: "SearchBar 搜索栏",
            disabled: true,
          },
          {
            key: "slider",
            name: "Slider 滑动输入",
            disabled: true,
          },
          {
            key: "stepper",
            name: "Stepper 步进器",
            disabled: false,
          },
          {
            key: "switch",
            name: "Switch 滑动开关",
            disabled: false,
          },
          {
            key: "textarea",
            name: "Textarea 多行输入",
            disabled: true,
          }
        ]
      },
      {
        key: "g6",
        name: "手势",
        items: [
          {
            key: "pull-to-refresh",
            name: "PullToRefresh 拉动刷新",
            disabled: true,
          },
          {
            key: "swipe-action",
            name: "SwipeAction 滑动手势",
            disabled: true,
          }
        ]
      },
      {
        key: "g7",
        name: "其他",
        items: [
          {
            key: "count-down",
            name: "CountDown 倒计时",
            disabled: true,
          },
          {
            key: "index-bar",
            name: "IndexBar 索引栏",
            disabled: true,
          },
          {
            key: "share-sheet",
            name: "ShareSheet 分享面板",
            disabled: false,
          },
          {
            key: "skeleton",
            name: "Skeleton 骨架屏",
            disabled: false,
          },
          {
            key: "sticky",
            name: "Sticky 粘性布局",
            disabled: false,
          },
          {
            key: "timeline",
            name: "Timeline 时间轴",
            disabled: true,
          }
        ]
      }
    ]
  }
};