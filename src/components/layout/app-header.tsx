
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/constants/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { cn } from '@/lib/utils';

// Updated to include 'Skills' and remove 'Contact'
const headerNavLinks = mainNavItems.filter(item => 
  ['/', '/projects', '/blog', '/skills', '/resume'].includes(item.href) // '/contact' removed, '/resume' added for consistency
);


export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <span className="font-bold text-lg sm:text-xl text-foreground">Mohammed Nabeel K</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 mx-auto">
          {headerNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                pathname === item.href && "text-primary"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3 ml-auto">
          <ThemeToggle />
          {/* "Contact me" button removed as contact form is now on homepage */}
        </div>
      </div>
    </header>
  );
}
