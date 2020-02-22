import { h } from 'preact';

export default function AvList(map: [string, string][]) {
  const obj = Object.fromEntries(map);
  return (
    <h1>
      {obj.thing} {obj.thing2}
    </h1>
  );
}
