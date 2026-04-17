import { html } from 'lit';
import './sb-offcanvas.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Overlays/Offcanvas',
  argTypes: {
    placement: { control: 'inline-radio', options: ['left', 'right', 'top', 'bottom'] },
    title: { control: 'text' },
  },
  args: { placement: 'right', title: 'Filters' },
};

const Template = (args) => {
  const open = () => document.querySelector('#demo-oc').show();
  return html`
    <sb-button @click=${open}>Open ${args.placement}</sb-button>
    <sb-offcanvas id="demo-oc" placement=${args.placement} title=${args.title}>
      <p>Offcanvas content. Click the × or press Esc to close.</p>
      <p>Slides in from the ${args.placement} edge.</p>
    </sb-offcanvas>
  `;
};

export const Right = Template.bind({});

export const Left = Template.bind({});
Left.args = { placement: 'left' };

export const Top = Template.bind({});
Top.args = { placement: 'top' };

export const Bottom = Template.bind({});
Bottom.args = { placement: 'bottom' };
