import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-profile.css?inline';

export class SbProfile extends LitElement {
  static properties = {
    name: { type: String },
    role: { type: String },
    links: { type: Array },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.name = '';
    this.role = '';
    this.links = [];
  }

  render() {
    return html`
      <div class="about">
        <slot name="avatar"></slot>
        ${this.name ? html`<h1>${this.name}</h1>` : null}
        ${this.role ? html`<h2>${this.role}</h2>` : null}
        <slot></slot>
        ${this.links && this.links.length
          ? html`
              <ul>
                ${this.links.map(
                  (l) => html`<li><a href=${l.url}>${l.label}</a></li>`,
                )}
              </ul>
            `
          : null}
      </div>
    `;
  }
}

customElements.define('sb-profile', SbProfile);
