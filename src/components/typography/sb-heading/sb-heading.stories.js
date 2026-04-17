import { html } from 'lit';
import './sb-heading.js';

export default {
  title: 'Typography/Heading',
  argTypes: {
    level: { control: { type: 'inline-radio' }, options: [1, 2, 3, 4, 5, 6] },
    label: { control: 'text' },
  },
  args: { level: 1, label: 'The quick brown fox' },
};

const Template = ({ level, label }) => html`
  <sb-heading level=${level}>${label}</sb-heading>
`;

export const Level1 = Template.bind({});
Level1.args = { level: 1, label: 'Heading 1' };

export const Level2 = Template.bind({});
Level2.args = { level: 2, label: 'Heading 2' };

export const Level3 = Template.bind({});
Level3.args = { level: 3, label: 'Heading 3' };

export const AllLevels = () => html`
  <sb-heading level="1">Heading 1</sb-heading>
  <sb-heading level="2">Heading 2</sb-heading>
  <sb-heading level="3">Heading 3</sb-heading>
  <sb-heading level="4">Heading 4</sb-heading>
  <sb-heading level="5">Heading 5</sb-heading>
  <sb-heading level="6">Heading 6</sb-heading>
`;
