import { html } from 'lit';
import './sb-accordion.js';

export default {
  title: 'Display/Accordion',
  argTypes: {
    multiple: { control: 'boolean' },
  },
  args: { multiple: false },
};

const items = [
  { id: 'what', title: 'What is simple-blog-ui?' },
  { id: 'how', title: 'How do I install it?' },
  { id: 'why', title: 'Why Web Components?' },
];

const Template = ({ multiple }) => html`
  <sb-accordion .items=${items} ?multiple=${multiple} style="max-width: 500px;">
    <div slot="what">A UI component library styled to match mkdocs-simple-blog.</div>
    <div slot="how">Run <code>npm install simple-blog-ui</code>.</div>
    <div slot="why">Works in React, Vue, and plain HTML without wrappers.</div>
  </sb-accordion>
`;

export const Single = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = { multiple: true };
