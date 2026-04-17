import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-tabs.css?inline';

export class SbTabs extends LitElement {
  static properties = {
    tabs: { type: Array },
    active: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.tabs = [];
    this.active = '';
  }

  updated(changed) {
    if (changed.has('tabs') && !this.active && this.tabs.length) {
      this.active = this.tabs[0].id;
    }
  }

  select(id) {
    this.active = id;
    this.dispatchEvent(
      new CustomEvent('sb-tab-change', {
        detail: { id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="tablist" role="tablist">
        ${this.tabs.map(
          (tab) => html`
            <button
              class="tab"
              role="tab"
              aria-selected=${this.active === tab.id}
              @click=${() => this.select(tab.id)}
            >
              ${tab.label}
            </button>
          `,
        )}
      </div>
      <div class="panel" role="tabpanel">
        <slot name=${this.active}></slot>
      </div>
    `;
  }
}

customElements.define('sb-tabs', SbTabs);
