import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-stack.css?inline';

export class SbStack extends LitElement {
  static properties = {
    direction: { type: String, reflect: true },
    align: { type: String, reflect: true },
    justify: { type: String, reflect: true },
    gap: { type: String, reflect: true },
    wrap: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.direction = 'column';
    this.align = 'stretch';
    this.justify = 'start';
    this.gap = '3';
    this.wrap = false;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('sb-stack', SbStack);
