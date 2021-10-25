import { components } from './components'

export default {
  mode: 'site',
  title: 'Agile Mobile UI',
  logo: 'http://docs.antjob.ink/agile-ui/logo.svg',
  favicon: 'http://docs.antjob.ink/agile-ui/favicon.ico',
  navs: {
    'en': [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'Components',
        path: '/components',
      },
      {
        title: 'Releases',
        path: 'https://github.com/qingzi-king/agile-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/qingzi-king/agile-mobile',
      },
    ],
    'zh': [
      {
        title: '指南',
        path: '/zh/guide',
      },
      {
        title: '组件',
        path: '/zh/components',
      },
      {
        title: '发布日志',
        path: 'https://github.com/qingzi-king/agile-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/qingzi-king/agile-mobile',
      },
    ],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/zh': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: 'Quick Start',
        path: '/guide/quick-start',
      },
      {
        title: 'CSS Variables',
        path: '/guide/css-variables',
      },
      // {
      //   title: 'FAQ',
      //   path: '/guide/faq',
      // }
    ],
    '/zh/guide': [
      {
        title: '快速上手',
        path: '/zh/guide/quick-start',
      },
      {
        title: 'CSS 变量',
        path: '/zh/guide/css-variables',
      },
      // {
      //   title: 'FAQ',
      //   path: '/zh/guide/faq',
      // }
    ],
    '/components': [
      {
        title: 'Basic',
        children: components.basic,
      },
      {
        title: 'Data Display',
        children: components.dataDisplay,
      },
      {
        title: 'Data Entry',
        children: components.dataEntry,
      },
      {
        title: 'Feedback',
        children: components.feedback,
      },
      {
        title: 'Gesture',
        children: components.gesture,
      },
      {
        title: 'Other',
        children: components.other,
      },
    ],
    '/zh/components': [
      {
        title: '基础',
        children: components.basic,
      },
      {
        title: '数据展示',
        children: components.dataDisplay,
      },
      {
        title: '数据录入',
        children: components.dataEntry,
      },
      {
        title: '反馈',
        children: components.feedback,
      },
      {
        title: '手势',
        children: components.gesture,
      },
      {
        title: '其他',
        children: components.other,
      },
    ],
  },
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'agile-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f7fa'
    }`,
    'https://s9.cnzz.com/z_stat.php?id=1280459150&web_id=1280459150',
  ],
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  styles: [
    `
      #root .__dumi-default-mobile-demo-layout {
        padding: 0;
      }
      a[title='站长统计'] {
        display: none;
      }
    `,
  ],
  themeConfig: {
    carrier: 'agile',
    hd: {
      rules: [
        {
          mode: 'vl',
          options: [100, 750]
        }
      ],
    },
  },
  hire: {
    title: '招人啦！！！',
    content: `
      <ul>
        <li>React、Python（Odoo）各种开源项目，快来并肩作战！</li>
        <li>投递邮箱：qingzi.wang@funenc.com</li>
      </ul>`
    ,
    email: 'qingzi.wang@funenc.com',
    slogan: '招人啦！！！',
  },
}
