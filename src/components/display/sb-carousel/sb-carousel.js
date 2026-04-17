import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-carousel.css?inline';

export class SbCarousel extends LitElement {
  static properties = {
    index: { type: Number },
    total: { type: Number },
    interval: { type: Number },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.index = 0;
    this.total = 0;
    this.interval = 0;
    this._timer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateTotal();
    this._startAuto();
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    super.disconnectedCallback();
  }

  _updateTotal() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      this.total = slot.assignedElements().length;
    }
  }

  _startAuto() {
    clearInterval(this._timer);
    if (this.interval > 0) {
      this._timer = setInterval(() => this.next(), this.interval);
    }
  }

  updated(changed) {
    if (changed.has('interval')) this._startAuto();
  }

  go(i) {
    if (this.total === 0) return;
    this.index = (i + this.total) % this.total;
    this.dispatchEvent(
      new CustomEvent('sb-slide', {
        detail: { index: this.index },
        bubbles: true,
        composed: true,
      }),
    );
  }

  prev = () => this.go(this.index - 1);
  next = () => this.go(this.index + 1);

  render() {
    const offset = -this.index * 100;
    return html`
      <div class="track" style="transform: translateX(${offset}%)">
        <slot @slotchange=${this._updateTotal}></slot>
      </div>
      <button class="control prev" aria-label="Previous" @click=${this.prev}>‹</button>
      <button class="control next" aria-label="Next" @click=${this.next}>›</button>
      <div class="indicators">
        ${Array.from({ length: this.total }).map(
          (_, i) => html`
            <button
              class="dot"
              aria-label="Go to slide ${i + 1}"
              aria-current=${i === this.index}
              @click=${() => this.go(i)}
            ></button>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('sb-carousel', SbCarousel);
