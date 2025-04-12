
export interface MenuItem {
  id: string;
  label: string;
  url: string;
  type: 'page' | 'custom' | 'category';
  target: '_self' | '_blank';
  children: MenuItem[];
}
