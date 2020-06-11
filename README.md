## 目的

* 此项目为react框架探索的测试项目，希望通过此探索对react及相关生态有深入的掌握和研究。
* 也希望此项目能给其他初学者带来帮助。

## 快速创建react项目
```html
npx create-react-app my-app
或
yarn create react-app my-app

cd my-app
npm start 或者 yarn start 启动项目
```
* 安装typscript
```html
如果在已有的项目中需要添加typescript，需要执行命令：
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
或
yarn add typescript @types/node @types/react @types/react-dom @types/jest

-然后运行项目即可
-此处有个小坑，按照官方指导说法是这样的：If your project is not created with TypeScript enabled, npx may be using a cached version of create-react-app. Remove previously installed versions with npm uninstall -g create-react-app
如果运行有问题的话，可能需要卸载一下全局的create-react-app
```