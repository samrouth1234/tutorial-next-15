
export default function MainLayout({ children }) {
  return (
    <main className="h-full flex flex-col bg-var(--background)">{children}</main>
  );
}