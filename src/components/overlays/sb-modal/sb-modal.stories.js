import { html } from 'lit';
import './sb-modal.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Overlays/Modal',
};

export const Basic = () => {
  const onOpen = () => document.querySelector('#demo-modal').show();
  return html`
    <sb-button @click=${onOpen}>Open modal</sb-button>
    <sb-modal id="demo-modal" title="Confirm action">
      <p>
        This is the body of the modal. It inherits the blog's monospace style,
        2px borders, and no rounded corners.
      </p>
      <sb-button
        slot="footer"
        variant="secondary"
        size="sm"
        @click=${() => document.querySelector('#demo-modal').close()}
      >
        Cancel
      </sb-button>
      <sb-button
        slot="footer"
        size="sm"
        @click=${() => document.querySelector('#demo-modal').close()}
      >
        Confirm
      </sb-button>
    </sb-modal>
  `;
};
