import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mohammed Nabeel K Portfolio',
  description: 'Portfolio of Mohammed Nabeel K, a .NET Developer specializing in modern web and cloud solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className="dark"><head />
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background Decorative Elements - Moved to Root Layout */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Stylized Cloud (Azure-like) */}
          <div className="absolute top-[10%] left-[5%] dark:opacity-5 opacity-15 transform -rotate-[15deg]">
            <div className="relative w-28 h-20">
              <div className="absolute w-16 h-16 bg-primary/30 rounded-full top-0 left-4"></div>
              <div className="absolute w-20 h-20 bg-primary/30 rounded-full top-4 left-0"></div>
              <div className="absolute w-16 h-16 bg-primary/30 rounded-full top-2 left-12"></div>
            </div>
          </div>

          {/* Stylized Brackets (Code Syntax) */}
          <div className="absolute bottom-[15%] right-[10%] dark:opacity-5 opacity-15 transform rotate-[20deg] w-24 h-32">
            {/* Opening bracket part */}
            <div className="absolute top-1/2 left-2 w-3 h-10 bg-accent/40 transform -translate-y-1/2"></div>
            <div className="absolute top-[calc(50%-1.25rem)] left-0 w-6 h-3 bg-accent/40 transform rotate-45 origin-bottom-left"></div>
            <div className="absolute top-[calc(50%+1.25rem)] left-0 w-6 h-3 bg-accent/40 transform -rotate-45 origin-top-left -translate-y-full"></div>
            
            {/* Closing bracket part - slightly offset */}
            <div className="absolute top-1/2 right-2 w-3 h-10 bg-accent/40 transform -translate-y-1/2"></div>
            <div className="absolute top-[calc(50%-1.25rem)] right-0 w-6 h-3 bg-accent/40 transform -rotate-45 origin-bottom-right"></div>
            <div className="absolute top-[calc(50%+1.25rem)] right-0 w-6 h-3 bg-accent/40 transform rotate-45 origin-top-right -translate-y-full"></div>
          </div>

          {/* Stylized Database Disks (SQL-like) */}
          <div className="absolute top-[45%] left-[40%] dark:opacity-5 opacity-15 transform -translate-x-1/2 -translate-y-1/2 rotate-[10deg]">
            <div className="space-y-1">
              <div className="w-24 h-5 dark:bg-secondary/40 bg-muted-foreground/20 rounded-full"></div>
              <div className="w-24 h-5 dark:bg-secondary/40 bg-muted-foreground/20 rounded-full ml-1"></div>
              <div className="w-24 h-5 dark:bg-secondary/40 bg-muted-foreground/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Abstract .NET cross/plus */}
          <div className="absolute top-[70%] right-[25%] dark:opacity-5 opacity-15 transform rotate-[30deg]">
            <div className="relative w-20 h-20">
              <div className="absolute top-1/2 left-0 w-full h-4 bg-primary/30 transform -translate-y-1/2 rounded"></div>
              <div className="absolute left-1/2 top-0 h-full w-4 bg-primary/30 transform -translate-x-1/2 rounded"></div>
            </div>
          </div>

          {/* Small abstract square elements */}
          <div className="absolute top-[5%] right-[45%] dark:opacity-5 opacity-15">
              <div className="w-8 h-8 border-2 border-foreground/20 transform rotate-[25deg]"></div>
          </div>
          <div className="absolute bottom-[5%] left-[15%] dark:opacity-5 opacity-15">
              <div className="w-10 h-10 bg-accent/20 rounded-sm transform -rotate-[30deg]"></div>
          </div>
        </div>
        {children}
        <Toaster />
      </body>
</html>
  );
}
