import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-button.css?inline';

export class SbButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    disabled: { type: Boolean, reflect: true },
    type: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.disabled = false;
    this.type = 'button';
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
        type=${this.type}
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

customElements.define('sb-button', SbButton);
