import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-container.css?inline';

export class SbContainer extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.size = 'lg';
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('sb-container', SbContainer);
