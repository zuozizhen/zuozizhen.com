# zuozizhen (Next.js + Cloudflare)

本项目已从 Rails 迁移为 Next.js 全栈版本，并适配 Cloudflare Workers 部署。

## 技术栈

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- OpenNext for Cloudflare (`@opennextjs/cloudflare`)
- Wrangler

## 目录说明

- `app/`：Next.js 路由与页面
- `app/api/chat/route.ts`：AI SSE 代理接口（兼容原 `/api/chat`）
- `content/blog/*.md`：博客 Markdown
- `content/project/*.md`：项目 Markdown
- `scripts/build-content.mjs`：将 Markdown 构建为 `data/content.json`
- `components/TerminalClient.tsx`：终端页
- `components/terminal-controller.js`：终端交互逻辑（由 Stimulus 驱动）
- `wrangler.jsonc`：Cloudflare Worker 配置

## 环境变量

复制并设置 `.env`（本地）或 Cloudflare 环境变量：

- `AI_API_ENDPOINT`
- `AI_MODEL`
- `AI_API_KEY`

## 本地开发

```bash
npm install --ignore-scripts
npm run dev
```

说明：当前环境里 `sharp` 会触发源码编译失败，使用 `--ignore-scripts` 可正常完成依赖安装与开发/构建。

## 构建

```bash
npm run build
```

## Cloudflare 本地预览

```bash
npm run cf:preview
```

## Cloudflare 部署

```bash
npm run cf:deploy
```

部署前请先完成 Wrangler 登录与项目绑定（`wrangler login` / `wrangler deploy` 初始化）。
