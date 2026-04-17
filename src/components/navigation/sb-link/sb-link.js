import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-link.css?inline';

export class SbLink extends LitElement {
  static properties = {
    href: { type: String },
    target: { type: String },
    rel: { type: String },
    variant: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.href = '#';
    this.target = '';
    this.rel = '';
    this.variant = 'text';
  }

  render() {
    return html`
      <a
        href=${this.href}
        target=${this.target || '_self'}
        rel=${this.rel}
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('sb-link', SbLink);
