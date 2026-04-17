import { html } from 'lit';
import './sb-popover.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Overlays/Popover',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    trigger: { control: 'inline-radio', options: ['click', 'hover'] },
    title: { control: 'text' },
  },
  args: { placement: 'top', trigger: 'click', title: 'Heads up' },
};

const Template = (args) => html`
  <div style="padding: 6rem; display:flex; justify-content:center;">
    <sb-popover placement=${args.placement} trigger=${args.trigger} title=${args.title}>
      <sb-button slot="trigger">${args.trigger === 'hover' ? 'Hover me' : 'Click me'}</sb-button>
      Popovers can hold richer content — a title, multiple paragraphs, links.
    </sb-popover>
  </div>
`;

export const Click = Template.bind({});

export const Hover = Template.bind({});
Hover.args = { trigger: 'hover' };

export const Bottom = Template.bind({});
Bottom.args = { placement: 'bottom' };
