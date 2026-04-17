import { html } from 'lit';
import './sb-icon-button.js';

export default {
  title: 'Actions/IconButton',
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline', 'ghost'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
    label: 'Menu',
  },
};

const Template = ({ variant, size, disabled, label }) => html`
  <sb-icon-button variant=${variant} size=${size} ?disabled=${disabled} label=${label}>
    <span aria-hidden="true">+</span>
  </sb-icon-button>
`;

export const Outline = Template.bind({});
Outline.args = { variant: 'outline' };

export const Solid = Template.bind({});
Solid.args = { variant: 'solid' };

export const Ghost = Template.bind({});
Ghost.args = { variant: 'ghost' };

export const Sizes = () => html`
  <div style="display:flex; gap:1rem; align-items:center;">
    <sb-icon-button size="sm" label="small">+</sb-icon-button>
    <sb-icon-button size="md" label="medium">+</sb-icon-button>
    <sb-icon-button size="lg" label="large">+</sb-icon-button>
  </div>
`;
