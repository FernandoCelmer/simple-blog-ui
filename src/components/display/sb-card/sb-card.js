import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-card.css?inline';

export class SbCard extends LitElement {
  static properties = {
    padding: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.padding = 'md';
  }

  render() {
    return html`
      <div class="header"><slot name="header"></slot></div>
      <div class="body"><slot></slot></div>
      <div class="footer"><slot name="footer"></slot></div>
    `;
  }
}

customElements.define('sb-card', SbCard);
