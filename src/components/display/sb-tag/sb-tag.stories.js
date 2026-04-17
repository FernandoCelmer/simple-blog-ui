import { html } from 'lit';
import './sb-tag.js';

export default {
  title: 'Display/Tag',
  argTypes: {
    removable: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { removable: false, label: 'design' },
};

const Template = ({ removable, label }) => html`
  <sb-tag ?removable=${removable}>${label}</sb-tag>
`;

export const Basic = Template.bind({});
Basic.args = { label: 'javascript' };

export const Removable = Template.bind({});
Removable.args = { label: 'typescript', removable: true };

export const Group = () => html`
  <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
    <sb-tag>javascript</sb-tag>
    <sb-tag>web-components</sb-tag>
    <sb-tag removable>lit</sb-tag>
    <sb-tag removable>vite</sb-tag>
  </div>
`;
