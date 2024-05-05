import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
