import { LitElement, html, unsafeCSS } from 'lit';
import styles from './sb-post-list.css?inline';

export class SbPostList extends LitElement {
  static properties = {
    posts: { type: Array },
  };

  static styles = [unsafeCSS(styles)];

  constructor() {
    super();
    this.posts = [];
  }

  render() {
    return html`
      <ul>
        ${this.posts.map(
          (post) => html`
            <li>
              <span class="date">${post.date || ''}</span>
              <span class="title"><a href=${post.url}>${post.title}</a></span>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('sb-post-list', SbPostList);
