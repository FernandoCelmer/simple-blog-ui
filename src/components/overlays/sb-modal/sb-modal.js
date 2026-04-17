import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-modal.css?inline';

export class SbModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String },
    closeOnBackdrop: { type: Boolean, attribute: 'close-on-backdrop' },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.title = '';
    this.closeOnBackdrop = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._onKeyDown = (event) => {
      if (event.key === 'Escape' && this.open) {
        this.close();
      }
    };
    document.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this._onKeyDown);
    super.disconnectedCallback();
  }

  show() {
    this.open = true;
  }

  close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('sb-close', { bubbles: true, composed: true }),
    );
  }

  handleBackdrop = (event) => {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.close();
    }
  };

  render() {
    if (!this.open) return html``;
    return html`
      <div class="backdrop" @click=${this.handleBackdrop}>
        <div class="modal" role="dialog" aria-modal="true">
          <div class="header">
            <span class="title">${this.title}</span>
            <button class="close" aria-label="Close" @click=${() => this.close()}>×</button>
          </div>
          <div class="body"><slot></slot></div>
          <div class="footer"><slot name="footer"></slot></div>
        </div>
      </div>
    `;
  }
}

customElements.define('sb-modal', SbModal);
