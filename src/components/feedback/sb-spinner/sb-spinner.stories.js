import { html } from 'lit';
import './sb-spinner.js';

export default {
  title: 'Feedback/Spinner',
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
  args: { size: 'md', label: 'Loading' },
};

const Template = ({ size, label }) => html`
  <sb-spinner size=${size} label=${label}></sb-spinner>
`;

export const Medium = Template.bind({});

export const Sizes = () => html`
  <div style="display:flex; gap:1.6rem; align-items:center;">
    <sb-spinner size="sm"></sb-spinner>
    <sb-spinner size="md"></sb-spinner>
    <sb-spinner size="lg"></sb-spinner>
  </div>
`;
