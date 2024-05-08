import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Pricing' },
    { name: 'description', content: 'See our pricing' },
  ];
};

export default function Features() {
  return (
    <div>
      <h1>PHOTOSNAP Pricing</h1>
    </div>
  );
}
