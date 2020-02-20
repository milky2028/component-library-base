import { h } from 'preact';

// TypeScript ensures consistent prop types across components
// and simplifies interfaces so that teams injesting components
// have a clear understanding of what the component needs/uses.

// Prefer/necessitate functional components and hooks.
// Class methods do not minify well and can lead to larger network payloads.
export default function AvHeader(content: string) {
  // Prefer CSS in JS.
  const styles = {
    header: {
      fontSize: '32px',
      color: 'blueviolet'
    }
  };

  return (
    <h1 style={styles.header}>
      <strong>Some {content}</strong>
    </h1>
  );
}
