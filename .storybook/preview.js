import '../src/styles/root.css';
import '../src/index.js';
import mainCss from '../src/styles/main.css?inline';

const THEME_BG = { light: '#ffffff', dark: '#000000' };
const THEME_FG = { light: '#000000', dark: '#e5e5e5' };
const MAIN_CSS_ID = 'sb-blog-main-css';

function applyMainCss(enable) {
  const existing = document.getElementById(MAIN_CSS_ID);
  if (enable && !existing) {
    const el = document.createElement('style');
    el.id = MAIN_CSS_ID;
    el.textContent = mainCss;
    document.head.appendChild(el);
  } else if (!enable && existing) {
    existing.remove();
  }
}

function applyTheme(mode, enable) {
  const root = document.documentElement;
  const body = document.body;
  if (enable) {
    root.dataset.theme = mode;
    root.style.backgroundColor = THEME_BG[mode];
    root.style.color = THEME_FG[mode];
    body.style.backgroundColor = THEME_BG[mode];
    body.style.color = THEME_FG[mode];
    body.querySelectorAll('.sb-show-main, #storybook-root, #root').forEach((el) => {
      el.style.backgroundColor = THEME_BG[mode];
      el.style.color = THEME_FG[mode];
    });
  } else {
    root.dataset.theme = 'light';
    root.style.removeProperty('background-color');
    root.style.removeProperty('color');
    body.style.removeProperty('background-color');
    body.style.removeProperty('color');
    body.querySelectorAll('.sb-show-main, #storybook-root, #root').forEach((el) => {
      el.style.removeProperty('background-color');
      el.style.removeProperty('color');
    });
  }
}

const preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const isStory = context.viewMode === 'story';
      applyMainCss(isStory);
      applyTheme(context.globals.theme ?? 'light', isStory);
      return story();
    },
  ],
};

export default preview;
