import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-page-layout.css?inline';

export class SbPageLayout extends LitElement {
  static properties = {
    noSidebar: { type: Boolean, attribute: 'no-sidebar', reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.noSidebar = false;
  }

  render() {
    return html`
      <slot name="header"></slot>
      <div class="grid">
        <aside class="sidebar"><slot name="sidebar"></slot></aside>
        <div class="content"><slot></slot></div>
      </div>
      <slot name="footer"></slot>
    `;
  }
}

customElements.define('sb-page-layout', SbPageLayout);
