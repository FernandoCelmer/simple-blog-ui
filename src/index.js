import hljs from 'highlight.js/lib/common';
import hljsTheme from './styles/hljs-theme.css?inline';

export * from './components/actions/index.js';
export * from './components/blog/index.js';
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

  document.addEventListener('click', (event) => {
    const collapseTrigger = event.target.closest('[data-bs-toggle="collapse"]');
    if (collapseTrigger) {
      const selector =
        collapseTrigger.getAttribute('data-bs-target') ||
        collapseTrigger.getAttribute('href');
      const target = selector && document.querySelector(selector);
      if (target) {
        target.classList.toggle('show');
        collapseTrigger.setAttribute(
          'aria-expanded',
          target.classList.contains('show'),
        );
        event.preventDefault();
        return;
      }
    }

    const dropdownTrigger = event.target.closest('[data-bs-toggle="dropdown"]');
    if (dropdownTrigger) {
      const parent =
        dropdownTrigger.closest('.dropdown') || dropdownTrigger.parentElement;
      const menu = parent && parent.querySelector('.dropdown-menu');
      if (menu) {
        document.querySelectorAll('.dropdown-menu.show').forEach((other) => {
          if (other !== menu) other.classList.remove('show');
        });
        menu.classList.toggle('show');
        event.preventDefault();
      }
      return;
    }

    if (!event.target.closest('.dropdown-menu')) {
      document
        .querySelectorAll('.dropdown-menu.show')
        .forEach((menu) => menu.classList.remove('show'));
    }
  });
}
