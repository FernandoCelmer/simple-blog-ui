import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-prev-next.css?inline';

export class SbPrevNext extends LitElement {
  static properties = {
    prevHref: { type: String, attribute: 'prev-href' },
    prevLabel: { type: String, attribute: 'prev-label' },
    nextHref: { type: String, attribute: 'next-href' },
    nextLabel: { type: String, attribute: 'next-label' },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.prevHref = '';
    this.prevLabel = 'Previous';
    this.nextHref = '';
    this.nextLabel = 'Next';
  }

  render() {
    return html`
      <nav class="grid" aria-label="Post navigation">
        <div class="slot">
          ${this.prevHref
            ? html`<a href=${this.prevHref} rel="prev">← ${this.prevLabel}</a>`
            : html`<slot name="prev"></slot>`}
        </div>
        <div class="slot"></div>
        <div class="slot">
          ${this.nextHref
            ? html`<a href=${this.nextHref} rel="next">${this.nextLabel} →</a>`
            : html`<slot name="next"></slot>`}
        </div>
      </nav>
    `;
  }
}

customElements.define('sb-prev-next', SbPrevNext);
