import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-offcanvas.css?inline';

export class SbOffcanvas extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    placement: { type: String, reflect: true },
    title: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.placement = 'right';
    this.title = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this._onKey = (event) => {
      if (event.key === 'Escape' && this.open) this.close();
    };
    document.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this._onKey);
    super.disconnectedCallback();
  }

  show() { this.open = true; }

  close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('sb-close', { bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      <div class="backdrop" @click=${() => this.close()}></div>
      <div class="panel" role="dialog" aria-modal="true">
        <div class="header">
          <span>${this.title}</span>
          <button class="close" aria-label="Close" @click=${() => this.close()}>×</button>
        </div>
        <div class="body"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('sb-offcanvas', SbOffcanvas);
