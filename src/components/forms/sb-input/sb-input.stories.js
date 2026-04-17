import { html } from 'lit';
import './sb-input.js';

export default {
  title: 'Forms/Input',
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'email', 'password', 'number', 'url', 'search'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    type: 'text',
    label: 'Email',
    placeholder: 'you@example.com',
    hint: '',
    error: '',
    disabled: false,
    invalid: false,
    required: false,
  },
};

const Template = (args) => html`
  <div style="max-width: 360px;">
    <sb-input
      type=${args.type}
      label=${args.label}
      placeholder=${args.placeholder}
      hint=${args.hint}
      error=${args.error}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
      ?required=${args.required}
    ></sb-input>
  </div>
`;

export const Basic = Template.bind({});

export const WithHint = Template.bind({});
WithHint.args = { hint: 'We never share your email.' };

export const Invalid = Template.bind({});
Invalid.args = { invalid: true, error: 'Invalid email address.' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Required = Template.bind({});
Required.args = { required: true };
