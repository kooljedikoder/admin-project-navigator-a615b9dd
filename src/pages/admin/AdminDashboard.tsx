
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutList, SlidersHorizontal, Map, PlusCircle, FileText, MenuSquare, Library, PenSquare, Users, Settings } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout title="Admin Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Hero Section</CardTitle>
            <CardDescription>Manage your homepage hero content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <SlidersHorizontal className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                Update hero text, button links, and slider descriptions
              </p>
              <Link to="/admin/hero" className="admin-btn-primary mt-4">
                Manage Hero
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Pages</CardTitle>
            <CardDescription>Manage your website pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <FileText className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                Create, edit, and organize your website pages
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link to="/admin/pages" className="admin-btn-primary">
                  View All Pages
                </Link>
                <Link to="/admin/pages/add" className="admin-btn-secondary flex items-center justify-center gap-1">
                  <PlusCircle size={16} />
                  <span>Add New Page</span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Menus</CardTitle>
            <CardDescription>Manage your navigation menus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <MenuSquare className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                Create and customize your website navigation
              </p>
              <Link to="/admin/menus" className="admin-btn-primary mt-4">
                Manage Menus
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Projects</CardTitle>
            <CardDescription>Manage all your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <LayoutList className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                Add, edit, or remove project listings and their details
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link to="/admin/projects" className="admin-btn-primary">
                  View All Projects
                </Link>
                <Link to="/admin/projects/add" className="admin-btn-secondary flex items-center justify-center gap-1">
                  <PlusCircle size={16} />
                  <span>Add New Project</span>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Media Library</CardTitle>
            <CardDescription>Manage your media files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <Library className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                Upload, organize, and manage all your media files
              </p>
              <Link to="/admin/media" className="admin-btn-primary mt-4">
                Manage Media
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Site Map</CardTitle>
            <CardDescription>View your site structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2">
              <Map className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
              <p className="text-sm text-muted-foreground">
                See a complete map of your website structure
              </p>
              <Link to="/admin/sitemap" className="admin-btn-primary mt-4">
                View Site Map
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
