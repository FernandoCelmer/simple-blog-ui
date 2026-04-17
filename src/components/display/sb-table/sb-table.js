import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-table.css?inline';

export class SbTable extends LitElement {
  static properties = {
    columns: { type: Array },
    rows: { type: Array },
    striped: { type: Boolean, reflect: true },
    compact: { type: Boolean, reflect: true },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.columns = [];
    this.rows = [];
    this.striped = false;
    this.compact = false;
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(
              (col) => html`
                <th style=${col.align ? `text-align: ${col.align}` : ''}>
                  ${col.label}
                </th>
              `,
            )}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(
            (row) => html`
              <tr>
                ${this.columns.map(
                  (col) => html`
                    <td style=${col.align ? `text-align: ${col.align}` : ''}>
                      ${row[col.id]}
                    </td>
                  `,
                )}
              </tr>
            `,
          )}
        </tbody>
      </table>
    `;
  }
}

customElements.define('sb-table', SbTable);
