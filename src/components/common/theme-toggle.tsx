
"use client";

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);

  useEffect(() => {
    // This effect runs only on the client, after initial mount
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Default to dark if system prefers dark or no preference, matching server's default <html class="dark">
      // Otherwise, default to light.
      setTheme(systemPrefersDark ? 'dark' : 'light'); 
    }
  }, []);

  useEffect(() => {
    if (theme === undefined) {
      // Theme is not yet determined, do nothing to avoid changing <html> class prematurely
      return;
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  // Render a placeholder if the theme is not yet determined on the client
  // This helps avoid hydration mismatch if server renders with one theme
  // and client quickly switches to another before hydration is complete.
  if (theme === undefined) {
    return (
      <div 
        className="flex items-center space-x-1 bg-muted p-0.5 rounded-full"
        style={{ height: '32px', width: '142px' }} // Approximate size of the rendered buttons
        aria-hidden="true" 
      >
        {/* You can add skeleton loaders here if you prefer */}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 bg-muted p-0.5 rounded-full">
      <Button
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => toggleTheme('light')}
        className={`rounded-full px-3 py-1 text-xs h-7 ${
          theme === 'light' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Sun className="h-4 w-4 mr-1" /> Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => toggleTheme('dark')}
        className={`rounded-full px-3 py-1 text-xs h-7 ${
          theme === 'dark' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Moon className="h-4 w-4 mr-1" /> Dark
      </Button>
    </div>
  );
}
