import { html } from 'lit';
import './sb-footer.js';

export default {
  title: 'Blog/Footer',
};

export const Basic = () => html`
  <sb-footer>
    <small class="item">© 2026 Simple Blog</small>
    <small class="item">Made with <a href="#">Simple Blog for MkDocs</a></small>
  </sb-footer>
`;
