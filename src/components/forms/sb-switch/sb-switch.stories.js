import { html } from 'lit';
import './sb-switch.js';

export default {
  title: 'Forms/Switch',
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { checked: false, disabled: false, label: 'Enable notifications' },
};

const Template = ({ checked, disabled, label }) => html`
  <sb-switch ?checked=${checked} ?disabled=${disabled}>${label}</sb-switch>
`;

export const Off = Template.bind({});

export const On = Template.bind({});
On.args = { checked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledOn = Template.bind({});
DisabledOn.args = { disabled: true, checked: true };

export const Group = () => html`
  <div style="display:flex; flex-direction:column; gap:0.8rem;">
    <sb-switch checked>Dark mode</sb-switch>
    <sb-switch>Email notifications</sb-switch>
    <sb-switch>Push notifications</sb-switch>
    <sb-switch disabled>Beta features (coming soon)</sb-switch>
  </div>
`;
