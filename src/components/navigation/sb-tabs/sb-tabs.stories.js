import { html } from 'lit';
import './sb-tabs.js';

export default {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'install', label: 'Install' },
  { id: 'usage', label: 'Usage' },
];

export const Basic = () => html`
  <sb-tabs .tabs=${tabs}>
    <div slot="overview">Overview of simple-blog-ui and its goals.</div>
    <div slot="install">Run <code>npm install simple-blog-ui</code>.</div>
    <div slot="usage">Import the component in your HTML, React, or Vue app.</div>
  </sb-tabs>
`;

export const PreSelected = () => html`
  <sb-tabs .tabs=${tabs} active="usage">
    <div slot="overview">Overview content.</div>
    <div slot="install">Install content.</div>
    <div slot="usage">Usage content (selected by default).</div>
  </sb-tabs>
`;
