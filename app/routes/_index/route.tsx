import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Home' },
    { name: 'description', content: 'Welcome to Photo Snap' },
  ];
};

export default function Home() {
  return (
    <div>
      <h1>PHOTOSNAP Home</h1>
    </div>
  );
}
