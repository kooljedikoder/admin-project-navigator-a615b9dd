
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { toast } from 'sonner';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadCloud, Plus, X, Image as ImageIcon, AlertTriangle, Loader2 } from 'lucide-react';

// Mock data - would be fetched from API in real app
const mockProjects = [
  {
    id: '1',
    title: 'Financial App Redesign',
    client: 'Global Bank',
    overview: 'A complete redesign of the banking application for better user experience and accessibility.',
    year: '2023',
    category: 'Financial Institutions',
    service: 'Websites & Apps Development',
    featured: true,
    environment: 'Hybrid',
    bannerImage: 'https://source.unsplash.com/random/1200x400?banking',
    clientLogo: 'https://source.unsplash.com/random/200x200?logo',
    gallery: [
      'https://source.unsplash.com/random/800x600?finance',
      'https://source.unsplash.com/random/800x600?app',
      'https://source.unsplash.com/random/800x600?bank'
    ],
    phases: {
      brief: { 
        text: 'The client requested a modern, user-friendly interface for their banking application.',
        image: 'https://source.unsplash.com/random/800x600?meeting'
      },
      strategy: {
        text: 'We developed a comprehensive design strategy focusing on accessibility and ease of use.',
        image: 'https://source.unsplash.com/random/800x600?planning'
      },
      development: {
        text: 'Our development team built the application using React Native for cross-platform compatibility.',
        image: 'https://source.unsplash.com/random/800x600?coding'
      },
      deployment: {
        text: 'The app was deployed to both App Store and Google Play with a phased rollout.',
        image: 'https://source.unsplash.com/random/800x600?launch'
      },
      final: {
        text: 'The redesigned app received positive user feedback and increased user engagement by 45%.',
        image: 'https://source.unsplash.com/random/800x600?success'
      }
    }
  },
  {
    id: '2',
    title: 'Retail Space Design',
    client: 'Fashion Brand X',
    overview: 'A comprehensive redesign of flagship retail stores to enhance customer experience.',
    year: '2022',
    category: 'Retail & Hospitality',
    service: 'Retail & Brand Space Design',
    featured: false,
    environment: 'Onsite',
    bannerImage: 'https://source.unsplash.com/random/1200x400?retail',
    clientLogo: 'https://source.unsplash.com/random/200x200?fashion',
    gallery: [
      'https://source.unsplash.com/random/800x600?store',
      'https://source.unsplash.com/random/800x600?retail',
      'https://source.unsplash.com/random/800x600?fashion'
    ],
    phases: {
      brief: { 
        text: 'The client wanted to refresh their retail spaces to reflect their updated brand identity.',
        image: 'https://source.unsplash.com/random/800x600?briefing'
      },
      strategy: {
        text: 'We created a design strategy that emphasized open spaces, natural lighting, and interactive displays.',
        image: 'https://source.unsplash.com/random/800x600?design'
      },
      development: {
        text: 'Our team developed detailed mockups and 3D models of the new store layouts.',
        image: 'https://source.unsplash.com/random/800x600?model'
      },
      deployment: {
        text: 'The implementation was rolled out to flagship stores first, with regional stores following.',
        image: 'https://source.unsplash.com/random/800x600?construction'
      },
      final: {
        text: 'The redesign resulted in a 30% increase in foot traffic and 25% increase in average purchase value.',
        image: 'https://source.unsplash.com/random/800x600?celebration'
      }
    }
  },
  {
    id: '3',
    title: 'Government Portal',
    client: 'Ministry of Technology',
    overview: 'A modern, accessible web portal to improve citizen access to government services.',
    year: '2023',
    category: 'Government and NGOs',
    service: 'AI & Brand Transformation',
    featured: true,
    environment: 'Remote',
    bannerImage: 'https://source.unsplash.com/random/1200x400?government',
    clientLogo: 'https://source.unsplash.com/random/200x200?government',
    gallery: [
      'https://source.unsplash.com/random/800x600?tech',
      'https://source.unsplash.com/random/800x600?government',
      'https://source.unsplash.com/random/800x600?digital'
    ],
    phases: {
      brief: { 
        text: 'The ministry needed a modern portal that would simplify citizen access to government services.',
        image: 'https://source.unsplash.com/random/800x600?meeting'
      },
      strategy: {
        text: 'We developed a strategy focused on accessibility, mobile-first design, and AI-powered assistance.',
        image: 'https://source.unsplash.com/random/800x600?strategy'
      },
      development: {
        text: 'The portal was built using React with a headless CMS for easy content management by staff.',
        image: 'https://source.unsplash.com/random/800x600?programming'
      },
      deployment: {
        text: 'The system was deployed in phases, with critical services launched first.',
        image: 'https://source.unsplash.com/random/800x600?server'
      },
      final: {
        text: 'The portal now serves over 5 million citizens and has reduced service processing times by 60%.',
        image: 'https://source.unsplash.com/random/800x600?success'
      }
    }
  }
];

