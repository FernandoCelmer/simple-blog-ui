import { html } from 'lit';
import './sb-link.js';

export default {
  title: 'Navigation/Link',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['text', 'nav', 'muted'] },
    href: { control: 'text' },
    label: { control: 'text' },
  },
  args: { variant: 'text', href: '#', label: 'Read more' },
};

const Template = ({ variant, href, label }) => html`
  <sb-link variant=${variant} href=${href}>${label}</sb-link>
`;

export const Text = Template.bind({});
Text.args = { variant: 'text', label: 'Read the full post' };

export const Nav = Template.bind({});
Nav.args = { variant: 'nav', label: 'About' };

export const Muted = Template.bind({});
Muted.args = { variant: 'muted', label: 'archive' };

export const Inline = () => html`
  <p style="font-family:'Fira Mono',monospace;">
    This is a paragraph with an <sb-link href="#">inline link</sb-link> inside it.
  </p>
`;
