import { html } from 'lit';
import './sb-container.js';

export default {
  title: 'Layout/Container',
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'full'] },
  },
  args: { size: 'lg' },
};

const Template = ({ size }) => html`
  <sb-container size=${size}>
    <div style="border:2px dashed var(--primary); padding:2rem; text-align:center; font-family:'Fira Mono',monospace; text-transform:uppercase; letter-spacing:0.1rem;">
      Container size: ${size}
    </div>
  </sb-container>
`;

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Medium = Template.bind({});
Medium.args = { size: 'md' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };

export const Full = Template.bind({});
Full.args = { size: 'full' };
