
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Pencil, Trash2, Eye, Building, Briefcase, Factory } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock project data
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

// Mock company data
const mockCompanies = [
  {
    id: '1',
    name: 'Global Bank',
    industry: 'Financial Services',
    location: 'New York, USA',
    website: 'globalbank.com',
    contacts: 3,
    projects: 2
  },
  {
    id: '2',
    name: 'Fashion Brand X',
    industry: 'Retail & Fashion',
    location: 'Paris, France',
    website: 'fashionbrandx.com',
    contacts: 2,
    projects: 1
  },
  {
    id: '3',
    name: 'Ministry of Technology',
    industry: 'Government',
    location: 'Singapore',
    website: 'tech.gov.sg',
    contacts: 4,
    projects: 1
  },
  {
    id: '4',
    name: 'Tech Innovators Inc',
    industry: 'Technology',
    location: 'San Francisco, USA',
    website: 'techinnovators.com',
    contacts: 5,
    projects: 0
  },
];

// Mock industry data
const mockIndustries = [
  {
    id: '1',
    name: 'Financial Services',
    companies: 3,
    projects: 4,
    description: 'Banks, insurance, and investment firms'
  },
  {
    id: '2',
    name: 'Retail & Fashion',
    companies: 5,
    projects: 7,
    description: 'Clothing, accessories, and retail stores'
  },
  {
    id: '3',
    name: 'Government',
    companies: 2,
    projects: 3,
    description: 'Government agencies and public sector'
  },
  {
    id: '4',
    name: 'Healthcare',
    companies: 4,
    projects: 5,
    description: 'Hospitals, clinics, and healthcare providers'
  },
  {
    id: '5',
    name: 'Technology',
    companies: 7,
    projects: 12,
    description: 'Software, hardware, and IT services'
  },
];

const ProjectsAdmin: React.FC = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [companies, setCompanies] = useState(mockCompanies);
  const [industries, setIndustries] = useState(mockIndustries);

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
      toast.success('Project deleted successfully');
    }
  };

  const handleDeleteCompany = (id: string) => {
    if (confirm('Are you sure you want to delete this company?')) {
      setCompanies(companies.filter(company => company.id !== id));
      toast.success('Company deleted successfully');
    }
  };

  const handleDeleteIndustry = (id: string) => {
    if (confirm('Are you sure you want to delete this industry?')) {
      setIndustries(industries.filter(industry => industry.id !== id));
      toast.success('Industry deleted successfully');
    }
  };

  return (
    <AdminLayout title="Portfolio Management">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="industries">Industries</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">All Projects</h2>
              <p className="text-sm text-muted-foreground">Manage and organize your project portfolio</p>
            </div>
            <Link to="/admin/projects/add" className="admin-btn-primary flex items-center gap-1">
              <PlusCircle size={16} />
              <span>Add New Project</span>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{projects.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Featured Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Eye className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{projects.filter(p => p.featured).length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Building className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{companies.length}</span>
                </div>
              </CardContent>
            </Card>
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
        </TabsContent>

        <TabsContent value="companies" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Companies</h2>
              <p className="text-sm text-muted-foreground">Manage client companies and organizations</p>
            </div>
            <Button 
              className="admin-btn-primary flex items-center gap-1"
              onClick={() => toast.info('This would open a form to add a new company')}
            >
              <PlusCircle size={16} />
              <span>Add New Company</span>
            </Button>
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Website</TableHead>
                  <TableHead>Contacts</TableHead>
                  <TableHead>Projects</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.industry}</TableCell>
                    <TableCell>{company.location}</TableCell>
                    <TableCell>
                      <a 
                        href={`https://${company.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {company.website}
                      </a>
                    </TableCell>
                    <TableCell>{company.contacts}</TableCell>
                    <TableCell>
                      <Badge variant={company.projects > 0 ? "default" : "outline"}>
                        {company.projects}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toast.info('View company details')}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          title="View Company"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => toast.info('Edit company details')}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          title="Edit Company"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCompany(company.id)}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                          title="Delete Company"
                          disabled={company.projects > 0}
                        >
                          <Trash2 size={16} className={company.projects > 0 ? "opacity-50" : ""} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="industries" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Industries</h2>
              <p className="text-sm text-muted-foreground">Manage industry categories for your portfolio</p>
            </div>
            <Button 
              className="admin-btn-primary flex items-center gap-1"
              onClick={() => toast.info('This would open a form to add a new industry')}
            >
              <PlusCircle size={16} />
              <span>Add New Industry</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {industries.slice(0, 3).map(industry => (
              <Card key={industry.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                    <div className="flex justify-between mt-2">
                      <div className="text-sm">
                        <span className="font-semibold">{industry.companies}</span> Companies
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">{industry.projects}</span> Projects
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Industry Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Companies</TableHead>
                  <TableHead>Projects</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {industries.map((industry) => (
                  <TableRow key={industry.id}>
                    <TableCell className="font-medium">{industry.name}</TableCell>
                    <TableCell>{industry.description}</TableCell>
                    <TableCell>{industry.companies}</TableCell>
                    <TableCell>{industry.projects}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toast.info('Edit industry details')}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          title="Edit Industry"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteIndustry(industry.id)}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                          title="Delete Industry"
                          disabled={industry.companies > 0}
                        >
                          <Trash2 size={16} className={industry.companies > 0 ? "opacity-50" : ""} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default ProjectsAdmin;
