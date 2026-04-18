import { html } from 'lit';
import './sb-post-list.js';

export default {
  title: 'Blog/PostList',
};

const posts = [
  { date: '2026-04-17', title: 'Terminal UI Components', url: '/posts/terminal-ui' },
  { date: '2026-03-10', title: 'Building with Lit', url: '/posts/lit' },
  { date: '2026-02-02', title: 'Static Sites with MkDocs', url: '/posts/mkdocs' },
];

export const Basic = () => html`<sb-post-list .posts=${posts}></sb-post-list>`;
