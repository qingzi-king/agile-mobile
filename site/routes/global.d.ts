/*
 * @Descripttion: 全局配置（仅必要设成全局）
 * @Author: qingzi.wang
 * @Date: 2020-09-01 17:42:23
 */ 

const globalAny: any = global;

globalAny.G_SERVER_HOST = 'http://127.0.0.1:5000';

globalAny.G_SYSTEM_TITLE = {
  name: 'Agile Mobile UI',
  subName: '富能通重庆研发中心',
  welcome: {
    name: 'Agile Mobile UI',
    describe: '一个基于 React 的移动端 UI 组件库',
  }
};

// 拆分url的params部分
globalAny.G_SPLIT_URL_PARAMS = () => {

  let nowUrl = window.location.pathname;
  let nowUrlArray = nowUrl.split('?')[0].split('/'); //根目录会是两个空串["",""]
  let realKeys = nowUrlArray.filter(Boolean);

  return realKeys;
};