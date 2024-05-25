import type { MetaFunction } from '@remix-run/node';
import { PhotoSections } from '~/components/PhotoSections';
import PierGuy from '~/assets/images/pier-guy.png';
import Laptop from '~/assets/images/laptop.png';
import CameraGuy from '~/assets/images/camera-guy.png';

export const meta: MetaFunction = () => {
  return [
    { title: 'Photo Snap | Home' },
    { name: 'description', content: 'Welcome to Photo Snap' },
  ];
};

export default function Home() {
  return (
    <>
      <PhotoSections
        header="Create and share your photo stories."
        body="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        image={PierGuy}
        imageAlt="Man at a lake pier holding a camera during a sunset"
        buttonText="get an invite"
        imagePosition="right"
      />
      <PhotoSections
        header="Beautiful Stories Every Time."
        body="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        image={Laptop}
        imageAlt="Man at a lake pier holding a camera during a sunset"
        buttonText="View The Stories"
        light
        imagePosition="left"
        to="/stories"
      />
      <PhotoSections
        header="Create and share your photo stories."
        body="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        image={CameraGuy}
        imageAlt="Man at a lake pier holding a camera during a sunset"
        buttonText="get an invite"
        light
        imagePosition="right"
      />
    </>
  );
}
