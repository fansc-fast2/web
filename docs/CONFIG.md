# prd-web 对接配置

前端展示网站 = **prd-web**（本仓库，纯渲染基座），内容由 prd-admin 的
**`global` 子站**承接。本文件是配置信息的权威落点，变更后请同步更新。

## 核心配置（2026-09-28 已生效）

| 项 | 值 | 位置 |
| --- | --- | --- |
| 后端（Strapi / CMS） | `http://192.168.101.90:1339/` | prd-web `.env.development`（`VITE_API_URL`/`VITE_IMAGE_URL`）、prd-admin `.env.local`（`STRAPI_URL`） |
| 站点码 | `global` | prd-web `src/server/published-page.ts` → `storefrontSiteCode`；env `VITE_SITE_CODE`/`VITE_DEV_SITE_CODE` |
| 发布镜像目录 | prd-admin `.env.local` → `TMS_WEB_DIR=/Users/fansc/onecms/prd-web` | prd-admin 发布时把 `public/sites/**` 与 `public/cdn/**` 写入本仓库（gitignored） |
| 渲染器资产版本 | `bdbc1dfcc042f488` | `src/generated/tms-cdn-assets.ts`（由 prd-admin `scripts/sync-tms-web-assets.mjs` 再生） |
| COS 存储 | 桶 `cms-1300577073`（ap-beijing），CDN `https://static.fast2x.com` | prd-admin 站点设置（storageConfig，密钥明文存 CMS、浏览器端哨兵掩码） |

## prd-web 环境变量

| 变量 | 当前值 / 说明 |
| --- | --- |
| `VITE_API_URL` | `http://192.168.101.90:1339/api`（后端） |
| `VITE_IMAGE_URL` | `http://192.168.101.90:1339` |
| `VITE_DATA_SOURCE` | `json`（只读发布产物） |
| `VITE_PUBLISH_BASE` | `/sites` |
| `VITE_DEV_SITE_CODE` / `VITE_SITE_CODE` | `global` |
| `PUBLISHED_ORIGIN` | `https://static.fast2x.com`（COS 的 CDN 域名，已写入 `.env.local`）。对象键前缀待首次发布后核对，必要时补 `/<prefix>` |

`.env.local`（gitignored，本机覆盖）已同步 :1339；vite 的 `/uploads` 媒体
代理也已指向 :1339。

## 发布链路

1. prd-admin（页面构建器）维护 `global` 站点：官网页面（系统介绍、产品
   展示）、导航、site-config（logo / system-name / SEO）。
2. 发布（staging/live）→ 产物镜像到 `TMS_WEB_DIR`（本仓库
   `public/sites/global/…`）并上传 COS（桶 `cms-1300577073`，经
   `static.fast2x.com` CDN 读取）；`sync-tms-web-assets` 同步
   `blocks-renderer.js` / `published.css` 并再生版本常量。
3. prd-web dev（本地优先）或生产（`PUBLISHED_ORIGIN` 远端优先）渲染。
4. 站点 `domain`（sites.json，来自 prd-admin 站点记录）决定 canonical/OG
   URL——正式域名在 prd-admin 站点记录里改，不要改前端代码。

## 已解决（记录备查）

- prd-admin 管理员凭据（2026-09-28）：已改用 password center「TMS · 超管
  (global)」条目（31483370@qq.com）并写入 prd-admin `.env.local`，对 :1339
  登录验证通过；CMS 站点核对完成（global / us-shopify / wp-test）。
- 「测试 COS 链接无效」（2026-09-28，prd-admin 提交 71447b8d）：根因是页面
  刷新后表单密钥为空（密钥不下发浏览器），测试按钮原样提交空值被接口必填
  校验拒绝；已修复——页面测试请求补空值→哨兵映射，接口允许「空密钥+siteId」
  走存储密钥回解。存储的 COS 凭据实测有效（ListObjectsV2/HeadBucket 通过，
  :3002 端到端验证 200）。

## 待办 / 已知问题

- [ ] CMS 中 `global` 站点当前内容仍是 TMS 演示数据；官网内容（系统介绍/
  产品展示）待在 prd-admin 中重新制作并首次发布（发布至 COS）。
- [ ] 首次发布后核对 COS 对象键前缀，确认 `PUBLISHED_ORIGIN` 是否需要补
      `/<prefix>`。官网正式域名已由用户确认为 `fast2x.com`；本次仅记录，
      尚未修改 CMS 站点记录或 DNS（当前站点 domain 为 `app.fast2x.com`）。
- [x] 远程已配置（2026-09-28）：`origin` = `https://cnb.cool/fast2x/prd-web`
  （权威源，main 已推送）；`github` = `git@github.com:fansc-fast2/web.git`
  （SSH 22/443 与 HTTPS 当前均被网络阻断，恢复后
  `git push --force github main:main` 补推，已挂后台自动重试）。
- [ ] 机器凭据注意：git 全局 credential helper 指向 `/tmp/git-credentials`
  （重启即失效）；cnb 令牌权威来源＝钥匙串 `cnb.cool` 条目 / password
  center「Git · cnb.cool」，gh CLI token 已过期（password center 有新条目）。
