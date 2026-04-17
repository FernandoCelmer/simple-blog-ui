import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-button-group.css?inline';

export class SbButtonGroup extends LitElement {
  static properties = {
    orientation: { type: String, reflect: true },
    label: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.orientation = 'horizontal';
    this.label = '';
  }

  render() {
    return html`
      <div role="group" aria-label=${this.label}>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('sb-button-group', SbButtonGroup);
