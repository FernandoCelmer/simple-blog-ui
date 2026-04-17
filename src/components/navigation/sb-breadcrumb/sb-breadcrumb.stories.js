import { html } from 'lit';
import './sb-breadcrumb.js';

export default {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
  args: { separator: '/' },
};

const items = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Post title' },
];

export const Basic = ({ separator }) => html`
  <sb-breadcrumb .items=${items} separator=${separator}></sb-breadcrumb>
`;

export const ArrowSeparator = () => html`
  <sb-breadcrumb .items=${items} separator="›"></sb-breadcrumb>
`;
