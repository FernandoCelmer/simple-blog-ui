import { html } from 'lit';
import './sb-navbar.js';
import '../sb-link/sb-link.js';

export default {
  title: 'Navigation/Navbar',
  tags: ['autodocs'],
};

export const Basic = () => html`
  <sb-navbar>
    <a slot="brand" href="/">Simple Blog</a>
    <sb-link variant="nav" href="/">Home</sb-link>
    <sb-link variant="nav" href="/posts">Posts</sb-link>
    <sb-link variant="nav" href="/about">About</sb-link>
    <sb-link variant="nav" href="/contact">Contact</sb-link>
  </sb-navbar>
`;
