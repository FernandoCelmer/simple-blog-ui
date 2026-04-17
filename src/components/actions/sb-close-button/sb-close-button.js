import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-close-button.css?inline';

export class SbCloseButton extends LitElement {
  static properties = {
    label: { type: String },
    disabled: { type: Boolean, reflect: true },
    inverse: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.label = 'Close';
    this.disabled = false;
    this.inverse = false;
  }

  handleClick = () => {
    this.dispatchEvent(
      new CustomEvent('sb-close', { bubbles: true, composed: true }),
    );
  };

  render() {
    return html`
      <button
        type="button"
        aria-label=${this.label}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ×
      </button>
    `;
  }
}

customElements.define('sb-close-button', SbCloseButton);
