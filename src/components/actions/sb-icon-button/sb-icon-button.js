import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-icon-button.css?inline';

export class SbIconButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    disabled: { type: Boolean, reflect: true },
    label: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.variant = 'outline';
    this.size = 'md';
    this.disabled = false;
    this.label = '';
  }

  handleClick = (event) => {
    if (this.disabled) {
      event.stopImmediatePropagation();
      event.preventDefault();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('sb-click', { bubbles: true, composed: true }),
    );
  };

  render() {
    return html`
      <button
        type="button"
        aria-label=${this.label}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('sb-icon-button', SbIconButton);
