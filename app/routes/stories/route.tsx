import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Stories' },
    { name: 'description', content: 'See our stories' },
  ];
};

export default function Stories() {
  return (
    <div>
      <h1>PHOTOSNAP Stories</h1>
    </div>
  );
}
