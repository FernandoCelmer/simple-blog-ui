import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-text.css?inline';

export class SbText extends LitElement {
  static properties = {
    variant: { type: String },
    weight: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.variant = 'body';
    this.weight = 'normal';
  }

  render() {
    return html`
      <p data-variant=${this.variant} data-weight=${this.weight}>
        <slot></slot>
      </p>
    `;
  }
}

customElements.define('sb-text', SbText);
