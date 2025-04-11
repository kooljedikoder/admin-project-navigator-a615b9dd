
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, BookOpen, Phone, Image, User, FileText } from 'lucide-react';

const SiteMap: React.FC = () => {
  const siteStructure = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
      children: [
        { name: 'Hero Section', path: '/admin/hero', icon: Image },
        { name: 'Featured Projects', path: '/projects?featured=true', icon: BookOpen }
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: BookOpen,
      children: [
        { name: 'All Projects', path: '/projects', icon: BookOpen },
        { name: 'By Industry', path: '/projects?filter=industry', icon: FileText },
        { name: 'By Service', path: '/projects?filter=service', icon: FileText },
        { name: 'By Environment', path: '/projects?filter=environment', icon: FileText }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      icon: LayoutDashboard,
      children: [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Projects Admin', path: '/admin/projects', icon: BookOpen },
        { name: 'Add Project', path: '/admin/projects/add', icon: BookOpen },
        { name: 'Hero Admin', path: '/admin/hero', icon: Image },
        { name: 'Site Map', path: '/admin/sitemap', icon: FileText }
      ]
    },
    {
      name: 'About',
      path: '/about',
      icon: User,
      children: []
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: Phone,
      children: []
    }
  ];

  return (
    <AdminLayout title="Site Map">
      <div className="space-y-8">
        <div className="admin-section">
          <h2 className="admin-subheading">Complete Site Structure</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            This diagram shows all the pages and their relationships in your website.
          </p>

          <div className="mt-6 space-y-4">
            {siteStructure.map((section, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-[hsl(var(--admin-primary))] p-3 text-white">
                  <div className="flex items-center gap-2">
                    <section.icon size={18} />
                    <h3 className="font-medium">{section.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded border border-gray-200 bg-gray-50 p-2">
                      <span className="text-sm font-medium">Main Page:</span>
                      <Link 
                        to={section.path} 
                        className="text-sm text-[hsl(var(--admin-primary))] hover:underline"
                      >
                        {section.path}
                      </Link>
                    </div>
                    
                    {section.children.length > 0 && (
                      <div className="mt-2 space-y-2">
                        <h4 className="text-xs font-medium uppercase text-gray-500">Sub Pages:</h4>
                        {section.children.map((child, childIndex) => (
                          <div 
                            key={childIndex} 
                            className="ml-4 flex items-center justify-between rounded border border-gray-100 bg-gray-50 p-2"
                          >
                            <div className="flex items-center gap-2">
                              <child.icon size={14} className="text-gray-500" />
                              <span className="text-sm">{child.name}</span>
                            </div>
                            <Link 
                              to={child.path} 
                              className="text-sm text-[hsl(var(--admin-primary))] hover:underline"
                            >
                              {child.path}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SiteMap;
