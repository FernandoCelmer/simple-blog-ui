import { html } from 'lit';
import './sb-dropdown.js';
import '../../actions/sb-button/sb-button.js';

export default {
  title: 'Overlays/Dropdown',
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: { align: 'left' },
};

const items = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'archive', label: 'Archive' },
  { id: 'delete', label: 'Delete', disabled: true },
];

const Template = ({ align }) => html`
  <div style="padding: 2rem;">
    <sb-dropdown align=${align} .items=${items}>
      <sb-button slot="trigger">Actions ▾</sb-button>
    </sb-dropdown>
  </div>
`;

export const Left = Template.bind({});

export const Right = Template.bind({});
Right.args = { align: 'right' };
