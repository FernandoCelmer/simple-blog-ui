/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/docs/**/*.mdx',
    '../src/components/**/*.mdx',
    '../src/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
};
export default config;
