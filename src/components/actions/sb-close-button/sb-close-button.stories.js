import { html } from 'lit';
import './sb-close-button.js';

export default {
  title: 'Actions/CloseButton',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    inverse: { control: 'boolean' },
  },
  args: { label: 'Close', disabled: false, inverse: false },
};

const Template = (args) => html`
  <sb-close-button
    label=${args.label}
    ?disabled=${args.disabled}
    ?inverse=${args.inverse}
  ></sb-close-button>
`;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Inverse = () => html`
  <div style="background: #000; padding: 1.6rem; display: inline-block;">
    <sb-close-button inverse></sb-close-button>
  </div>
`;
