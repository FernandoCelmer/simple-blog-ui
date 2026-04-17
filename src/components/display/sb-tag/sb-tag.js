import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-tag.css?inline';

export class SbTag extends LitElement {
  static properties = {
    removable: { type: Boolean },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.removable = false;
  }

  handleRemove = () => {
    this.dispatchEvent(
      new CustomEvent('sb-remove', { bubbles: true, composed: true }),
    );
  };

  render() {
    return html`
      <span class="tag">
        <slot></slot>
        ${this.removable
          ? html`<button class="close" aria-label="Remove" @click=${this.handleRemove}>×</button>`
          : null}
      </span>
    `;
  }
}

customElements.define('sb-tag', SbTag);
