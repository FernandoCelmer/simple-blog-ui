import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-textarea.css?inline';

export class SbTextarea extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    placeholder: { type: String },
    name: { type: String },
    hint: { type: String },
    error: { type: String },
    rows: { type: Number },
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
    this.name = '';
    this.hint = '';
    this.error = '';
    this.rows = 4;
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

  render() {
    const showError = this.error && this.invalid;
    const id = `sb-textarea-${Math.random().toString(36).slice(2, 8)}`;
    return html`
      <div class="wrapper">
        ${this.label
          ? html`<label for=${id}>${this.label}${this.required ? ' *' : ''}</label>`
          : null}
        <textarea
          id=${id}
          name=${this.name}
          rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
        ></textarea>
        ${showError
          ? html`<span class="hint" data-state="error">${this.error}</span>`
          : this.hint
            ? html`<span class="hint">${this.hint}</span>`
            : null}
      </div>
    `;
  }
}

customElements.define('sb-textarea', SbTextarea);
