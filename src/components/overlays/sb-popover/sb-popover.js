import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-popover.css?inline';

export class SbPopover extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    placement: { type: String, reflect: true },
    title: { type: String },
    trigger: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.open = false;
    this.placement = 'top';
    this.title = '';
    this.trigger = 'click';
  }

  connectedCallback() {
    super.connectedCallback();
    this._onDocClick = (event) => {
      if (!this.open) return;
      if (this.trigger !== 'click') return;
      if (!event.composedPath().includes(this)) this.open = false;
    };
    document.addEventListener('click', this._onDocClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._onDocClick);
    super.disconnectedCallback();
  }

  toggle = (event) => {
    if (this.trigger !== 'click') return;
    event.stopPropagation();
    this.open = !this.open;
  };

  show = () => {
    if (this.trigger === 'hover') this.open = true;
  };

  hide = () => {
    if (this.trigger === 'hover') this.open = false;
  };

  render() {
    return html`
      <span
        class="trigger-slot"
        @click=${this.toggle}
        @mouseenter=${this.show}
        @mouseleave=${this.hide}
      >
        <slot name="trigger"></slot>
      </span>
      <div class="bubble" role="dialog">
        ${this.title ? html`<div class="title">${this.title}</div>` : null}
        <div class="content"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('sb-popover', SbPopover);
