
import Link from 'next/link';
import { socialNavItems } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';

export function AppFooter() {
  return (
    <footer className="border-t border-border/40 bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"> {/* Reduced py-16 to py-12 */}
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10 text-center"> {/* Reduced gap and mb */}
          {/* Email Me */}
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-accent mb-2" /> {/* Reduced icon size and mb */}
            <h3 className="text-lg font-semibold text-foreground mb-1">Email Me</h3> {/* Reduced font size and mb */}
            <a 
              href="mailto:your.email@example.com" 
              className="text-sm text-muted-foreground hover:text-accent hover:underline transition-colors" /* Reduced font size */
            >
              your.email@example.com
            </a>
          </div>

          {/* Call Me */}
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-accent mb-2" /> {/* Reduced icon size and mb */}
            <h3 className="text-lg font-semibold text-foreground mb-1">Call Me</h3> {/* Reduced font size and mb */}
            <p className="text-sm text-muted-foreground"> {/* Reduced font size */}
              (Optional: +1 234 567 890)
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-accent mb-2" /> {/* Reduced icon size and mb */}
            <h3 className="text-lg font-semibold text-foreground mb-1">My Location</h3> {/* Reduced font size and mb */}
            <p className="text-sm text-muted-foreground"> {/* Reduced font size */}
              City, Country (e.g., Remote)
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mb-12"> {/* Reduced space-x and mb */}
          {socialNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                item.tooltip ? "tooltip tooltip-top" : ""
              )}
              aria-label={item.tooltip || item.label}
              data-tip={item.tooltip}
            >
              <item.icon className="h-6 w-6" /> {/* Reduced icon size */}
            </Link>
          ))}
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-border/40 pt-6 text-center"> {/* Reduced pt-8 to pt-6 */}
          <p className="text-xs text-muted-foreground"> {/* Reduced font size */}
            &copy; {new Date().getFullYear()} Mohammed Nabeel K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
