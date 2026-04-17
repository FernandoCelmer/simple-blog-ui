import { html } from 'lit';
import './sb-stack.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Layout/Stack',
  argTypes: {
    direction: { control: 'inline-radio', options: ['row', 'column'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end', 'stretch'] },
    justify: { control: 'inline-radio', options: ['start', 'center', 'end', 'between', 'around'] },
    gap: { control: 'inline-radio', options: ['1', '2', '3', '4', '5', '6'] },
    wrap: { control: 'boolean' },
  },
  args: { direction: 'row', align: 'center', justify: 'start', gap: '3', wrap: false },
};

const Template = (args) => html`
  <sb-stack
    direction=${args.direction}
    align=${args.align}
    justify=${args.justify}
    gap=${args.gap}
    ?wrap=${args.wrap}
  >
    <sb-button>One</sb-button>
    <sb-button variant="secondary">Two</sb-button>
    <sb-button variant="ghost">Three</sb-button>
  </sb-stack>
`;

export const Row = Template.bind({});
Row.args = { direction: 'row' };

export const Column = Template.bind({});
Column.args = { direction: 'column', align: 'start' };
