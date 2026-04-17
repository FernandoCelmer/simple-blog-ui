import { html } from 'lit';
import './sb-progress.js';

export default {
  title: 'Feedback/Progress',
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
    striped: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { value: 60, variant: 'default', striped: false, showLabel: false, label: '' },
};

const Template = (args) => html`
  <sb-progress
    value=${args.value}
    variant=${args.variant}
    ?striped=${args.striped}
    ?show-label=${args.showLabel}
    label=${args.label}
  ></sb-progress>
`;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = { showLabel: true, label: 'Uploading' };

export const Striped = Template.bind({});
Striped.args = { striped: true, variant: 'success' };

export const Semantic = () => html`
  <div style="display:flex; flex-direction:column; gap:1rem;">
    <sb-progress value="25" variant="info"></sb-progress>
    <sb-progress value="50" variant="success"></sb-progress>
    <sb-progress value="75" variant="warning"></sb-progress>
    <sb-progress value="90" variant="danger"></sb-progress>
  </div>
`;
