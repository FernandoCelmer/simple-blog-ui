import { html } from 'lit';
import './sb-table.js';

export default {
  title: 'Display/Table',
  argTypes: {
    striped: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
  args: { striped: false, compact: false },
};

const columns = [
  { id: 'command', label: 'Command' },
  { id: 'desc', label: 'Description' },
];

const rows = [
  { command: 'mkdocs new [dir-name]', desc: 'Create a new project.' },
  { command: 'mkdocs serve', desc: 'Start the live-reloading docs server.' },
  { command: 'mkdocs build', desc: 'Build the documentation site.' },
  { command: 'mkdocs -h', desc: 'Print help message and exit.' },
];

const Template = (args) => html`
  <sb-table
    .columns=${columns}
    .rows=${rows}
    ?striped=${args.striped}
    ?compact=${args.compact}
  ></sb-table>
`;

export const Basic = Template.bind({});

export const Striped = Template.bind({});
Striped.args = { striped: true };

export const Compact = Template.bind({});
Compact.args = { compact: true };

export const Wide = () => {
  const cols = [
    { id: 'version', label: 'Version' },
    { id: 'date', label: 'Date' },
    { id: 'notes', label: 'Notes', align: 'left' },
    { id: 'status', label: 'Status', align: 'center' },
  ];
  const data = [
    { version: 'v0.4.0', date: '2025-02-04', notes: 'Page metadata support', status: '✓' },
    { version: 'v0.3.0', date: '2024-11-12', notes: 'Unit testing + CI/CD refactor', status: '✓' },
    { version: 'v0.2.0', date: '2024-06-18', notes: 'Mobile-first sidebar', status: '✓' },
  ];
  return html`<sb-table .columns=${cols} .rows=${data} striped></sb-table>`;
};
