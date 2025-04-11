
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Image as ImageIcon, Upload, Link2 } from 'lucide-react';

// Form validation schema
const projectSchema = z.object({
  title: z.string().min(3, { message: 'Project title must be at least 3 characters' }),
  client: z.string().min(2, { message: 'Client name is required' }),
  year: z.string().regex(/^\d{4}$/, { message: 'Year must be a 4-digit number' }),
  category: z.string().min(1, { message: 'Category is required' }),
  service: z.string().min(1, { message: 'Service type is required' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  environment: z.string().min(1, { message: 'Environment is required' }),
  featured: z.boolean().default(false),
  imageUrl: z.string().optional(),
  projectUrl: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const AddProject: React.FC = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      client: '',
      year: new Date().getFullYear().toString(),
      category: '',
      service: '',
      description: '',
      environment: 'Onsite',
      featured: false,
      imageUrl: '',
      projectUrl: '',
    },
  });

  const onSubmit = (data: ProjectFormValues) => {
    // In a real application, this would save to a database
    console.log('Form data submitted:', data);
    
    // Show success message
    toast.success('Project added successfully!');
    
    // Navigate back to projects list
    setTimeout(() => {
      navigate('/admin/projects');
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload this file to a server
      // For demo, we'll just create a local URL preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const categoryOptions = [
    'Financial Institutions', 
    'Retail & Hospitality', 
    'Technology', 
    'Healthcare', 
    'Education',
    'Government and NGOs',
    'Manufacturing',
    'Real Estate'
  ];

  const serviceOptions = [
    'Websites & Apps Development',
    'Retail & Brand Space Design',
    'AI & Brand Transformation',
    'Digital Marketing',
    'Branding & Identity',
    'UX/UI Design',
    'SEO Optimization'
  ];

  const environmentOptions = ['Onsite', 'Remote', 'Hybrid'];

  return (
    <AdminLayout title="Add New Project">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Add New Project</CardTitle>
            <CardDescription>
              Create a new project showcase with details and images
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter project title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="client"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Client</FormLabel>
                        <FormControl>
                          <Input placeholder="Client name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year</FormLabel>
                        <FormControl>
                          <Input placeholder="YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categoryOptions.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the project in detail" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="environment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Environment</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select environment" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {environmentOptions.map((environment) => (
                              <SelectItem key={environment} value={environment}>
                                {environment}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project URL (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Link2 className="h-4 w-4 text-muted-foreground" />
                            <Input placeholder="https://example.com/project" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Link to the live project if available
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border rounded-md p-4">
                  <FormLabel className="block mb-3">Project Image</FormLabel>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 border rounded flex items-center justify-center bg-gray-50">
                      {imagePreview ? (
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover rounded" 
                        />
                      ) : (
                        <ImageIcon className="h-8 w-8 text-gray-300" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <Input 
                          type="file" 
                          id="project-image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full justify-start"
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          Choose Image
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recommended size: 1200 x 800 pixels, Max 2MB
                      </p>
                    </div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Featured Project
                        </FormLabel>
                        <FormDescription>
                          Feature this project on the homepage and in special sections
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-end space-x-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/admin/projects')}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Project</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AddProject;
