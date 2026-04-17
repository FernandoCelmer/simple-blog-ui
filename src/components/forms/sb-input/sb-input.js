import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-input.css?inline';

export class SbInput extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    placeholder: { type: String },
    type: { type: String },
    name: { type: String },
    hint: { type: String },
    error: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.placeholder = '';
    this.type = 'text';
    this.name = '';
    this.hint = '';
    this.error = '';
    this.disabled = false;
    this.invalid = false;
    this.required = false;
  }

  handleInput = (event) => {
    this.value = event.target.value;
    this.dispatchEvent(
      new CustomEvent('sb-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  handleChange = (event) => {
    this.dispatchEvent(
      new CustomEvent('sb-change', {
        detail: { value: event.target.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    const showError = this.error && this.invalid;
    const inputId = `sb-input-${Math.random().toString(36).slice(2, 8)}`;
    return html`
      <div class="wrapper">
        ${this.label
          ? html`<label for=${inputId}>${this.label}${this.required ? ' *' : ''}</label>`
          : null}
        <input
          id=${inputId}
          type=${this.type}
          name=${this.name}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        />
        ${showError
          ? html`<span class="hint" data-state="error">${this.error}</span>`
          : this.hint
            ? html`<span class="hint">${this.hint}</span>`
            : null}
      </div>
    `;
  }
}

customElements.define('sb-input', SbInput);
