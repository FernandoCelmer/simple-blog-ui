import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-tooltip.css?inline';

export class SbTooltip extends LitElement {
  static properties = {
    label: { type: String },
    placement: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.label = '';
    this.placement = 'top';
  }

  render() {
    return html`
      <slot></slot>
      <span class="bubble" role="tooltip">${this.label}</span>
    `;
  }
}

customElements.define('sb-tooltip', SbTooltip);
