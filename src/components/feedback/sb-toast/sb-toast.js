import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-toast.css?inline';

export class SbToast extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String },
    variant: { type: String },
    placement: { type: String, reflect: true },
    duration: { type: Number },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.title = '';
    this.variant = 'default';
    this.placement = 'top-right';
    this.duration = 0;
    this._timer = null;
  }

  updated(changed) {
    if (changed.has('open')) {
      clearTimeout(this._timer);
      if (this.open && this.duration > 0) {
        this._timer = setTimeout(() => this.close(), this.duration);
      }
    }
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

  render() {
    return html`
      <div class="toast" data-variant=${this.variant} role="status" aria-live="polite">
        <div class="header">
          <span>${this.title}</span>
          <button class="close" aria-label="Close" @click=${() => this.close()}>×</button>
        </div>
        <div class="body"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('sb-toast', SbToast);
