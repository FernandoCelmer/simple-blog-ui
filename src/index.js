import hljs from 'highlight.js/lib/common';
import hljsTheme from './styles/hljs-theme.css?inline';

export * from './components/actions/index.js';
export * from './components/display/index.js';
export * from './components/feedback/index.js';
export * from './components/forms/index.js';
export * from './components/layout/index.js';
export * from './components/navigation/index.js';
export * from './components/overlays/index.js';
export * from './components/typography/index.js';

if (typeof document !== 'undefined') {
  if (!document.querySelector('style[data-sb-hljs]')) {
    const style = document.createElement('style');
    style.dataset.sbHljs = '';
    style.textContent = hljsTheme;
    document.head.appendChild(style);
  }

  const highlightAll = () => {
    document.querySelectorAll('pre code:not([data-sb-highlighted])').forEach((el) => {
      hljs.highlightElement(el);
      el.dataset.sbHighlighted = '';
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightAll);
  } else {
    highlightAll();
  }
}
