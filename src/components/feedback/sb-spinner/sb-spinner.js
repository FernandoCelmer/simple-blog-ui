import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-spinner.css?inline';

export class SbSpinner extends LitElement {
  static properties = {
    size: { type: String },
    label: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.size = 'md';
    this.label = 'Loading';
  }

  render() {
    return html`
      <span
        class="spinner"
        data-size=${this.size}
        role="status"
        aria-label=${this.label}
      ></span>
    `;
  }
}

customElements.define('sb-spinner', SbSpinner);
