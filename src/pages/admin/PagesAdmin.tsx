
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlusCircle, Pencil, Trash2, Eye, Grid, List, ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

// Mock page data
const mockPages = [
  {
    id: '1',
    title: 'Home',
    slug: 'home',
    status: 'published',
    lastModified: '2023-12-15',
    author: 'Admin',
    template: 'Default',
    parent: null,
    level: 0,
    hasChildren: true,
    expanded: true
  },
  {
    id: '2',
    title: 'About Us',
    slug: 'about-us',
    status: 'published',
    lastModified: '2023-12-10',
    author: 'Admin',
    template: 'Full Width',
    parent: null,
    level: 0,
    hasChildren: true,
    expanded: false
  },
  {
    id: '3',
    title: 'Our Team',
    slug: 'about-us/team',
    status: 'published',
    lastModified: '2023-12-10',
    author: 'Admin',
    template: 'Team',
    parent: '2',
    level: 1,
    hasChildren: false,
    expanded: false
  },
  {
    id: '4',
    title: 'Services',
    slug: 'services',
    status: 'published',
    lastModified: '2023-12-08',
    author: 'Admin',
    template: 'Services',
    parent: null,
    level: 0,
    hasChildren: true,
    expanded: false
  },
  {
    id: '5',
    title: 'Contact',
    slug: 'contact',
    status: 'draft',
    lastModified: '2023-12-05',
    author: 'Editor',
    template: 'Contact',
    parent: null,
    level: 0,
    hasChildren: false,
    expanded: false
  }
];

const PagesAdmin: React.FC = () => {
  const [pages, setPages] = useState(mockPages);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeletePage = (id: string) => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      setPages(pages.filter(page => page.id !== id));
      toast.success('Page deleted successfully');
    }
  };

  const toggleExpand = (id: string) => {
    setPages(pages.map(page => {
      if (page.id === id) {
        return { ...page, expanded: !page.expanded };
      }
      return page;
    }));
  };

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Only show child pages if parent is expanded
  const visiblePages = filteredPages.filter(page => {
    if (page.parent === null) return true;
    
    const parent = pages.find(p => p.id === page.parent);
    return parent?.expanded;
  });

  return (
    <AdminLayout title="Pages Management">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">All Pages</h2>
          <p className="text-sm text-muted-foreground">Manage your website pages</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/pages/add" className="admin-btn-primary flex items-center gap-1">
            <PlusCircle size={16} />
            <span>Add New Page</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-1">
              <ExternalLink size={16} />
              <span>View Site</span>
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="w-64">
            <Input
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={viewMode === 'list' ? 'bg-gray-100' : ''}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={viewMode === 'grid' ? 'bg-gray-100' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </Button>
          </div>
        </div>
      </Card>

      {viewMode === 'list' ? (
        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>URL Slug</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visiblePages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <div style={{ marginLeft: `${page.level * 20}px` }} className="flex items-center">
                        {page.hasChildren && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mr-1 h-6 w-6 p-0"
                            onClick={() => toggleExpand(page.id)}
                          >
                            {page.expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </Button>
                        )}
                        <span className="font-medium">{page.title}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{page.slug}</TableCell>
                  <TableCell>{page.template}</TableCell>
                  <TableCell>
                    <Badge className={page.status === 'published' ? 'bg-green-500' : 'bg-amber-500'}>
                      {page.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{page.lastModified}</TableCell>
                  <TableCell>{page.author}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <Link to={`/pages/${page.slug}`} target="_blank">
                          <Eye size={16} />
                        </Link>
                      </Button>
                      <Link to={`/admin/pages/edit/${page.id}`}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Pencil size={16} />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        onClick={() => handleDeletePage(page.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visiblePages.map((page) => (
            <Card key={page.id} className="overflow-hidden">
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{page.title}</h3>
                  <Badge className={page.status === 'published' ? 'bg-green-500' : 'bg-amber-500'}>
                    {page.status}
                  </Badge>
                </div>
                <p className="mb-2 text-sm text-gray-600">{page.slug}</p>
                <div className="mb-4 text-xs text-gray-500">
                  <div>Template: {page.template}</div>
                  <div>Modified: {page.lastModified}</div>
                  <div>Author: {page.author}</div>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 text-gray-500"
                    asChild
                  >
                    <Link to={`/pages/${page.slug}`} target="_blank">
                      <Eye size={16} />
                    </Link>
                  </Button>
                  <Link to={`/admin/pages/edit/${page.id}`}>
                    <Button variant="ghost" size="sm" className="p-0 text-gray-500">
                      <Pencil size={16} />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 text-red-500 hover:text-red-700"
                    onClick={() => handleDeletePage(page.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default PagesAdmin;
