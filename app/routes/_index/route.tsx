import type { MetaFunction } from '@remix-run/node';
import { PhotoSections } from '~/components/PhotoSections';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Home' },
    { name: 'description', content: 'Welcome to Photo Snap' },
  ];
};

export default function Home() {
  return (
    <>
      <PhotoSections />
    </>
  );
}
