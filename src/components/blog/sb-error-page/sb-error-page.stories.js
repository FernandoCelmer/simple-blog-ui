import { html } from 'lit';
import './sb-error-page.js';

export default {
  title: 'Blog/ErrorPage',
};

export const NotFound = () => html`
  <sb-error-page code="404" message="Page not found">
    <p><a href="/">Go back home</a></p>
  </sb-error-page>
`;

export const ServerError = () => html`
  <sb-error-page code="500" message="Something went wrong"></sb-error-page>
`;
