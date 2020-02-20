import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function AvHeader(content: string) {
  const great = useState('Great!');

  const styles = {
    header: {
      fontSize: '32px',
      color: 'blueviolet'
    }
  };

  return (
    <h1 style={styles.header}>
      <strong>
        Some {great} {content}
      </strong>
    </h1>
  );
}
