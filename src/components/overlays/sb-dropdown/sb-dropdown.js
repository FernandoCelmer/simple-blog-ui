import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-dropdown.css?inline';

export class SbDropdown extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    align: { type: String, reflect: true },
    items: { type: Array },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.align = 'left';
    this.items = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._onDocClick = (event) => {
      if (!this.open) return;
      if (!this.contains(event.target) && !event.composedPath().includes(this)) {
        this.open = false;
      }
    };
    document.addEventListener('click', this._onDocClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._onDocClick);
    super.disconnectedCallback();
  }

  toggle = (event) => {
    event.stopPropagation();
    this.open = !this.open;
  };

  select(item) {
    if (item.disabled) return;
    this.open = false;
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
      <span class="trigger-slot" @click=${this.toggle}>
        <slot name="trigger"></slot>
      </span>
      <ul class="menu" role="menu">
        ${this.items.map(
          (item) => html`
            <li
              class="item"
              role="menuitem"
              tabindex="0"
              aria-disabled=${!!item.disabled}
              @click=${() => this.select(item)}
            >
              ${item.label}
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('sb-dropdown', SbDropdown);
