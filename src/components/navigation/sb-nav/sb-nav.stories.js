import { html } from 'lit';
import './sb-nav.js';

export default {
  title: 'Navigation/Nav',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    variant: { control: 'inline-radio', options: ['solid', 'underline'] },
    active: { control: 'text' },
  },
  args: { orientation: 'horizontal', variant: 'solid', active: 'posts' },
};

const items = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'posts', label: 'Posts', href: '/posts' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const Template = (args) => html`
  <sb-nav
    .items=${items}
    active=${args.active}
    orientation=${args.orientation}
    variant=${args.variant}
  ></sb-nav>
`;

export const Horizontal = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = { orientation: 'vertical' };

export const Underline = Template.bind({});
Underline.args = { variant: 'underline' };
