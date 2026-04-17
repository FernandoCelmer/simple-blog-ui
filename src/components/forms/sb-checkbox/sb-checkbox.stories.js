import { html } from 'lit';
import './sb-checkbox.js';

export default {
  title: 'Forms/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { checked: false, disabled: false, label: 'Subscribe to newsletter' },
};

const Template = ({ checked, disabled, label }) => html`
  <sb-checkbox ?checked=${checked} ?disabled=${disabled}>${label}</sb-checkbox>
`;

export const Unchecked = Template.bind({});

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { disabled: true, checked: true };

export const Group = () => html`
  <div style="display:flex; flex-direction:column; gap:0.8rem;">
    <sb-checkbox checked>JavaScript</sb-checkbox>
    <sb-checkbox>Python</sb-checkbox>
    <sb-checkbox>Rust</sb-checkbox>
    <sb-checkbox disabled>Go (coming soon)</sb-checkbox>
  </div>
`;
