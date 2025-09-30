import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from '../src/components/Dashboard';

const meta = {
  title: 'Business/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Dashboard title',
    },
    description: {
      control: 'text', 
      description: 'Dashboard description',
    },
    showFeatureCards: {
      control: 'boolean',
      description: 'Whether to show feature cards section',
    },
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: 'Custom Dashboard Title',
    description: 'This is a customized dashboard description',
  },
};

export const WithoutFeatureCards: Story = {
  args: {
    title: 'Minimal Dashboard',
    description: 'Dashboard without feature cards',
    showFeatureCards: false,
  },
};

export const EmbeddedMode: Story = {
  args: {
    title: 'Embedded Dashboard',
    description: 'Dashboard optimized for embedding in other applications',
    showFeatureCards: false,
  },
};

export const StandaloneMode: Story = {
  args: {
    title: 'Standalone Application',
    description: 'Full-featured dashboard for standalone deployment',
    showFeatureCards: true,
  },
};