import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-switch.css?inline';

export class SbSwitch extends LitElement {
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
          role="switch"
          name=${this.name}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="track" aria-hidden="true">
          <span class="thumb"></span>
        </span>
        <span><slot></slot></span>
      </label>
    `;
  }
}

customElements.define('sb-switch', SbSwitch);
