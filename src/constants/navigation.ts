
import type { LucideIcon } from 'lucide-react';
import { Home, Briefcase, Rss, UserCircle, Layers, Mail, Github, Linkedin, Twitter, MessageSquareText, Facebook, Instagram, Youtube, Send as TelegramSendIcon, Award, GraduationCap, Code2 } from 'lucide-react'; // Removed Puzzle

// LeetCodeIcon import removed

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon | React.ForwardRefExoticComponent<any>; // Allow custom icon components
  tooltip?: string;
  name?: string; // For social links, if label is different from name
}

export const mainNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home, tooltip: 'Home' },
  { href: '/projects', label: 'Projects', icon: Briefcase, tooltip: 'Projects' },
  { href: '/blog', label: 'Blog', icon: Rss, tooltip: 'Blog' },
  { href: '/resume', label: 'Timeline', icon: UserCircle, tooltip: 'Timeline' },
  { href: '/skills', label: 'Skills', icon: Layers, tooltip: 'Skills' },
];

// Social Icons for Hero Section as per image
export const heroSocialNavItems: NavItem[] = [
  { href: '#', name: 'Discord', label: 'Discord', icon: MessageSquareText, tooltip: 'Discord' },
  { href: '#', name: 'Facebook', label: 'Facebook', icon: Facebook, tooltip: 'Facebook' },
  { href: '#', name: 'Instagram', label: 'Instagram', icon: Instagram, tooltip: 'Instagram' },
  { href: '#', name: 'Twitter', label: 'Twitter', icon: Twitter, tooltip: 'Twitter X' },
  { href: '#', name: 'YouTube', label: 'YouTube', icon: Youtube, tooltip: 'YouTube' },
  { href: '#', name: 'Telegram', label: 'Telegram', icon: TelegramSendIcon, tooltip: 'Telegram' },
];


// Social items for footer
export const socialNavItems: NavItem[] = [
  { href: 'https://github.com/yourusername', label: 'GitHub', icon: Github, tooltip: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', icon: Linkedin, tooltip: 'LinkedIn' },
  { href: 'https://twitter.com/yourusername', label: 'Twitter', icon: Twitter, tooltip: 'Twitter / X' },
  // LeetCode entry removed
  { href: 'https://instagram.com/yourusername', label: 'Instagram', icon: Instagram, tooltip: 'Instagram' },
  { href: 'https://facebook.com/yourusername', label: 'Facebook', icon: Facebook, tooltip: 'Facebook' },
];
