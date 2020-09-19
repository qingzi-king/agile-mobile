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
            key: "flex",
            name: "栅格 Flex",
            disabled: false,
          },
          {
            key: "button",
            name: "按钮 Button",
            disabled: false,
          },
          {
            key: "icon",
            name: "图标 Icon",
            disabled: false,
          },
        ]
      },
      {
        key: "g2",
        name: "反馈",
        items: [
          {
            key: "toast",
            name: "轻提示 Toast",
            disabled: false,
          },
          // {
          //   key: "action-sheet",
          //   name: "动作面板 ActionSheet",
          //   disabled: true,
          // },
          {
            key: "popup",
            name: "弹出层 Popup",
            disabled: false,
          },
          {
            key: "modal",
            name: "对话框 Modal",
            disabled: false,
          },
          {
            key: "progress",
            name: "进度条 Progress",
            disabled: false,
          },
          // {
          //   key: "activity-indicator",
          //   name: "活动指示器 ActivityIndicator",
          //   disabled: true,
          // },
        ]
      },
      {
        key: "g3",
        name: "导航",
        items: [
          {
            key: "DropdownMenu",
            name: "下拉菜单 DropdownMenu",
            disabled: true,
          },
          {
            key: "navbar",
            name: "导航栏 NavBar",
            disabled: false,
          },
          {
            key: "popover",
            name: "气泡 Popover",
            disabled: true,
          },
          {
            key: "segmented-control",
            name: "分段器 SegmentedControl",
            disabled: true,
          },
          {
            key: "tabBar",
            name: "标签栏 TabBar",
            disabled: false,
          },
          {
            key: "tabs",
            name: "标签页 Tabs",
            disabled: false,
          },
          {
            key: "drawer",
            name: "抽屉 Drawer",
            disabled: true,
          }
        ]
      },
      {
        key: "g4",
        name: "展示",
        items: [
          {
            key: "collapse",
            name: "折叠 Collapse",
            disabled: false,
          },
          {
            key: "badge",
            name: "微标数 Badge",
            disabled: false,
          },
          {
            key: "card",
            name: "卡片 Card",
            disabled: true,
          },
          {
            key: "carousel",
            name: "走马灯 Carousel",
            disabled: true,
          },
          {
            key: "list",
            name: "列表 List",
            disabled: false,
          },
          {
            key: "notify",
            name: "消息通知 Notify",
            disabled: false,
          },
          {
            key: "notic-bar",
            name: "通告栏 NoticBar",
            disabled: false,
          },
          {
            key: "steps",
            name: "步骤条 Steps",
            disabled: true,
          },
          {
            key: "tag",
            name: "标签 Tag",
            disabled: false,
          },
          {
            key: "empty",
            name: "空状态 Empty",
            disabled: true,
          }
        ]
      },
      {
        key: "g5",
        name: "展示",
        items: [
          {
            key: "radio",
            name: "单选框 Radio",
            disabled: true,
          },
          {
            key: "check-box",
            name: "复选框 CheckBox",
            disabled: true,
          },
          {
            key: "date-picker",
            name: "日期选择 DatePicker",
            disabled: true,
          },
          {
            key: "image-picker",
            name: "图片选择 ImagePicker",
            disabled: true,
          },
          {
            key: "input",
            name: "文本输入 Input",
            disabled: true,
          },
          {
            key: "picker",
            name: "选择器 Picker",
            disabled: true,
          },
          {
            key: "range",
            name: "区域选择 Range",
            disabled: true,
          },
          {
            key: "search-bar",
            name: "搜索栏 SearchBar",
            disabled: true,
          },
          {
            key: "slider",
            name: "滑动输入 Slider",
            disabled: true,
          },
          {
            key: "stepper",
            name: "步进器 Stepper",
            disabled: true,
          },
          {
            key: "switch",
            name: "滑动开关 Switch",
            disabled: true,
          },
          {
            key: "textarea",
            name: "多行输入 Textarea",
            disabled: true,
          },
          {
            key: "password-input",
            name: "密码输入 PasswordInput",
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
            name: "拉动刷新 PullToRefresh",
            disabled: true,
          },
          {
            key: "swipe-action",
            name: "滑动手势 SwipeAction",
            disabled: true,
          }
        ]
      },
      {
        key: "g7",
        name: "其他",
        items: [
          {
            key: "skeleton",
            name: "骨架屏 Skeleton",
            disabled: true,
          },
          {
            key: "sticky",
            name: "粘性布局 Sticky",
            disabled: false,
          },
          {
            key: "count-down",
            name: "倒计时 CountDown",
            disabled: true,
          },
          {
            key: "share-sheet",
            name: "分享面板 ShareSheet",
            disabled: true,
          },
          {
            key: "index-bar",
            name: "索引栏 IndexBar",
            disabled: true,
          },
          {
            key: "timeline",
            name: "时间轴 Timeline",
            disabled: true,
          }
        ]
      }
    ]
  }
};