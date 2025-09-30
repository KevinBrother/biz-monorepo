# Contributing to Business Monorepo

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development:

   ```bash
   # Start all dev servers
   pnpm run dev

   # Or start specific apps
   cd apps/nextjs-app && pnpm run dev
   cd apps/react-standalone && pnpm run dev
   ```

3. Run Storybook:

   ```bash
   # All Storybooks
   pnpm run storybook

   # Specific Storybooks
   pnpm run storybook:ui           # Port 6006
   pnpm run storybook:components   # Port 6007
   ```

## Code Quality

### Pre-commit Hooks

The project uses Husky and lint-staged for automatic code quality checks:

- ESLint fixes
- Prettier formatting
- Type checking

### Manual Quality Checks

```bash
# Linting
pnpm run lint
pnpm run lint:fix

# Type checking
pnpm run type-check

# Formatting
pnpm run format
pnpm run format:check
```

## Building

```bash
# Build all packages and apps
pnpm run build

# Build Storybooks
pnpm run build-storybook
```

## Project Structure

- `packages/ui` - shadcn/ui base components
- `packages/react-components` - Business React components
- `packages/tsconfig` - Shared TypeScript configurations
- `packages/eslint-config` - Shared ESLint configurations
- `packages/build-config` - Shared build tool configurations
- `apps/nextjs-app` - Next.js application
- `apps/react-standalone` - Standalone React application

## Adding Dependencies

### Workspace Dependencies

Use `workspace:*` for internal packages:

```json
{
  "dependencies": {
    "@biz/ui": "workspace:*"
  }
}
```

### External Dependencies

Add to the appropriate catalog in `pnpm-workspace.yaml` for version consistency across the monorepo.

## Commit Guidelines

- Use conventional commits format
- Keep commits focused and atomic
- Update tests when adding features
- Ensure all quality checks pass before committing
