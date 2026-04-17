import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-avatar.css?inline';

export class SbAvatar extends LitElement {
  static properties = {
    src: { type: String },
    alt: { type: String },
    size: { type: String },
    initials: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.size = 'md';
    this.initials = '';
  }

  render() {
    return html`
      <div class="avatar" data-size=${this.size}>
        ${this.src
          ? html`<img src=${this.src} alt=${this.alt} />`
          : html`<span>${this.initials}</span>`}
      </div>
    `;
  }
}

customElements.define('sb-avatar', SbAvatar);
