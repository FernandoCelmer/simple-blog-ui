import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-alert.css?inline';

export class SbAlert extends LitElement {
  static properties = {
    variant: { type: String },
    title: { type: String },
    dismissible: { type: Boolean },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.variant = 'info';
    this.title = '';
    this.dismissible = false;
  }

  handleDismiss = () => {
    this.dispatchEvent(
      new CustomEvent('sb-dismiss', { bubbles: true, composed: true }),
    );
  };

  render() {
    return html`
      <div class="alert" data-variant=${this.variant} role="alert">
        ${this.title ? html`<span class="title">${this.title}</span>` : null}
        <span><slot></slot></span>
        ${this.dismissible
          ? html`<button class="close" aria-label="Dismiss" @click=${this.handleDismiss}>×</button>`
          : null}
      </div>
    `;
  }
}

customElements.define('sb-alert', SbAlert);
