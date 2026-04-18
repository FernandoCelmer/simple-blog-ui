import { html } from 'lit';
import './sb-prev-next.js';

export default {
  title: 'Blog/PrevNext',
};

export const Basic = () => html`
  <sb-prev-next
    prev-href="/posts/intro"
    prev-label="Introduction"
    next-href="/posts/advanced"
    next-label="Advanced Topics"
  ></sb-prev-next>
`;

export const OnlyNext = () => html`
  <sb-prev-next next-href="/posts/next" next-label="Next Post"></sb-prev-next>
`;

export const OnlyPrev = () => html`
  <sb-prev-next prev-href="/posts/prev" prev-label="Previous Post"></sb-prev-next>
`;
