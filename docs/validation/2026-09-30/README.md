# fast2x 本地生产验收

- 本地地址：http://127.0.0.1:3108/；真实 prd-web SSR，非静态 fixture。
- 数据源：PUBLISHED_ORIGIN=https://static.fast2x.com/sites。
- 修复：明确 Vercel api/render.ts Web fetch 入口；保留业务路径、query、POST；打包 dist/server/**；清除 body 默认 8px margin；本地发布源补上 /sites。
- pnpm build、pnpm lint:types、9 项测试、入口 ESLint、架构检查通过。
- 桌面 1280px / 手机 390px 均无横向溢出；两端可见图片加载成功，字体加载完成；Overview 与返回顶部锚点通过；桌面控制台无 error。
- 实际 api/render.ts 直接请求 CDN：HTTP 200，SSR HTML 61276 字符，包含正文、Header、Footer。
- 截图：desktop.png。手机 DOM 验证通过，但浏览器截图工具的缩放输出异常，mobile.png 不用于像素验收。
- 尚未部署：Vercel 未登录；GitHub API 返回 403 account suspended，SSH 只读仍可读取 main=9f5080704a6722eb0af4c7da6fce62a916a75f93。不能将只读仓库访问当作自动部署成功证据。
- 线上复查 app.fast2x.com 返回 Vercel NOT_FOUND 404。

## 启动

```sh
PUBLISHED_ORIGIN=https://static.fast2x.com/sites VITE_PUBLISHED_CSS_URL=https://static.fast2x.com/sites/global/assets/published.css pnpm build
NODE_ENV=production PUBLISHED_ORIGIN=https://static.fast2x.com/sites PORT=3108 node server-entry.js
```

生产 Vercel 项目需保持 PUBLISHED_ORIGIN=https://static.fast2x.com/sites，构建 pnpm build，输出 dist/client，Node 22。登录现有绑定 app.fast2x.com 的项目后部署此工作区，核验首页、静态 JS/CSS 与服务端函数，确认成功后再视作上线完成。
