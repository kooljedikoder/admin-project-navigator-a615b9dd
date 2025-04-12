
import { MenuItem } from '@/types/menu';

// Mock menu locations
export const menuLocations = [
  { id: 'primary', name: 'Primary Navigation' },
  { id: 'footer', name: 'Footer Menu' },
  { id: 'sidebar', name: 'Sidebar Menu' },
  { id: 'mobile', name: 'Mobile Menu' },
];

// Initial menu data
export const initialMenuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'about',
    label: 'About',
    url: '/about',
    type: 'page',
    target: '_self',
    children: [
      {
        id: 'team',
        label: 'Our Team',
        url: '/about/team',
        type: 'page',
        target: '_self',
        children: [],
      },
      {
        id: 'history',
        label: 'Our History',
        url: '/about/history',
        type: 'page',
        target: '_self',
        children: [],
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    url: '/services',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'blog',
    label: 'Blog',
    url: '/blog',
    type: 'category',
    target: '_self',
    children: [],
  },
  {
    id: 'contact',
    label: 'Contact',
    url: '/contact',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'external',
    label: 'External Link',
    url: 'https://example.com',
    type: 'custom',
    target: '_blank',
    children: [],
  },
];

// Available pages for adding to menu
export const availablePages = [
  { id: 'home', title: 'Home', url: '/' },
  { id: 'about', title: 'About Us', url: '/about' },
  { id: 'services', title: 'Services', url: '/services' },
  { id: 'contact', title: 'Contact', url: '/contact' },
  { id: 'blog', title: 'Blog', url: '/blog' },
  { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
];

// Available categories for adding to menu
export const availableCategories = [
  { id: 'news', title: 'News', url: '/category/news' },
  { id: 'tutorials', title: 'Tutorials', url: '/category/tutorials' },
  { id: 'resources', title: 'Resources', url: '/category/resources' },
];
