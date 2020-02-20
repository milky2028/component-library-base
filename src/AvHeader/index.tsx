export default function AvHeader(content: string) {
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
