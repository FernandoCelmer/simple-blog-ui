import { html } from 'lit';
import './sb-card.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Display/Card',
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { padding: 'md' },
};

export const Basic = ({ padding }) => html`
  <sb-card padding=${padding} style="max-width: 400px;">
    The body of the card goes here. Plain monospace text, 2px border, no rounded corners.
  </sb-card>
`;

export const WithHeader = ({ padding }) => html`
  <sb-card padding=${padding} style="max-width: 400px;">
    <span slot="header">Article title</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </sb-card>
`;

export const WithHeaderAndFooter = ({ padding }) => html`
  <sb-card padding=${padding} style="max-width: 400px;">
    <span slot="header">Post preview</span>
    Full article body would go here — the card body respects the blog's line height.
    <sb-button slot="footer" size="sm">Read more</sb-button>
  </sb-card>
`;
