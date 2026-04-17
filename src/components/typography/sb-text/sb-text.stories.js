import { html } from 'lit';
import './sb-text.js';

export default {
  title: 'Typography/Text',
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['body', 'muted', 'small', 'italic'],
    },
    weight: { control: 'inline-radio', options: ['normal', 'bold'] },
  },
  args: { variant: 'body', weight: 'normal' },
};

const Template = ({ variant, weight }) => html`
  <sb-text variant=${variant} weight=${weight}>
    The quick brown fox jumps over the lazy dog.
  </sb-text>
`;

export const Body = Template.bind({});
Body.args = { variant: 'body' };

export const Muted = Template.bind({});
Muted.args = { variant: 'muted' };

export const Small = Template.bind({});
Small.args = { variant: 'small' };

export const Italic = Template.bind({});
Italic.args = { variant: 'italic' };

export const Bold = Template.bind({});
Bold.args = { weight: 'bold' };
