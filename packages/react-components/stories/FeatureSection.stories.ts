import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection } from '../src/components/FeatureSection';

const meta = {
  title: 'Business/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title',
    },
    features: {
      control: 'object',
      description: 'Array of feature objects',
    },
  },
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: 'Our Amazing Features',
  },
};

export const TechFeatures: Story = {
  args: {
    title: 'Technical Features',
    features: [
      {
        title: 'React 18',
        description: 'Latest React features',
        content: 'Built with the latest React 18 features including concurrent rendering and automatic batching.',
      },
      {
        title: 'TypeScript',
        description: 'Type-safe development',
        content: 'Full TypeScript support for better developer experience and fewer runtime errors.',
      },
      {
        title: 'Vite',
        description: 'Lightning fast builds',
        content: 'Powered by Vite for incredibly fast development and build times.',
      },
    ],
  },
};

export const BusinessFeatures: Story = {
  args: {
    title: 'Business Benefits',
    features: [
      {
        title: 'Scalability',
        description: 'Grows with your business',
        content: 'Architecture designed to scale from startup to enterprise levels.',
      },
      {
        title: 'Maintainability',
        description: 'Easy to maintain and extend',
        content: 'Clean code structure makes it easy for teams to maintain and add features.',
      },
    ],
  },
};

export const SingleFeature: Story = {
  args: {
    title: 'Key Feature',
    features: [
      {
        title: 'Monorepo Architecture',
        description: 'Unified codebase management',
        content: 'All projects organized in a single repository for better code sharing and consistency.',
      },
    ],
  },
};