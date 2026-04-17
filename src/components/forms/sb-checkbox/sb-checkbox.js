import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-checkbox.css?inline';

export class SbCheckbox extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    name: { type: String },
    value: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.name = '';
    this.value = '';
  }

  handleChange = (event) => {
    this.checked = event.target.checked;
    this.dispatchEvent(
      new CustomEvent('sb-change', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    return html`
      <label class="wrapper" data-disabled=${this.disabled}>
        <input
          type="checkbox"
          name=${this.name}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="box" aria-hidden="true">
          <svg class="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M3 8l3.5 3.5L13 5" />
          </svg>
        </span>
        <span><slot></slot></span>
      </label>
    `;
  }
}

customElements.define('sb-checkbox', SbCheckbox);
