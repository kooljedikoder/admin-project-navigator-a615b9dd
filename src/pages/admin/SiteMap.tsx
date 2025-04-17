
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  BookOpen, 
  Phone, 
  Image, 
  User, 
  FileText, 
  Settings,
  PenSquare,
  MenuSquare,
  Users,
  Library,
  ArrowRight,
  ExternalLink,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SiteMap: React.FC = () => {
  const siteStructure = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
      description: "Main landing page with hero slider and featured content",
      status: "Published",
      children: [
        { name: 'Hero Section', path: '/admin/hero', icon: Image, description: "Slider and promotional banners" },
        { name: 'Featured Projects', path: '/projects?featured=true', icon: BookOpen, description: "Showcase of highlighted work" }
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: BookOpen,
      description: "Portfolio of client work and case studies",
      status: "Published",
      children: [
        { name: 'All Projects', path: '/projects', icon: BookOpen, description: "Complete project listing" },
        { name: 'By Industry', path: '/projects?filter=industry', icon: FileText, description: "Projects organized by industry sector" },
        { name: 'By Service', path: '/projects?filter=service', icon: FileText, description: "Projects categorized by service type" },
        { name: 'By Environment', path: '/projects?filter=environment', icon: FileText, description: "Projects filtered by environment" }
      ]
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: PenSquare,
      description: "Industry insights, company news and updates",
      status: "Draft",
      children: [
        { name: 'Articles', path: '/blog/articles', icon: FileText, description: "Long-form content and thought leadership" },
        { name: 'News', path: '/blog/news', icon: FileText, description: "Company announcements and press releases" },
        { name: 'Categories', path: '/blog/categories', icon: MenuSquare, description: "Blog content by topic" }
      ]
    },
    {
      name: 'Media Library',
      path: '/media',
      icon: Library,
      description: "Centralized repository for images, videos and documents",
      status: "Published",
      children: [
        { name: 'Images', path: '/media/images', icon: Image, description: "Photography and graphics" },
        { name: 'Documents', path: '/media/documents', icon: FileText, description: "PDFs and downloadable resources" },
        { name: 'Videos', path: '/media/videos', icon: FileText, description: "Video content and presentations" }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      icon: LayoutDashboard,
      description: "Website management and administration",
      status: "Protected",
      children: [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, description: "Overview and quick actions" },
        { name: 'Projects Admin', path: '/admin/projects', icon: BookOpen, description: "Manage project listings" },
        { name: 'Add Project', path: '/admin/projects/add', icon: BookOpen, description: "Create new project entries" },
        { name: 'Pages Admin', path: '/admin/pages', icon: FileText, description: "Manage website pages" },
        { name: 'Menus Admin', path: '/admin/menus', icon: MenuSquare, description: "Configure navigation menus" },
        { name: 'Media Admin', path: '/admin/media', icon: Library, description: "Manage media assets" },
        { name: 'Blog Admin', path: '/admin/blog', icon: PenSquare, description: "Manage blog content" },
        { name: 'Users Admin', path: '/admin/users', icon: Users, description: "Manage user accounts" },
        { name: 'Settings', path: '/admin/settings', icon: Settings, description: "Global website settings" },
        { name: 'Hero Admin', path: '/admin/hero', icon: Image, description: "Configure homepage hero section" },
        { name: 'Site Map', path: '/admin/sitemap', icon: Globe, description: "View website structure" }
      ]
    },
    {
      name: 'About',
      path: '/about',
      icon: User,
      description: "Company profile, team, and mission statement",
      status: "Published",
      children: [
        { name: 'Our Story', path: '/about/story', icon: FileText, description: "Company history and journey" },
        { name: 'Team', path: '/about/team', icon: Users, description: "Leadership and staff profiles" },
        { name: 'Careers', path: '/about/careers', icon: FileText, description: "Job opportunities" }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: Phone,
      description: "Contact information and inquiry form",
      status: "Published",
      children: [
        { name: 'Contact Form', path: '/contact', icon: FileText, description: "Send a message" },
        { name: 'Locations', path: '/contact/locations', icon: Globe, description: "Office addresses" }
      ]
    }
  ];

  return (
    <AdminLayout title="Site Map">
      <div className="space-y-8">
        <div className="admin-section bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Complete Site Structure</h2>
              <p className="text-gray-500">
                Interactive map of all pages and their relationships in your website
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <ExternalLink size={16} />
              <span>Open Live Site</span>
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Published</Badge>
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Draft</Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Protected</Badge>
            </div>
            <p className="text-sm text-gray-600">
              This diagram shows the hierarchy of all pages in your website. 
              Click on any page to navigate to it directly or to edit its content.
            </p>
          </div>

          <div className="grid gap-6 mb-6">
            {siteStructure.map((section, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className={`py-4 px-5 border-b ${
                  section.status === "Published" ? "bg-green-50" : 
                  section.status === "Draft" ? "bg-amber-50" : "bg-blue-50"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        section.status === "Published" ? "bg-green-100 text-green-700" : 
                        section.status === "Draft" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        <section.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{section.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Badge variant="outline" className={`${
                            section.status === "Published" ? "bg-green-50 text-green-700 border-green-200" : 
                            section.status === "Draft" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-blue-50 text-blue-700 border-blue-200"
                          }`}>
                            {section.status}
                          </Badge>
                          <span>{section.description}</span>
                        </div>
                      </div>
                    </div>
                    <Link 
                      to={section.path} 
                      className="text-[hsl(var(--admin-primary))] hover:text-[hsl(var(--admin-accent))] transition-colors"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {section.children.map((child, childIndex) => (
                      <div key={childIndex} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-md bg-gray-100 text-gray-500">
                              <child.icon size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{child.name}</h4>
                              <p className="text-sm text-gray-500">{child.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Link 
                              to={child.path} 
                              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-[hsl(var(--admin-primary))] transition-colors"
                            >
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-6" />
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">Last updated: April 17, 2025</p>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <FileText size={14} />
              <span>Export Site Map</span>
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SiteMap;
