import { html } from 'lit';
import './sb-avatar.js';

export default {
  title: 'Display/Avatar',
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    src: { control: 'text' },
    initials: { control: 'text' },
  },
  args: { size: 'md', initials: 'FC' },
};

const Template = ({ size, src, initials }) => html`
  <sb-avatar size=${size} src=${src || ''} initials=${initials}></sb-avatar>
`;

export const Initials = Template.bind({});
Initials.args = { initials: 'FC' };

export const Image = Template.bind({});
Image.args = { src: 'https://github.com/FernandoCelmer.png', alt: 'Fernando Celmer' };

export const Sizes = () => html`
  <div style="display:flex; gap:1rem; align-items:center;">
    <sb-avatar size="sm" initials="SM"></sb-avatar>
    <sb-avatar size="md" initials="MD"></sb-avatar>
    <sb-avatar size="lg" initials="LG"></sb-avatar>
  </div>
`;
