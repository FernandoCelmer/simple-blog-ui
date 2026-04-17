import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-navbar.css?inline';

export class SbNavbar extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
  }

  toggle = () => {
    this.open = !this.open;
  };

  render() {
    return html`
      <div class="bar">
        <div class="brand"><slot name="brand"></slot></div>
        <button
          class="toggle"
          aria-expanded=${this.open}
          aria-label="Toggle navigation"
          @click=${this.toggle}
        >
          Menu
        </button>
        <div class="links"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('sb-navbar', SbNavbar);
