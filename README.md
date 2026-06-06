# zuozizhen

个人网站，使用 TanStack Start、Vite+、React 和 Cloudflare Workers 构建。

## 技术栈

- TanStack Start
- TanStack Router
- Vite+ / Vite 8
- React 19
- Cloudflare Workers
- Cloudflare D1 + Drizzle
- Tailwind CSS 4

## 目录说明

- `src/routes/`：TanStack Start 文件路由和 server routes
- `src/components/`：React 组件
- `src/lib/`：内容读取与资源数据
- `src/styles/`：全局样式和终端页样式
- `content/blog/*.md`：博客 Markdown
- `content/project/*.md`：项目 Markdown
- `scripts/build-content.mjs`：将 Markdown 构建为 `src/data/content.json`
- `vite.config.ts`：Vite、Vite+、Oxlint、Oxfmt 和内容构建配置
- `wrangler.jsonc`：Cloudflare Workers、assets 和 D1 配置
- `drizzle.config.ts`：Drizzle schema 与迁移配置

## 本地开发

```bash
vp install
vp dev
```

`vp dev` 会通过 Vite 插件自动执行内容构建，并在 `content/**/*.md` 变更后重新生成 `src/data/content.json`。

## 检查

```bash
vp check
vp run test
```

## 构建

```bash
vp build
```

## 部署

```bash
vp run deploy
```

D1 的 `database_id` 已配置在 `wrangler.jsonc` 中。需要覆盖时可设置 `CLOUDFLARE_DATABASE_ID`。
