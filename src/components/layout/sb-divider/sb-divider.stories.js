import { html } from 'lit';
import './sb-divider.js';

export default {
  title: 'Layout/Divider',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    thin: { control: 'boolean' },
  },
  args: { orientation: 'horizontal', thin: false },
};

export const Horizontal = () => html`
  <div style="font-family:'Fira Mono',monospace;">
    <p>Section A</p>
    <sb-divider></sb-divider>
    <p>Section B</p>
  </div>
`;

export const Thin = () => html`
  <div style="font-family:'Fira Mono',monospace;">
    <p>Section A</p>
    <sb-divider thin></sb-divider>
    <p>Section B</p>
  </div>
`;

export const Vertical = () => html`
  <div style="display:flex; align-items:center; font-family:'Fira Mono',monospace;">
    <span>Left</span>
    <sb-divider orientation="vertical" style="height:2rem;"></sb-divider>
    <span>Right</span>
  </div>
`;
