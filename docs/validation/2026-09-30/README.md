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

## 2026-09-30 Vercel 404 后续排查

此前手写 `api/render.ts` 的 Vite 构建在 Vercel 显示部署完成，但 app.fast2x.com 的 `/` 返回 `x-vercel-error: NOT_FOUND`，`/api/render` 和静态文件也返回 404；因此原先本地函数冒烟不代表 Vercel 部署产物可运行。

按 Vercel 官方 TanStack Start 指南加入 `nitro/vite`，移除手写 API、`outputDirectory` 与 SSR rewrite，显式声明 `tanstack-start` 框架；保留 `/uploads/**` 到 CMS 的代理。`VERCEL=1 pnpm build` 生成 Vercel Build Output API v3：`functions/__server.func`、`static/assets/*` 和 catch-all `/__server` 路由。Nitro Vercel 本地预览 3109 返回首页 HTTP 200，完整 SSR HTML 61276 字符；桌面 1280px 无溢出，5 张可见图片加载成功、浏览器无 error。类型检查、6 项现有测试通过。

Nitro 3 构建器提示当前 Vite 7 与其声明的 Vite 8 要求不同，实际 Vercel 产物构建和本地预览均通过。这个兼容性提示需在后续升级 Vite 时消除。部署 URL 和真实域名仍需独立验收。

新版本 f8033c8 上线后已从 Vercel 系统 404 转为应用级 Page not found，证明 Nitro 函数生效。CDN `sites/global/data/pages.json` 与 `fragments/home.html` 均返回 200；运行时未读到数据。给 fast2x 专用官网补充 `https://static.fast2x.com/sites` 默认源，并兼容旧值 `https://static.fast2x.com`。重新以 `PUBLISHED_ORIGIN=` 构建并运行 Nitro Vercel 预览，首页返回 HTTP 200、含真实 Hero，作为线上无变量场景的直接验证。

提交 4d307e6 部署后，`app.fast2x.com` 返回应用级 404；本次部署的 `index-DhzstFwd.css` 在线返回 200，确认正式域名已指向最新 Nitro 构建。CDN 与 COS 原始地址的 `global/data/pages.json` 均返回 200。进一步对 fast2x 专用官网增加 CDN → COS → 项目环境变量的服务端读取顺序，以便项目旧变量错误或单一入口不可达时继续加载实时发布内容；客户端默认发布样式地址固定为已验证的 CDN `/sites` 前缀。使用错误的 `PUBLISHED_ORIGIN=https://static.fast2x.com/incorrect` 构建并启动 Nitro Vercel 预览，首页仍返回 HTTP 200、真实 Hero 与正确发布 CSS 地址。类型检查、6 项现有测试通过。正式域名仍待这次提交部署后再次验收。
