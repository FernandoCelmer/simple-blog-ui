import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-footer.css?inline';

export class SbFooter extends LitElement {
  static styles = [unsafeCSS(styles)];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('sb-footer', SbFooter);
