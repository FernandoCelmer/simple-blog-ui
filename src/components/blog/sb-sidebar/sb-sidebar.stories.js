import { html } from 'lit';
import './sb-sidebar.js';

export default {
  title: 'Blog/Sidebar',
};

const items = [
  { title: 'Introduction', url: '#intro' },
  {
    title: 'Getting Started',
    url: '#getting-started',
    children: [
      { title: 'Installation', url: '#installation' },
      { title: 'Configuration', url: '#configuration' },
    ],
  },
  {
    title: 'Advanced',
    url: '#advanced',
    children: [
      {
        title: 'Theming',
        url: '#theming',
        children: [
          { title: 'Light', url: '#light' },
          { title: 'Dark', url: '#dark' },
        ],
      },
    ],
  },
];

export const Basic = () => html`<sb-sidebar .items=${items} active="#configuration"></sb-sidebar>`;
