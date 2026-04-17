import { html } from 'lit';
import './sb-button-group.js';
import '../sb-button/sb-button.js';

export default {
  title: 'Actions/ButtonGroup',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
};

const Template = ({ orientation }) => html`
  <sb-button-group orientation=${orientation} label="Text formatting">
    <sb-button variant="secondary">Left</sb-button>
    <sb-button variant="secondary">Center</sb-button>
    <sb-button variant="secondary">Right</sb-button>
  </sb-button-group>
`;

export const Horizontal = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = { orientation: 'vertical' };
