import { html } from 'lit';
import './sb-tooltip.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Overlays/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    label: { control: 'text' },
  },
  args: { placement: 'top', label: 'Keyboard shortcut: K' },
};

const Template = ({ placement, label }) => html`
  <div style="padding: 6rem; display:flex; justify-content:center;">
    <sb-tooltip placement=${placement} label=${label}>
      <sb-button>Hover me</sb-button>
    </sb-tooltip>
  </div>
`;

export const Top = Template.bind({});
Top.args = { placement: 'top' };

export const Bottom = Template.bind({});
Bottom.args = { placement: 'bottom' };

export const Left = Template.bind({});
Left.args = { placement: 'left' };

export const Right = Template.bind({});
Right.args = { placement: 'right' };
