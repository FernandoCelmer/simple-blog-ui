import { html } from 'lit';
import './sb-page-layout.js';

export default {
  title: 'Blog/PageLayout',
};

export const WithSidebar = () => html`
  <sb-page-layout>
    <nav slot="header" style="padding:1rem;border-bottom:1px solid var(--border-subtle)">
      Header
    </nav>
    <div slot="sidebar" style="padding:1rem;border:1px solid var(--border-subtle)">
      Sidebar
    </div>
    <article>
      <h1>Post Title</h1>
      <p>Content goes here.</p>
    </article>
    <footer slot="footer" style="padding:1rem;border-top:1px solid var(--border-subtle)">
      Footer
    </footer>
  </sb-page-layout>
`;

export const NoSidebar = () => html`
  <sb-page-layout no-sidebar>
    <article>
      <h1>Full Width</h1>
      <p>No sidebar on this page.</p>
    </article>
  </sb-page-layout>
`;
