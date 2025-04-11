
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Pencil, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';

// Mock project data - in a real app, this would come from an API
const mockProjects = [
  {
    id: '1',
    title: 'Financial App Redesign',
    client: 'Global Bank',
    year: '2023',
    category: 'Financial Institutions',
    service: 'Websites & Apps Development',
    featured: true,
    environment: 'Hybrid'
  },
  {
    id: '2',
    title: 'Retail Space Design',
    client: 'Fashion Brand X',
    year: '2022',
    category: 'Retail & Hospitality',
    service: 'Retail & Brand Space Design',
    featured: false,
    environment: 'Onsite'
  },
  {
    id: '3',
    title: 'Government Portal',
    client: 'Ministry of Technology',
    year: '2023',
    category: 'Government and NGOs',
    service: 'AI & Brand Transformation',
    featured: true,
    environment: 'Remote'
  }
];

const ProjectsAdmin: React.FC = () => {
  const [projects, setProjects] = useState(mockProjects);

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
      toast.success('Project deleted successfully');
    }
  };

  return (
    <AdminLayout title="Projects Management">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">All Projects</h2>
          <p className="text-sm text-muted-foreground">Manage and organize your project portfolio</p>
        </div>
        <Link to="/admin/projects/add" className="admin-btn-primary flex items-center gap-1">
          <PlusCircle size={16} />
          <span>Add New Project</span>
        </Link>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>{project.year}</TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>{project.service}</TableCell>
                <TableCell>
                  {project.featured && (
                    <Badge className="bg-[hsl(var(--admin-primary))]">Featured</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toast.info('View functionality would open the project page')}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      title="View Project"
                    >
                      <Eye size={16} />
                    </button>
                    <Link
                      to={`/admin/projects/edit/${project.id}`}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      title="Edit Project"
                    >
                      <Pencil size={16} />
                    </Link>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                      title="Delete Project"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default ProjectsAdmin;
