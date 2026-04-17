import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-progress.css?inline';

export class SbProgress extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    variant: { type: String },
    striped: { type: Boolean, reflect: true },
    showLabel: { type: Boolean, attribute: 'show-label' },
    label: { type: String },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.variant = 'default';
    this.striped = false;
    this.showLabel = false;
    this.label = '';
  }

  render() {
    const pct = Math.min(Math.max((this.value / this.max) * 100, 0), 100);
    return html`
      ${this.showLabel
        ? html`<div class="label">
            <span>${this.label || 'Progress'}</span>
            <span>${Math.round(pct)}%</span>
          </div>`
        : null}
      <div
        class="track"
        role="progressbar"
        aria-valuenow=${this.value}
        aria-valuemin="0"
        aria-valuemax=${this.max}
      >
        <div
          class="bar"
          data-variant=${this.variant}
          ?data-striped=${this.striped}
          style="width: ${pct}%"
        ></div>
      </div>
    `;
  }
}

customElements.define('sb-progress', SbProgress);
