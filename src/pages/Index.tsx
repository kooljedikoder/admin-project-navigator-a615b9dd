
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, MenuSquare, Library, PenSquare, Users, Settings } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Project Management Admin Portal</h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          Manage your project portfolio, pages, menus, and site content with our comprehensive admin dashboard.
        </p>
        
        <Link 
          to="/admin" 
          className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--admin-primary))] px-8 py-3 text-white shadow-md transition-all hover:bg-[hsl(var(--admin-secondary))] hover:shadow-lg"
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Enter Admin Dashboard</span>
        </Link>
      </div>
      
      <div className="grid w-full max-w-4xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Hero Section Management</h2>
          <p className="mb-4 text-gray-600">
            Update your hero text, button links, and slider descriptions to keep your homepage fresh and engaging.
          </p>
          <Link 
            to="/admin/hero" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            Manage Hero Section →
          </Link>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Pages Management</h2>
          <p className="mb-4 text-gray-600">
            Create, edit and organize all your website pages with hierarchical structure and SEO settings.
          </p>
          <Link 
            to="/admin/pages" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            Manage Pages →
          </Link>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Menu Navigation</h2>
          <p className="mb-4 text-gray-600">
            Create and customize your website navigation with our drag-and-drop menu builder.
          </p>
          <Link 
            to="/admin/menus" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            Manage Menus →
          </Link>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Project Portfolio</h2>
          <p className="mb-4 text-gray-600">
            Add, edit, and categorize your projects with comprehensive filters and detailed project phases.
          </p>
          <Link 
            to="/admin/projects" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            Manage Projects →
          </Link>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Media Library</h2>
          <p className="mb-4 text-gray-600">
            Upload, organize and manage all your media files in one centralized location.
          </p>
          <Link 
            to="/admin/media" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            Manage Media →
          </Link>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Site Map</h2>
          <p className="mb-4 text-gray-600">
            Visualize your entire website structure and navigate quickly between different sections.
          </p>
          <Link 
            to="/admin/sitemap" 
            className="mt-2 inline-flex items-center text-[hsl(var(--admin-primary))] hover:underline"
          >
            View Site Map →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
