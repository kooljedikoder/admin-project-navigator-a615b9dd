
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image, 
  SlidersHorizontal, 
  LayoutList, 
  Map,
  LogOut,
  FileText,
  MenuSquare,
  Library,
  PenSquare,
  Users,
  Settings,
  ExternalLink
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const location = useLocation();
  
  const menuItems = [
    { title: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { title: 'Hero Section', path: '/admin/hero', icon: SlidersHorizontal },
    { title: 'Pages', path: '/admin/pages', icon: FileText },
    { title: 'Menus', path: '/admin/menus', icon: MenuSquare },
    { title: 'Projects', path: '/admin/projects', icon: LayoutList },
    { title: 'Media Library', path: '/admin/media', icon: Library },
    { title: 'Blog', path: '/admin/blog', icon: PenSquare, status: 'New' },
    { title: 'Users', path: '/admin/users', icon: Users },
    { title: 'Settings', path: '/admin/settings', icon: Settings },
    { title: 'Site Map', path: '/admin/sitemap', icon: Map },
  ];

  // Function to check if a path is active (including sub-paths)
  const isPathActive = (path: string) => {
    if (path === '/admin' && location.pathname === '/admin') {
      return true;
    }
    
    // For any other path, check if the current location starts with the path
    // But avoid matching parent paths for other menu items
    return path !== '/admin' && location.pathname.startsWith(path);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="px-6 py-4">
            <Link to="/admin" className="flex items-center gap-2">
              <Image size={24} className="text-[hsl(var(--admin-primary))]" />
              <span className="text-xl font-bold">Admin Portal</span>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild
                        className={isPathActive(item.path) ? "bg-[hsl(var(--admin-accent))] text-white" : ""}
                      >
                        <Link to={item.path} className="flex items-center gap-3">
                          <item.icon size={18} />
                          <span>{item.title}</span>
                          {item.status && (
                            <Badge className="ml-auto bg-[hsl(var(--admin-primary))] text-white text-xs">
                              {item.status}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-gray-800">
                    <LogOut size={18} />
                    <span>Back to Site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* View Frontend Link */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[hsl(var(--admin-primary))] hover:underline">
                    <ExternalLink size={18} />
                    <span>View Frontend</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>
              
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Preview Site</span>
                </a>
              </Button>
            </div>
          </header>
          
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
