import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-sidebar.css?inline';

export class SbSidebar extends LitElement {
  static properties = {
    items: { type: Array },
    active: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.items = [];
    this.active = '';
  }

  renderItem(item, level = 1) {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isActive = item.url === this.active || item.id === this.active;
    return html`
      <li class="item" data-level=${level} aria-current=${isActive ? 'true' : 'false'}>
        <a href=${item.url || '#'}>${item.title}</a>
        ${hasChildren
          ? html`<ul>${item.children.map((c) => this.renderItem(c, level + 1))}</ul>`
          : null}
      </li>
    `;
  }

  render() {
    return html`<ul>${this.items.map((item) => this.renderItem(item, 1))}</ul>`;
  }
}

customElements.define('sb-sidebar', SbSidebar);
