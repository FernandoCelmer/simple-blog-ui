import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-collapse.css?inline';

export class SbCollapse extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    label: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.label = 'Toggle';
  }

  toggle = () => {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('sb-toggle', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    return html`
      <button
        class="trigger"
        aria-expanded=${this.open}
        @click=${this.toggle}
      >
        <span class="arrow">›</span>
        <span>${this.label}</span>
      </button>
      <div class="panel">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('sb-collapse', SbCollapse);
