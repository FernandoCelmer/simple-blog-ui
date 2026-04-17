import { html } from 'lit';
import './sb-carousel.js';

export default {
  title: 'Display/Carousel',
  tags: ['autodocs'],
  argTypes: {
    interval: { control: { type: 'number', min: 0, max: 10000, step: 500 } },
  },
  args: { interval: 0 },
};

const slide = (n, bg) => html`
  <div
    style="
      background: ${bg};
      color: #000;
      padding: 4rem 2rem;
      text-align: center;
      font-family: 'Fira Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1.8rem;
    "
  >
    Slide ${n}
  </div>
`;

const Template = ({ interval }) => html`
  <sb-carousel interval=${interval} style="max-width: 600px;">
    ${slide(1, '#f1dc15')}
    ${slide(2, '#4cae4f')}
    ${slide(3, '#4051b5')}
    ${slide(4, '#ffa724')}
  </sb-carousel>
`;

export const Basic = Template.bind({});

export const AutoPlay = Template.bind({});
AutoPlay.args = { interval: 2500 };
