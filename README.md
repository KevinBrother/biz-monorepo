# Business Monorepo

这是一个使用 Turborepo 管理的 monorepo，展示了如何组织可复用组件和应用的最佳实践。

## 项目结构

```
biz-monorepo/
├── packages/
│   ├── ui/                     # shadcn/ui 基础组件库，配合 Storybook 作为文档
│   ├── react-components/       # 可复用的 React 组件库（可嵌入其他应用）
│   ├── tsconfig/              # 共享的 TypeScript 配置
│   ├── eslint-config/         # 共享的 ESLint 配置
│   └── build-config/          # 共享的构建工具配置
├── apps/
│   ├── nextjs-app/            # Next.js 应用，嵌入 React 组件
│   └── react-standalone/      # 独立的 React 应用，也可发布
├── .github/                   # GitHub Actions CI/CD 配置
├── scripts/                   # 工具脚本
├── package.json
└── pnpm-workspace.yaml
```

## 包说明

### @biz/ui

基于 shadcn/ui 的基础 UI 组件库，包含：

- Button 组件
- Card 组件
- 工具函数 (cn)
- Storybook 文档

### @biz/react-components

可复用的 React 组件库，包含：

- Dashboard 组件
- FeatureSection 组件
- 既可独立使用，也可嵌入其他应用

### @biz/tsconfig

共享的 TypeScript 配置包，包含：

- base.json - 基础配置
- react.json - React 项目配置
- nextjs.json - Next.js 项目配置
- node.json - Node.js 项目配置

### @biz/eslint-config

共享的 ESLint 配置包，包含：

- base.js - 基础 ESLint 配置
- react.js - React 项目配置
- nextjs.js - Next.js 项目配置
- node.js - Node.js 项目配置

### @biz/build-config

共享的构建工具配置包，包含：

- tailwind.js - Tailwind CSS 配置
- postcss.js - PostCSS 配置
- tsup.js - tsup 构建配置
- vite.js - Vite 配置

### nextjs-app

使用 Next.js 14 构建的应用，演示如何嵌入 @biz/react-components。

### react-standalone

独立的 React 应用，使用 @biz/react-components，可以独立部署。

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动所有开发服务器
pnpm run dev

# 构建所有项目
pnpm run build

# 运行代码检查
pnpm run lint

# 类型检查
pnpm run type-check

# 启动所有 Storybook 文档
pnpm run storybook

# 构建所有 Storybook 文档
pnpm run build-storybook

# 启动特定 Storybook
pnpm run storybook:ui           # 基础 UI 组件文档 (端口 6006)
pnpm run storybook:components   # 业务组件文档 (端口 6007)
```

## 单独运行项目

```bash
# 只运行 UI 组件库的 Storybook
cd packages/ui && pnpm run storybook

# 只运行 Next.js 应用
cd apps/nextjs-app && pnpm run dev

# 只运行独立 React 应用
cd apps/react-standalone && pnpm run dev
```

## 组件复用架构

### 双重用途设计

- **@biz/react-components** 可以作为库被其他应用导入
- **react-standalone** 作为独立应用部署
- **nextjs-app** 嵌入 React 组件，展示组件在不同框架中的使用

## 技术栈

- **构建工具**: Turborepo
- **UI 组件库**: shadcn/ui + Tailwind CSS
- **文档**: Storybook
- **Next.js 应用**: Next.js 14 + TypeScript
- **React 应用**: Vite + React + TypeScript
- **样式**: Tailwind CSS
- **包管理**: pnpm workspaces
