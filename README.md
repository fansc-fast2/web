# prd-web — OneCMS 官网基座

OneCMS CMS SaaS 官网的**纯渲染基座**（TanStack Start / React 19 / Vite，
SSR）：只做一件事——把 `prd-admin`（页面构建器）推送过来的已发布 HTML
片段渲染成站点。页面、导航、区块、主题、SEO 全部来自发布产物，本仓库
不含任何业务逻辑与页面内容。

## 渲染什么

```
prd-admin 发布
  ├─ 开发：镜像到本仓库 public/sites/{siteCode}/…（TMS_WEB_DIR 指向本仓库）
  └─ 生产：上传 S3 /static/{siteCode}/…（PUBLISHED_ORIGIN）

prd-web（本仓库，只读）
  └─ 按 URL 定位 {siteCode}/{locale}/data/pages.json 里的 fragment →
     SSR 输出片段 HTML，客户端激活其内联脚本（轮播/下拉/语言切换）
```

- 站点码 `global`（`src/server/published-page.ts` 的 `storefrontSiteCode`）。
- 双语由 URL 前缀驱动：`/`＝英文、`/zh-CN`＝中文，中文缺页回退英文片段。
- 版本预览：`/r/<releaseId>/<locale>/…` 渲染未上线 release（canonical 指向
  生产路径，不会被索引）。
- 区块渲染器 `blocks-renderer.js` 与主题 `published.css` 同为发布产物：
  开发取 `public/cdn/`，生产经 `/s3/{siteCode}/` 同源代理读 S3。
- `public/sites/`、`public/cdn/`、`src/routeTree.gen.ts` 均不入库——它们是
  admin 推送的本地镜像缓存。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3003
```

站点内容依赖 prd-admin 至少发布一次（否则所有路径 404）：

1. prd-admin 环境已配置 `TMS_WEB_DIR=/Users/fansc/onecms/prd-web`（2026-09-28
   起生效），发布产物即镜像进本仓库，dev server 立即可见。`global` 子站
   承接官网内容（系统介绍 / 产品展示页面均在 prd-admin 的 global 站点维护）。
2. 在 prd-admin 维护 `global` 站点的页面与导航后发布；不要在本仓库改内容。
3. 生产设置 `PUBLISHED_ORIGIN`（S3 `/static` 基地址），远端发布为准。
4. 站点 `domain`（sites.json）决定 canonical/OG URL，在 prd-admin 站点记录
   里配置，不要改前端代码。
5. 渲染器资产（`public/cdn/` + `src/generated/tms-cdn-assets.ts`）由
   `prd-admin/scripts/sync-tms-web-assets.mjs` 在发布时同步；当前版本
   `bdbc1dfcc042f488`（2026-09-28 手动同步）。

### 环境变量

| 变量 | 说明 |
| --- | --- |
| `VITE_DATA_SOURCE` | `json`＝只读发布产物（默认） |
| `VITE_DEV_SITE_CODE` / `VITE_SITE_CODE` | 本地无域名映射时的站点码覆盖（`global`） |
| `PUBLISHED_ORIGIN` | 生产发布产物源（S3 `/static` 基地址，服务端读取，见 docs/CONFIG.md） |
| `PORT` | 生产启动端口（默认 3003） |

## 常用命令

- `pnpm dev` — 开发服务器
- `pnpm build` / `pnpm start` — 构建与生产启动（`server-entry.js`）
- `pnpm lint` — 类型检查 + ESLint
- `pnpm check:architecture` — 边界检查（不得重新引入发布入口）
- `pnpm test` — Vitest
- `pnpm check:quality` — lint + 架构 + 测试 + 构建

## Vercel 部署

- 本仓库是 **pnpm 工程**：`vercel.json` 已设 `installCommand: pnpm install
  --frozen-lockfile`（此前 Vercel 默认用 npm 安装导致
  `Cannot read properties of null (reading 'edgesOut')` 崩溃）。
- SSR：静态资产由 `dist/client` 直出，其余路径 rewrites 到
  `api/[[...route]].ts`（Node 22 Web-standard handler），桥接 TanStack Start
  的 `dist/server/server.js#fetch` —— 与 node 部署（`pnpm start`）同一处理器。
- Vercel 项目需配置的环境变量（**2026-09-29 已按真实发布产物验证**，对象布局
  `sites/global/…`，CDN 直读 200，本地同链路冒烟渲染出官网首页）：
  - `PUBLISHED_ORIGIN=https://static.fast2x.com/sites`（运行时，服务端远读
    `global/…` 发布产物）
  - `VITE_PUBLISHED_CSS_URL=https://static.fast2x.com/sites/global/assets/published.css`
    （构建期；发布产物为服务端预渲染方案，**无需** `VITE_BLOCK_RENDERER_URL`，
    桶中不存在 blocks-renderer.js，页面自带完整 HTML+绝对 CDN 资产地址）
- Node 版本跟随 `engines.node`（22.x）；构建命令 `pnpm build`。

## 仓库远程

- `origin` = `https://cnb.cool/fast2x/prd-web`（权威源）
- `github` = `git@github.com:fansc-fast2/web.git`（网络阻断时滞后补推：
  `git push --force github main:main`）

## 边界

- 本仓库**只读**发布产物：不发布、不管理内容（发布属 prd-admin）。
- 除渲染发布片段外不提供任何动态端点；需要表单/转化能力时，由
  prd-admin 的区块与后端提供，或在本仓库按需重新引入。
