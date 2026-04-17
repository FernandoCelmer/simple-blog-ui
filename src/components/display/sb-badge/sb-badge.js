import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-badge.css?inline';

export class SbBadge extends LitElement {
  static properties = {
    variant: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.variant = 'solid';
  }

  render() {
    return html`
      <span class="badge" data-variant=${this.variant}>
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('sb-badge', SbBadge);
