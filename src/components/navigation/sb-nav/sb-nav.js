import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-nav.css?inline';

export class SbNav extends LitElement {
  static properties = {
    items: { type: Array },
    active: { type: String },
    orientation: { type: String, reflect: true },
    variant: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.items = [];
    this.active = '';
    this.orientation = 'horizontal';
    this.variant = 'solid';
  }

  render() {
    return html`
      <nav>
        <ul>
          ${this.items.map(
            (item) => html`
              <li aria-current=${this.active === item.id ? 'page' : 'false'}>
                <a href=${item.href || '#'}>${item.label}</a>
              </li>
            `,
          )}
        </ul>
      </nav>
    `;
  }
}

customElements.define('sb-nav', SbNav);
