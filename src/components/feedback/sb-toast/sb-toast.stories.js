import { html } from 'lit';
import './sb-toast.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Feedback/Toast',
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
    placement: {
      control: 'inline-radio',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    variant: 'default',
    placement: 'top-right',
    title: 'Notification',
    body: 'Your changes have been saved.',
  },
};

export const Basic = (args) => {
  const openToast = () => document.querySelector('#demo-toast').show();
  return html`
    <sb-button @click=${openToast}>Show toast</sb-button>
    <sb-toast
      id="demo-toast"
      title=${args.title}
      variant=${args.variant}
      placement=${args.placement}
      duration="3000"
    >
      ${args.body}
    </sb-toast>
  `;
};

export const Variants = () => html`
  <div style="display:flex; gap:0.8rem; flex-wrap:wrap;">
    <sb-button @click=${() => document.querySelector('#t-success').show()}>Success</sb-button>
    <sb-button @click=${() => document.querySelector('#t-warning').show()}>Warning</sb-button>
    <sb-button @click=${() => document.querySelector('#t-danger').show()}>Danger</sb-button>
    <sb-button @click=${() => document.querySelector('#t-info').show()}>Info</sb-button>
    <sb-toast id="t-success" title="Success" variant="success" duration="2500">Saved.</sb-toast>
    <sb-toast id="t-warning" title="Warning" variant="warning" duration="2500">Check config.</sb-toast>
    <sb-toast id="t-danger" title="Error" variant="danger" duration="2500">Failed.</sb-toast>
    <sb-toast id="t-info" title="Info" variant="info" duration="2500">New version.</sb-toast>
  </div>
`;
