import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async config => {
    // Ensure CSS files are properly processed
    const { default: tailwindcss } = await import('tailwindcss')
    const { default: autoprefixer } = await import('autoprefixer')

    return {
      ...config,
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    }
  },
}
export default config
