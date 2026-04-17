import { html } from 'lit';
import './sb-pagination.js';

export default {
  title: 'Navigation/Pagination',
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    total: { control: { type: 'number', min: 1 } },
    siblings: { control: { type: 'number', min: 0, max: 3 } },
  },
  args: { page: 1, total: 5, siblings: 1 },
};

const Template = (args) => html`
  <sb-pagination
    page=${args.page}
    total=${args.total}
    siblings=${args.siblings}
  ></sb-pagination>
`;

export const Short = Template.bind({});
Short.args = { page: 2, total: 5 };

export const WithEllipsis = Template.bind({});
WithEllipsis.args = { page: 6, total: 20 };

export const AtEnd = Template.bind({});
AtEnd.args = { page: 20, total: 20 };