const EditProject: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  // Fetch project data (simulated)
  useEffect(() => {
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      const project = mockProjects.find(p => p.id === id);
      if (project) {
        setProjectData(project);
        setError(null);
      } else {
        setError('Project not found');
      }
      setLoading(false);
    }, 800);
  }, [id]);

  // Mock function to simulate file upload
  const handleFileUpload = (field: string, phaseField?: string) => {
    // In a real app, this would upload to a server and get a URL back
    const mockImageUrl = `https://source.unsplash.com/random/800x600?sig=${Math.random()}`;
    
    if (phaseField) {
      setProjectData(prev => ({
        ...prev,
        phases: {
          ...prev.phases,
          [phaseField]: {
            ...prev.phases[phaseField as keyof typeof prev.phases],
            image: mockImageUrl
          }
        }
      }));
    } else if (field === 'gallery') {
      setProjectData(prev => ({
        ...prev,
        gallery: [...prev.gallery, mockImageUrl]
      }));
    } else {
      setProjectData(prev => ({
        ...prev,
        [field]: mockImageUrl
      }));
    }
    
    toast.success('Image uploaded successfully');
  };

  const removeGalleryImage = (index: number) => {
    setProjectData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_: string, i: number) => i !== index)
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setProjectData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: value
        }
      }));
    } else {
      setProjectData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (checked: boolean, name: string) => {
    setProjectData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('Updating project data:', projectData);
    toast.success('Project updated successfully');
    // Navigate back to projects list
    navigate('/admin/projects');
  };

  // Show loading state
  if (loading) {
    return (
      <AdminLayout title="Edit Project">
        <div className="flex h-[400px] w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 animate-spin text-[hsl(var(--admin-primary))]" />
            <p className="mt-4 text-lg">Loading project data...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  // Show error state
  if (error || !projectData) {
    return (
      <AdminLayout title="Edit Project">
        <div className="flex h-[400px] w-full items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 text-amber-500" />
            <p className="mt-4 text-lg font-medium">{error || 'An error occurred'}</p>
            <p className="mt-2 text-muted-foreground">
              We couldn't find the project you're looking for.
            </p>
            <Button 
              onClick={() => navigate('/admin/projects')} 
              className="admin-btn-primary mt-6"
            >
              Back to Projects
            </Button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={`Edit Project: ${projectData.title}`}>
      <Tabs defaultValue="basic">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="phases">Project Phases</TabsTrigger>
        </TabsList>
        
        <form onSubmit={handleSubmit}>
          <TabsContent value="basic" className="space-y-6">
            <div className="admin-section">
              <h2 className="admin-subheading">Project Information</h2>
              
              <div className="mt-6 space-y-6">
                <div className="space-y-4">
                  <FormItem>
                    <FormLabel className="admin-label">Banner Image</FormLabel>
                    <FormDescription>Upload a banner image for the top of the project page</FormDescription>
                    {projectData.bannerImage ? (
                      <div className="relative mt-2 h-40 w-full overflow-hidden rounded-md border border-gray-200">
                        <img 
                          src={projectData.bannerImage} 
                          alt="Banner preview" 
                          className="h-full w-full object-cover"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon"
                          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                          onClick={() => setProjectData(prev => ({ ...prev, bannerImage: null }))}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        type="button"
                        variant="outline" 
                        className="mt-2 h-40 w-full border-dashed"
                        onClick={() => handleFileUpload('bannerImage')}
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <UploadCloud className="h-8 w-8 text-gray-400" />
                          <span>Click to upload banner image</span>
                        </div>
                      </Button>
                    )}
                  </FormItem>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <FormItem>
                    <FormLabel className="admin-label required">Project Title</FormLabel>
                    <FormControl>
                      <Input
                        name="title"
                        value={projectData.title}
                        onChange={handleInputChange}
                        className="admin-input"
                        placeholder="Enter project title"
                        required
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel className="admin-label">Year</FormLabel>
                    <Select
                      value={projectData.year}
                      onValueChange={(value) => handleSelectChange(value, 'year')}
                    >
                      <SelectTrigger className="admin-select">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map(year => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <FormItem>
                      <FormLabel className="admin-label">Client Name</FormLabel>
                      <FormControl>
                        <Input
                          name="client"
                          value={projectData.client}
                          onChange={handleInputChange}
                          className="admin-input"
                          placeholder="Enter client name"
                        />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel className="admin-label">Client Logo</FormLabel>
                      {projectData.clientLogo ? (
                        <div className="relative mt-2 h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.clientLogo} 
                            alt="Client logo preview" 
                            className="h-full w-full object-contain p-2"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({ ...prev, clientLogo: null }))}
                          >
                            <X size={12} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-24 w-24 border-dashed"
                          onClick={() => handleFileUpload('clientLogo')}
                        >
                          <div className="flex flex-col items-center justify-center gap-1">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-xs">Upload logo</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                  
                  <FormItem className="flex flex-col">
                    <FormLabel className="admin-label">Featured Project</FormLabel>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={projectData.featured}
                        onCheckedChange={(checked) => handleSwitchChange(checked, 'featured')}
                      />
                      <span className="text-sm">
                        {projectData.featured ? 'Yes, feature this project' : 'No, do not feature'}
                      </span>
                    </div>
                    <FormDescription className="mt-2">
                      Featured projects appear on the homepage and are highlighted in the projects list
                    </FormDescription>
                  </FormItem>
                </div>
                
                <FormItem>
                  <FormLabel className="admin-label required">Project Overview</FormLabel>
                  <FormControl>
                    <Textarea
                      name="overview"
                      value={projectData.overview}
                      onChange={handleInputChange}
                      className="admin-textarea min-h-[150px]"
                      placeholder="Describe the project..."
                      required
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="categories" className="space-y-6">
            <div className="admin-section">
              <h2 className="admin-subheading">Project Categories</h2>
              
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <FormItem>
                  <FormLabel className="admin-label">Industry</FormLabel>
                  <Select
                    value={projectData.category}
                    onValueChange={(value) => handleSelectChange(value, 'category')}
                  >
                    <SelectTrigger className="admin-select">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Financial Institutions">Financial Institutions</SelectItem>
                      <SelectItem value="Telecommunication Companies">Telecommunication Companies</SelectItem>
                      <SelectItem value="Mobile & PC Manufacturers">Mobile & PC Manufacturers</SelectItem>
                      <SelectItem value="Government and NGOs">Government and NGOs</SelectItem>
                      <SelectItem value="Large & Small Businesses">Large & Small Businesses</SelectItem>
                      <SelectItem value="Retail & Hospitality">Retail & Hospitality</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
                
                <FormItem>
                  <FormLabel className="admin-label">Service Type</FormLabel>
                  <Select
                    value={projectData.service}
                    onValueChange={(value) => handleSelectChange(value, 'service')}
                  >
                    <SelectTrigger className="admin-select">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Retail & Brand Space Design">Retail & Brand Space Design</SelectItem>
                      <SelectItem value="Advertising & Brand Development">Advertising & Brand Development</SelectItem>
                      <SelectItem value="Websites & Apps Development">Websites & Apps Development</SelectItem>
                      <SelectItem value="Digital Signage & OOH">Digital Signage & OOH</SelectItem>
                      <SelectItem value="Project Management">Project Management</SelectItem>
                      <SelectItem value="AI & Brand Transformation">AI & Brand Transformation</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
                
                <FormItem>
                  <FormLabel className="admin-label">Work Environment</FormLabel>
                  <Select
                    value={projectData.environment}
                    onValueChange={(value) => handleSelectChange(value, 'environment')}
                  >
                    <SelectTrigger className="admin-select">
                      <SelectValue placeholder="Select environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Onsite">Onsite</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery" className="space-y-6">
            <div className="admin-section">
              <h2 className="admin-subheading">Project Gallery</h2>
              <p className="text-sm text-muted-foreground">
                Add images to showcase your project. These will appear in the project gallery.
              </p>
              
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {projectData.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-md border border-gray-200">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`} 
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-gray-700 shadow-sm hover:bg-white"
                        onClick={() => removeGalleryImage(index)}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  
                  <Button 
                    type="button"
                    variant="outline" 
                    className="aspect-square border-dashed"
                    onClick={() => handleFileUpload('gallery')}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Plus className="h-8 w-8 text-gray-400" />
                      <span className="text-sm">Add Image</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="phases" className="space-y-6">
            <div className="admin-section">
              <h2 className="admin-subheading">Project Phases</h2>
              <p className="text-sm text-muted-foreground">
                Document the different phases of your project to tell the complete story.
              </p>
              
              <div className="mt-6 space-y-8">
                {/* Phase 1: The Brief */}
                <div className="border-l-4 border-l-[hsl(var(--admin-primary))] pl-4">
                  <h3 className="mb-3 text-lg font-medium">Phase 1: The Brief</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="phases.brief.text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="admin-label">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={projectData.phases.brief.text}
                              onChange={handleInputChange}
                              className="admin-textarea min-h-[120px]"
                              placeholder="Describe the brief phase..."
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormItem>
                      <FormLabel className="admin-label">Phase Image</FormLabel>
                      {projectData.phases.brief.image ? (
                        <div className="relative mt-2 h-32 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.phases.brief.image} 
                            alt="Brief phase image" 
                            className="h-full w-full object-cover"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({
                              ...prev,
                              phases: { ...prev.phases, brief: { ...prev.phases.brief, image: null } }
                            }))}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-32 w-full border-dashed"
                          onClick={() => handleFileUpload('phases', 'brief')}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">Upload image</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                </div>
                
                {/* Phase 2: Design Strategy */}
                <div className="border-l-4 border-l-[hsl(var(--admin-primary))] pl-4">
                  <h3 className="mb-3 text-lg font-medium">Phase 2: Design Strategy</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="phases.strategy.text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="admin-label">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={projectData.phases.strategy.text}
                              onChange={handleInputChange}
                              className="admin-textarea min-h-[120px]"
                              placeholder="Describe the design strategy..."
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormItem>
                      <FormLabel className="admin-label">Phase Image</FormLabel>
                      {projectData.phases.strategy.image ? (
                        <div className="relative mt-2 h-32 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.phases.strategy.image} 
                            alt="Strategy phase image" 
                            className="h-full w-full object-cover"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({
                              ...prev,
                              phases: { ...prev.phases, strategy: { ...prev.phases.strategy, image: null } }
                            }))}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-32 w-full border-dashed"
                          onClick={() => handleFileUpload('phases', 'strategy')}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">Upload image</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                </div>
                
                {/* Additional phases - implementation similar to above */}
                <div className="border-l-4 border-l-[hsl(var(--admin-primary))] pl-4">
                  <h3 className="mb-3 text-lg font-medium">Phase 3: Development</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="phases.development.text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="admin-label">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={projectData.phases.development.text}
                              onChange={handleInputChange}
                              className="admin-textarea min-h-[120px]"
                              placeholder="Describe the development phase..."
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormItem>
                      <FormLabel className="admin-label">Phase Image</FormLabel>
                      {projectData.phases.development.image ? (
                        <div className="relative mt-2 h-32 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.phases.development.image} 
                            alt="Development phase image" 
                            className="h-full w-full object-cover"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({
                              ...prev,
                              phases: { ...prev.phases, development: { ...prev.phases.development, image: null } }
                            }))}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-32 w-full border-dashed"
                          onClick={() => handleFileUpload('phases', 'development')}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">Upload image</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                </div>
                
                <div className="border-l-4 border-l-[hsl(var(--admin-primary))] pl-4">
                  <h3 className="mb-3 text-lg font-medium">Phase 4: Deployment</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="phases.deployment.text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="admin-label">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={projectData.phases.deployment.text}
                              onChange={handleInputChange}
                              className="admin-textarea min-h-[120px]"
                              placeholder="Describe the deployment phase..."
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormItem>
                      <FormLabel className="admin-label">Phase Image</FormLabel>
                      {projectData.phases.deployment.image ? (
                        <div className="relative mt-2 h-32 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.phases.deployment.image} 
                            alt="Deployment phase image" 
                            className="h-full w-full object-cover"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({
                              ...prev,
                              phases: { ...prev.phases, deployment: { ...prev.phases.deployment, image: null } }
                            }))}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-32 w-full border-dashed"
                          onClick={() => handleFileUpload('phases', 'deployment')}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">Upload image</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                </div>
                
                <div className="border-l-4 border-l-[hsl(var(--admin-primary))] pl-4">
                  <h3 className="mb-3 text-lg font-medium">Final Phase</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="phases.final.text"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="admin-label">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={projectData.phases.final.text}
                              onChange={handleInputChange}
                              className="admin-textarea min-h-[120px]"
                              placeholder="Describe the final results..."
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormItem>
                      <FormLabel className="admin-label">Phase Image</FormLabel>
                      {projectData.phases.final.image ? (
                        <div className="relative mt-2 h-32 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={projectData.phases.final.image} 
                            alt="Final phase image" 
                            className="h-full w-full object-cover"
                          />
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white text-gray-700 shadow-sm hover:bg-gray-100"
                            onClick={() => setProjectData(prev => ({
                              ...prev,
                              phases: { ...prev.phases, final: { ...prev.phases.final, image: null } }
                            }))}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          type="button"
                          variant="outline" 
                          className="mt-2 h-32 w-full border-dashed"
                          onClick={() => handleFileUpload('phases', 'final')}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            <ImageIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">Upload image</span>
                          </div>
                        </Button>
                      )}
                    </FormItem>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <div className="mt-6 flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/projects')}
              className="admin-btn-secondary"
            >
              Cancel
            </Button>
            <Button type="submit" className="admin-btn-primary">
              Save Changes
            </Button>
          </div>
        </form>
      </Tabs>
    </AdminLayout>
  );
};

export default EditProject;
