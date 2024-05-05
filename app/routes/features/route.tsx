import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Features' },
    { name: 'description', content: 'See our features' },
  ];
};

export default function Features() {
  return (
    <div>
      <h1>PHOTOSNAP Features</h1>
    </div>
  );
}
