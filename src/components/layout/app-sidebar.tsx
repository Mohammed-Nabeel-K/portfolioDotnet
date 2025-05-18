"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { mainNavItems, socialNavItems } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { CodeXml, Dot } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <CodeXml className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-xl font-bold text-foreground group-data-[collapsible=icon]:hidden">
            CaffeineCode
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex-grow">
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                  isActive={pathname === item.href}
                  tooltip={{ children: item.tooltip, side: 'right', className: 'bg-popover text-popover-foreground p-2 rounded-md shadow-md' }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="p-2">
        <SidebarMenu>
          {socialNavItems.map((item) => (
             <SidebarMenuItem key={item.label}>
               <a href={item.href} target="_blank" rel="noopener noreferrer">
                <SidebarMenuButton
                    className="w-full justify-start"
                    tooltip={{ children: item.tooltip, side: 'right', className: 'bg-popover text-popover-foreground p-2 rounded-md shadow-md' }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                  </SidebarMenuButton>
               </a>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem className="group-data-[collapsible=icon]:hidden mt-2">
            <p className="text-xs text-sidebar-foreground/60 px-2 text-center">
              © {new Date().getFullYear()} CaffeineCode
            </p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
