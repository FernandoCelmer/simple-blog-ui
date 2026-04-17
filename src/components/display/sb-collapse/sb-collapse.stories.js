import { html } from 'lit';
import './sb-collapse.js';

export default {
  title: 'Display/Collapse',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    open: { control: 'boolean' },
  },
  args: { label: 'Show details', open: false },
};

const Template = ({ label, open }) => html`
  <sb-collapse label=${label} ?open=${open}>
    Hidden content appears here when the collapse is open. It respects the
    blog's monospace style and left border.
  </sb-collapse>
`;

export const Closed = Template.bind({});

export const OpenByDefault = Template.bind({});
OpenByDefault.args = { open: true };
