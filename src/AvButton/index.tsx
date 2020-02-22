import { h } from 'preact';

export default function AvButton(textContent: string, onClick: Function) {
  return <button onClick={(e) => onClick(e)}>{textContent}</button>;
}
