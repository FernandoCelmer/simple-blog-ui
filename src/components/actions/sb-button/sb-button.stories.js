import { html } from 'lit';
import './sb-button.js';

export default {
  title: 'Actions/Button',
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    label: 'Click me',
  },
};

const Template = ({ variant, size, disabled, label }) => html`
  <sb-button variant=${variant} size=${size} ?disabled=${disabled}>
    ${label}
  </sb-button>
`;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', label: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', label: 'Secondary' };

export const Ghost = Template.bind({});
Ghost.args = { variant: 'ghost', label: 'Ghost' };

export const Danger = Template.bind({});
Danger.args = { variant: 'danger', label: 'Danger' };

export const Sizes = () => html`
  <div style="display:flex; gap:1rem; align-items:center;">
    <sb-button size="sm">Small</sb-button>
    <sb-button size="md">Medium</sb-button>
    <sb-button size="lg">Large</sb-button>
  </div>
`;

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, label: 'Disabled' };
