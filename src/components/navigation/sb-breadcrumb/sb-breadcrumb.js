import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-breadcrumb.css?inline';

export class SbBreadcrumb extends LitElement {
  static properties = {
    items: { type: Array },
    separator: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.items = [];
    this.separator = '/';
  }

  render() {
    return html`
      <nav aria-label="Breadcrumb">
        <ol>
          ${this.items.map((item, i) => {
            const isLast = i === this.items.length - 1;
            return html`
              <li aria-current=${isLast ? 'page' : 'false'}>
                ${isLast || !item.href
                  ? html`<span>${item.label}</span>`
                  : html`<a href=${item.href}>${item.label}</a>`}
                ${!isLast ? html`<span class="separator">${this.separator}</span>` : null}
              </li>
            `;
          })}
        </ol>
      </nav>
    `;
  }
}

customElements.define('sb-breadcrumb', SbBreadcrumb);
