import { ReactNode } from 'react';
import NavbarContainer from '@/features/Navbar/container';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
