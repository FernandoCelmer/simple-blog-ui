import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-heading.css?inline';

export class SbHeading extends LitElement {
  static properties = {
    level: { type: Number },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.level = 1;
  }

  render() {
    const level = Math.min(Math.max(this.level, 1), 6);
    const tag = `h${level}`;
    return html`
      <div class="h" data-level=${level} role="heading" aria-level=${level}>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('sb-heading', SbHeading);
