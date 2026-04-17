import { html } from 'lit';
import './sb-textarea.js';

export default {
  title: 'Forms/Textarea',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    rows: { control: { type: 'number', min: 2, max: 20 } },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Comments',
    placeholder: 'Write your thoughts here...',
    hint: '',
    error: '',
    rows: 4,
    disabled: false,
    invalid: false,
    required: false,
  },
};

const Template = (args) => html`
  <div style="max-width: 480px;">
    <sb-textarea
      label=${args.label}
      placeholder=${args.placeholder}
      hint=${args.hint}
      error=${args.error}
      rows=${args.rows}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
      ?required=${args.required}
    ></sb-textarea>
  </div>
`;

export const Basic = Template.bind({});

export const WithHint = Template.bind({});
WithHint.args = { hint: 'Markdown is supported.' };

export const Invalid = Template.bind({});
Invalid.args = { invalid: true, error: 'Comment cannot be empty.' };
