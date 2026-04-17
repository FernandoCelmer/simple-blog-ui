import { html } from 'lit';
import './sb-list-group.js';

export default {
  title: 'Display/ListGroup',
  tags: ['autodocs'],
  argTypes: {
    interactive: { control: 'boolean' },
    active: { control: 'text' },
  },
  args: { interactive: false, active: '' },
};

const items = [
  { id: 'a', label: 'First post', meta: '2d ago' },
  { id: 'b', label: 'Second post', meta: '5d ago' },
  { id: 'c', label: 'Third post', meta: '1w ago' },
  { id: 'd', label: 'Archived', disabled: true },
];

const Template = (args) => html`
  <sb-list-group
    .items=${items}
    active=${args.active}
    ?interactive=${args.interactive}
    style="max-width: 420px;"
  ></sb-list-group>
`;

export const Static = Template.bind({});

export const Interactive = Template.bind({});
Interactive.args = { interactive: true, active: 'b' };
