import { html } from 'lit';
import './sb-alert.js';

export default {
  title: 'Feedback/Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['info', 'success', 'warning', 'danger'],
    },
    title: { control: 'text' },
    body: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: {
    variant: 'info',
    title: 'Heads up',
    body: 'Something you should know.',
    dismissible: false,
  },
};

const Template = ({ variant, title, body, dismissible }) => html`
  <sb-alert variant=${variant} title=${title} ?dismissible=${dismissible}>
    ${body}
  </sb-alert>
`;

export const Info = Template.bind({});
Info.args = { variant: 'info', title: 'Info', body: 'New post coming soon.' };

export const Success = Template.bind({});
Success.args = { variant: 'success', title: 'Saved', body: 'Your changes were saved.' };

export const Warning = Template.bind({});
Warning.args = { variant: 'warning', title: 'Careful', body: 'This action may take a while.' };

export const Danger = Template.bind({});
Danger.args = { variant: 'danger', title: 'Error', body: 'Something went wrong.' };

export const Dismissible = Template.bind({});
Dismissible.args = { dismissible: true };
