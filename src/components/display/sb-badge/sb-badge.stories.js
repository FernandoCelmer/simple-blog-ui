import { html } from 'lit';
import './sb-badge.js';

export default {
  title: 'Display/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline', 'success', 'warning', 'danger', 'info'],
    },
    label: { control: 'text' },
  },
  args: { variant: 'solid', label: 'New' },
};

const Template = ({ variant, label }) => html`
  <sb-badge variant=${variant}>${label}</sb-badge>
`;

export const Solid = Template.bind({});
Solid.args = { variant: 'solid', label: 'Solid' };

export const Outline = Template.bind({});
Outline.args = { variant: 'outline', label: 'Outline' };

export const Semantic = () => html`
  <div style="display:flex; gap:0.8rem;">
    <sb-badge variant="success">Success</sb-badge>
    <sb-badge variant="warning">Warning</sb-badge>
    <sb-badge variant="danger">Danger</sb-badge>
    <sb-badge variant="info">Info</sb-badge>
  </div>
`;
