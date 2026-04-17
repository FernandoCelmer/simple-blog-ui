import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-list-group.css?inline';

export class SbListGroup extends LitElement {
  static properties = {
    items: { type: Array },
    active: { type: String },
    interactive: { type: Boolean },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.items = [];
    this.active = '';
    this.interactive = false;
  }

  handleClick(item) {
    if (!this.interactive || item.disabled) return;
    this.active = item.id;
    this.dispatchEvent(
      new CustomEvent('sb-select', {
        detail: { id: item.id, item },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      ${this.items.map(
        (item) => html`
          <div
            class="item"
            data-interactive=${this.interactive}
            aria-current=${this.active === item.id}
            aria-disabled=${!!item.disabled}
            @click=${() => this.handleClick(item)}
          >
            <span>${item.label}</span>
            ${item.meta ? html`<span>${item.meta}</span>` : null}
          </div>
        `,
      )}
    `;
  }
}

customElements.define('sb-list-group', SbListGroup);
