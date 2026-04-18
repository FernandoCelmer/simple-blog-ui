import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-error-page.css?inline';

export class SbErrorPage extends LitElement {
  static properties = {
    code: { type: String },
    message: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.code = '404';
    this.message = 'Page not found';
  }

  render() {
    return html`
      <div class="error">
        <h1>${this.code}</h1>
        <h2>${this.message}</h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('sb-error-page', SbErrorPage);
