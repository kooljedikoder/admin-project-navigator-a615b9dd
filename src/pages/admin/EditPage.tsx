
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AdminLayout from '@/components/admin/AdminLayout';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { ExternalLink } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),
  template: z.string(),
  status: z.string(),
  metaDescription: z.string().optional(),
  content: z.string().optional(),
  featuredImage: z.string().optional(),
  parentPage: z.string().optional(),
  showInNavigation: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

// Mock templates and parent pages for the form
const templates = [
  { id: 'default', name: 'Default' },
  { id: 'full-width', name: 'Full Width' },
  { id: 'sidebar', name: 'With Sidebar' },
  { id: 'landing', name: 'Landing Page' },
  { id: 'contact', name: 'Contact Page' },
];

const parentPages = [
  { id: '', name: 'None (Top Level)' },
  { id: '1', name: 'Home' },
  { id: '2', name: 'About Us' },
  { id: '4', name: 'Services' },
];

// Mock page data - in a real app, this would be fetched from an API
const mockPageData = {
  '1': {
    title: 'Home',
    slug: 'home',
    template: 'default',
    status: 'published',
    metaDescription: 'Welcome to our website homepage',
    content: 'This is the home page content.',
    featuredImage: '/images/home.jpg',
    parentPage: '',
    showInNavigation: true,
  },
  '2': {
    title: 'About Us',
    slug: 'about-us',
    template: 'full-width',
    status: 'published',
    metaDescription: 'Learn more about our company',
    content: 'This is the about us page content.',
    featuredImage: '/images/about.jpg',
    parentPage: '',
    showInNavigation: true,
  },
  '3': {
    title: 'Our Team',
    slug: 'about-us/team',
    template: 'sidebar',
    status: 'published',
    metaDescription: 'Meet our team of professionals',
    content: 'This is the team page content.',
    featuredImage: '/images/team.jpg',
    parentPage: '2',
    showInNavigation: true,
  }
};

const EditPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      slug: '',
      template: 'default',
      status: 'draft',
      metaDescription: '',
      content: '',
      featuredImage: '',
      parentPage: '',
      showInNavigation: false,
    },
  });

  useEffect(() => {
    // In a real app, fetch the page data based on the ID
    if (id && mockPageData[id as keyof typeof mockPageData]) {
      const pageData = mockPageData[id as keyof typeof mockPageData];
      form.reset(pageData);
    } else {
      toast.error('Page not found');
      navigate('/admin/pages');
    }
  }, [id, form, navigate]);

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    toast.success('Page updated successfully');
    navigate('/admin/pages');
  };

  const handleGenerateSlug = () => {
    const title = form.getValues('title');
    if (title) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      form.setValue('slug', slug);
    }
  };

  // Get current values for URL preview
  const parentPageValue = form.watch('parentPage');
  const slugValue = form.watch('slug');
  
  // Create URL preview
  const previewUrl = React.useMemo(() => {
    let url = '/pages/';
    
    if (parentPageValue) {
      const parent = parentPages.find(p => p.id === parentPageValue);
      if (parent && parent.name !== 'None (Top Level)') {
        const parentSlug = parent.name.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
        url += `${parentSlug}/`;
      }
    }
    
    url += slugValue || '[slug]';
    return url;
  }, [parentPageValue, slugValue]);

  return (
    <AdminLayout title="Edit Page">
      <div className="max-w-4xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter page title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Slug</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="page-url-slug" {...field} />
                      </FormControl>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handleGenerateSlug}
                      >
                        Generate
                      </Button>
                    </div>
                    <FormDescription className="flex items-center gap-1">
                      <span>Preview: </span>
                      <code className="rounded bg-muted px-1 text-xs">
                        {previewUrl}
                      </code>
                      {slugValue && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0"
                          asChild
                        >
                          <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </Button>
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="template"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Template</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {templates.map(template => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
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
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="parentPage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Page</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select parent page" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {parentPages.map(page => (
                        <SelectItem key={page.id} value={page.id}>
                          {page.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Make this a subpage of another page
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="metaDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter meta description for SEO" 
                      {...field} 
                      className="h-20"
                    />
                  </FormControl>
                  <FormDescription>
                    This appears in search engine results (recommended: 150-160 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter page content" 
                      {...field} 
                      className="h-40"
                    />
                  </FormControl>
                  <FormDescription>
                    Basic content editor (a rich text editor would be integrated here)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featuredImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image URL or upload" {...field} />
                  </FormControl>
                  <FormDescription>
                    URL of the featured image (media upload would be integrated here)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showInNavigation"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Show in Navigation</FormLabel>
                    <FormDescription>
                      Include this page in the site navigation menu
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

            <div className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/admin/pages')}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditPage;
