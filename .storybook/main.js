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
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_URL) {
      config.base = process.env.STORYBOOK_BASE_URL;
    }

    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.treeshake = {
      moduleSideEffects: (id) => {
        if (id.includes('/src/components/') && id.endsWith('.js')) {
          return true;
        }
        return 'no-external';
      },
    };

    return config;
  },
};
export default config;
