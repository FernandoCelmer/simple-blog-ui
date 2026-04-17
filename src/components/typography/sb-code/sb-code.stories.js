import { html } from 'lit';
import './sb-code.js';

export default {
  title: 'Typography/Code',
  tags: ['autodocs'],
  argTypes: {
    block: { control: 'boolean' },
    language: {
      control: 'select',
      options: ['', 'javascript', 'typescript', 'python', 'bash', 'json', 'css', 'xml', 'markdown'],
    },
  },
  args: { block: false, language: '' },
};

export const Inline = () => html`
  <p>
    Run <sb-code>npm install simple-blog-ui</sb-code> to get started.
  </p>
`;

export const BlockAuto = () => html`
  <sb-code block>
const add = (a, b) => a + b;
console.log(add(2, 3));
  </sb-code>
`;

export const JavaScript = () => html`
  <sb-code block language="javascript">
import { SbButton } from 'simple-blog-ui';

export function mount() {
  const btn = document.createElement('sb-button');
  btn.variant = 'primary';
  btn.textContent = 'Click me';
  document.body.append(btn);
}
  </sb-code>
`;

export const Python = () => html`
  <sb-code block language="python">
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print([fibonacci(i) for i in range(10)])
  </sb-code>
`;

export const Bash = () => html`
  <sb-code block language="bash">
npm install simple-blog-ui
npm run storybook
  </sb-code>
`;

export const Json = () => html`
  <sb-code block language="json">
{
  "name": "simple-blog-ui",
  "version": "0.0.1",
  "dependencies": {
    "lit": "^3.2.0"
  }
}
  </sb-code>
`;

export const Html = () => html`
  <sb-code block language="xml">
<sb-button variant="primary">Click me</sb-button>
<sb-alert variant="success" title="Done">
  Your changes were saved.
</sb-alert>
  </sb-code>
`;
