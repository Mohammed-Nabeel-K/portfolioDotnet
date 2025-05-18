
import type { ReactNode } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col relative">
      {/* Background Decorative Elements REMOVED - Handled by RootLayout */}

      <AppHeader />
      <main className="flex-1 overflow-auto px-4 sm:px-6 lg:px-8 z-0">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
