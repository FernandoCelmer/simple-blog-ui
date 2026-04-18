import { html } from 'lit';
import './sb-profile.js';

export default {
  title: 'Blog/Profile',
};

const links = [
  { label: 'GitHub', url: 'https://github.com/FernandoCelmer' },
  { label: 'Twitter', url: '#' },
  { label: 'Email', url: '#' },
];

export const Basic = () => html`
  <sb-profile name="John Doe" role="Developer" .links=${links}></sb-profile>
`;

export const WithBio = () => html`
  <sb-profile name="John Doe" role="Developer" .links=${links}>
    <p>Building open source tools for developers.</p>
  </sb-profile>
`;
