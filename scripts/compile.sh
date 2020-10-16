#!/bin/sh

echo "\033[32m 开始编译 ===> \033[0m"

if [ -f ".babelrc" ];then
  mv .babelrc .babelrc_bak
  echo "\033[33m 已迁移.babelrc \033[0m"
fi

NODE_ENV=production && \

father-build && \

cp src/index.d.ts es/

if [ -f ".babelrc_bak" ];then
  mv .babelrc_bak .babelrc
  echo "\033[33m 已恢复.babelrc \033[0m"
fi

echo "\033[32m <=== 编译结束！ \033[0m"