export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>App Header</header>
      {children}
      <footer>App Header</footer>
    </>
  );
}
