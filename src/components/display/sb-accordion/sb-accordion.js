import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-accordion.css?inline';

export class SbAccordion extends LitElement {
  static properties = {
    items: { type: Array },
    multiple: { type: Boolean },
    openIds: { type: Array, state: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.items = [];
    this.multiple = false;
    this.openIds = [];
  }

  toggle(id) {
    const isOpen = this.openIds.includes(id);
    if (this.multiple) {
      this.openIds = isOpen
        ? this.openIds.filter((x) => x !== id)
        : [...this.openIds, id];
    } else {
      this.openIds = isOpen ? [] : [id];
    }
    this.dispatchEvent(
      new CustomEvent('sb-change', {
        detail: { openIds: this.openIds },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      ${this.items.map((item) => {
        const expanded = this.openIds.includes(item.id);
        return html`
          <div class="item">
            <button
              class="header"
              aria-expanded=${expanded}
              @click=${() => this.toggle(item.id)}
            >
              <span>${item.title}</span>
              <span class="arrow">›</span>
            </button>
            ${expanded
              ? html`<div class="panel">
                  <slot name=${item.id}>${item.content ?? ''}</slot>
                </div>`
              : null}
          </div>
        `;
      })}
    `;
  }
}

customElements.define('sb-accordion', SbAccordion);
