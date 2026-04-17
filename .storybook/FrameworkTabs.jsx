import * as React from 'react';
import { Source } from '@storybook/blocks';

const { useState } = React;

const TABS = [
  { id: 'html', label: 'HTML', lang: 'html' },
  { id: 'react', label: 'React', lang: 'jsx' },
  { id: 'vue', label: 'Vue', lang: 'html' },
];

export function FrameworkTabs({ html, react, vue }) {
  const [active, setActive] = useState('html');
  const sources = { html, react, vue };
  const lang = TABS.find((t) => t.id === active).lang;

  return (
    <div style={{ margin: '1rem 0' }}>
      <div
        role="tablist"
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '0.5rem',
        }}
      >
        {TABS.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.id)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                fontSize: '13px',
                fontWeight: selected ? 600 : 400,
                color: selected ? '#1ea7fd' : '#666',
                borderBottom: selected ? '2px solid #1ea7fd' : '2px solid transparent',
                marginBottom: '-1px',
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <Source code={sources[active]} language={lang} dark />
    </div>
  );
}
