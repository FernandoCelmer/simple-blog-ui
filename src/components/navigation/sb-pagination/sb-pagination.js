import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-pagination.css?inline';

export class SbPagination extends LitElement {
  static properties = {
    page: { type: Number },
    total: { type: Number },
    siblings: { type: Number },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.page = 1;
    this.total = 1;
    this.siblings = 1;
  }

  go(page) {
    const clamped = Math.min(Math.max(page, 1), this.total);
    if (clamped === this.page) return;
    this.page = clamped;
    this.dispatchEvent(
      new CustomEvent('sb-page-change', {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      }),
    );
  }

  getPages() {
    const range = [];
    const start = Math.max(1, this.page - this.siblings);
    const end = Math.min(this.total, this.page + this.siblings);
    if (start > 1) {
      range.push(1);
      if (start > 2) range.push('…');
    }
    for (let i = start; i <= end; i++) range.push(i);
    if (end < this.total) {
      if (end < this.total - 1) range.push('…');
      range.push(this.total);
    }
    return range;
  }

  render() {
    const pages = this.getPages();
    return html`
      <nav aria-label="Pagination">
        <ul>
          <li>
            <button
              aria-label="Previous"
              ?disabled=${this.page === 1}
              @click=${() => this.go(this.page - 1)}
            >
              ‹
            </button>
          </li>
          ${pages.map((p) =>
            p === '…'
              ? html`<li><button disabled>…</button></li>`
              : html`<li>
                  <button
                    aria-current=${p === this.page ? 'page' : 'false'}
                    @click=${() => this.go(p)}
                  >
                    ${p}
                  </button>
                </li>`,
          )}
          <li>
            <button
              aria-label="Next"
              ?disabled=${this.page === this.total}
              @click=${() => this.go(this.page + 1)}
            >
              ›
            </button>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('sb-pagination', SbPagination);
