import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-divider.css?inline';

export class SbDivider extends LitElement {
  static properties = {
    orientation: { type: String, reflect: true },
    thin: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.orientation = 'horizontal';
    this.thin = false;
  }

  render() {
    return html``;
  }
}

customElements.define('sb-divider', SbDivider);
