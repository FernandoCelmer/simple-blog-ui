import { LitElement, html, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import hljs from 'highlight.js/lib/common';
import styles from './sb-code.css?inline';

export class SbCode extends LitElement {
  static properties = {
    block: { type: Boolean, reflect: true },
    language: { type: String, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.block = false;
    this.language = '';
  }

  _highlight(raw) {
    if (!raw) return '';
    try {
      if (this.language && hljs.getLanguage(this.language)) {
        return hljs.highlight(raw, { language: this.language }).value;
      }
      return hljs.highlightAuto(raw).value;
    } catch {
      return raw;
    }
  }

  _getSlotText() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return this.textContent ?? '';
    const nodes = slot.assignedNodes({ flatten: true });
    return nodes.map((n) => n.textContent ?? '').join('');
  }

  firstUpdated() {
    if (this.block) this.requestUpdate();
  }

  render() {
    if (!this.block) {
      return html`<code><slot></slot></code>`;
    }
    const raw = this._getSlotText().replace(/^\n+|\s+$/g, '');
    const highlighted = this._highlight(raw);
    return html`<pre><code class="hljs">${unsafeHTML(highlighted || raw)}</code></pre>
      <span style="display:none"><slot></slot></span>`;
  }
}

customElements.define('sb-code', SbCode);
