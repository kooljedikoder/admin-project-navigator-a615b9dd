
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  DragDropContext, 
  Droppable, 
  Draggable, 
  DropResult 
} from '@hello-pangea/dnd';
import { 
  GripVertical, 
  Plus, 
  ChevronDown, 
  ChevronRight, 
  Settings, 
  ExternalLink, 
  Trash2,
  Save
} from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

<lov-add-dependency>@hello-pangea/dnd@^3.0.0</lov-add-dependency>

// Mock menu locations
const menuLocations = [
  { id: 'primary', name: 'Primary Navigation' },
  { id: 'footer', name: 'Footer Menu' },
  { id: 'sidebar', name: 'Sidebar Menu' },
  { id: 'mobile', name: 'Mobile Menu' },
];

// Mock menu items
interface MenuItem {
  id: string;
  label: string;
  url: string;
  type: 'page' | 'custom' | 'category';
  target: '_self' | '_blank';
  children: MenuItem[];
}

// Initial menu data
const initialMenuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'about',
    label: 'About',
    url: '/about',
    type: 'page',
    target: '_self',
    children: [
      {
        id: 'team',
        label: 'Our Team',
        url: '/about/team',
        type: 'page',
        target: '_self',
        children: [],
      },
      {
        id: 'history',
        label: 'Our History',
        url: '/about/history',
        type: 'page',
        target: '_self',
        children: [],
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    url: '/services',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'blog',
    label: 'Blog',
    url: '/blog',
    type: 'category',
    target: '_self',
    children: [],
  },
  {
    id: 'contact',
    label: 'Contact',
    url: '/contact',
    type: 'page',
    target: '_self',
    children: [],
  },
  {
    id: 'external',
    label: 'External Link',
    url: 'https://example.com',
    type: 'custom',
    target: '_blank',
    children: [],
  },
];

// Form schema for menu item
const menuItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().min(1, 'URL is required'),
  type: z.enum(['page', 'custom', 'category']),
  target: z.enum(['_self', '_blank']),
});

// Available pages for adding to menu
const availablePages = [
  { id: 'home', title: 'Home', url: '/' },
  { id: 'about', title: 'About Us', url: '/about' },
  { id: 'services', title: 'Services', url: '/services' },
  { id: 'contact', title: 'Contact', url: '/contact' },
  { id: 'blog', title: 'Blog', url: '/blog' },
  { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
];

// Available categories for adding to menu
const availableCategories = [
  { id: 'news', title: 'News', url: '/category/news' },
  { id: 'tutorials', title: 'Tutorials', url: '/category/tutorials' },
  { id: 'resources', title: 'Resources', url: '/category/resources' },
];

const MenuAdmin: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [selectedLocation, setSelectedLocation] = useState('primary');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      label: '',
      url: '',
      type: 'page' as const,
      target: '_self' as const,
    },
  });

  const toggleItemExpand = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(menuItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMenuItems(items);
    toast.success('Menu item reordered');
  };

  const handleSaveMenu = () => {
    // In a real app, this would save to a database
    console.log('Saving menu:', { location: selectedLocation, items: menuItems });
    toast.success('Menu saved successfully');
  };

  const handleAddNewItem = () => {
    const values = form.getValues();
    const newItem: MenuItem = {
      id: `item-${Date.now()}`,
      label: values.label,
      url: values.url,
      type: values.type,
      target: values.target,
      children: [],
    };
    
    setMenuItems([...menuItems, newItem]);
    form.reset();
    toast.success('Menu item added');
  };

  const handleDeleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to delete this menu item?')) {
      // This is a simple implementation that only handles top-level items
      // A real implementation would need to recursively search through children
      setMenuItems(menuItems.filter(item => item.id !== itemId));
      setSelectedItem(null);
      toast.success('Menu item deleted');
    }
  };

  const handleEditItem = (item: MenuItem) => {
    setSelectedItem(item);
    form.reset({
      label: item.label,
      url: item.url,
      type: item.type,
      target: item.target,
    });
  };

  const handleUpdateItem = () => {
    if (!selectedItem) return;
    
    const values = form.getValues();
    
    // Update the item (simplified for this example)
    setMenuItems(menuItems.map(item => 
      item.id === selectedItem.id 
        ? { ...item, ...values }
        : item
    ));
    
    setSelectedItem(null);
    form.reset();
    toast.success('Menu item updated');
  };

  return (
    <AdminLayout title="Menu Management">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Menu Builder</h2>
        <p className="text-sm text-muted-foreground">Create and organize your website navigation menus</p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Menu Structure</CardTitle>
                  <CardDescription>
                    Drag and drop items to reorder. Click on an item to edit its properties.
                  </CardDescription>
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select menu location" />
                  </SelectTrigger>
                  <SelectContent>
                    {menuLocations.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="menu-items">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-2"
                    >
                      {menuItems.length === 0 ? (
                        <div className="rounded-md border border-dashed border-gray-300 p-6 text-center">
                          <p className="text-sm text-gray-500">No menu items yet. Add some from the panel on the right.</p>
                        </div>
                      ) : (
                        menuItems.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="rounded-md border border-gray-200 bg-white"
                              >
                                <div className="flex items-center justify-between p-3">
                                  <div className="flex items-center gap-2">
                                    <div {...provided.dragHandleProps}>
                                      <GripVertical className="h-5 w-5 text-gray-400" />
                                    </div>
                                    
                                    {item.children.length > 0 && (
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-6 w-6 p-0"
                                        onClick={() => toggleItemExpand(item.id)}
                                      >
                                        {expandedItems.includes(item.id) 
                                          ? <ChevronDown size={16} /> 
                                          : <ChevronRight size={16} />
                                        }
                                      </Button>
                                    )}
                                    
                                    <span 
                                      className="font-medium hover:cursor-pointer"
                                      onClick={() => handleEditItem(item)}
                                    >
                                      {item.label}
                                    </span>
                                    
                                    {item.type === 'custom' && item.target === '_blank' && (
                                      <ExternalLink size={14} className="text-gray-400" />
                                    )}
                                    
                                    <Badge variant="outline" className="ml-2 text-xs">
                                      {item.type}
                                    </Badge>
                                  </div>
                                  
                                  <div className="flex items-center gap-1">
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-8 w-8 p-0"
                                      onClick={() => handleEditItem(item)}
                                    >
                                      <Settings size={16} />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                      onClick={() => handleDeleteItem(item.id)}
                                    >
                                      <Trash2 size={16} />
                                    </Button>
                                  </div>
                                </div>
                                
                                {/* Display children if expanded */}
                                {expandedItems.includes(item.id) && item.children.length > 0 && (
                                  <div className="border-t border-gray-100 pl-8 pr-3">
                                    {item.children.map((child, childIndex) => (
                                      <div 
                                        key={child.id}
                                        className="flex items-center justify-between border-b border-gray-50 p-2 last:border-0"
                                      >
                                        <div className="flex items-center gap-2">
                                          <span 
                                            className="text-sm hover:cursor-pointer"
                                            onClick={() => handleEditItem(child)}
                                          >
                                            {child.label}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            className="h-6 w-6 p-0"
                                            onClick={() => handleEditItem(child)}
                                          >
                                            <Settings size={14} />
                                          </Button>
                                          <Button 
                                            variant="ghost" 
                                            size="sm" 
                                            className="h-6 w-6 p-0 text-red-500"
                                            onClick={() => handleDeleteItem(child.id)}
                                          >
                                            <Trash2 size={14} />
                                          </Button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              
              <div className="mt-4 flex justify-end">
                <Button onClick={handleSaveMenu} className="gap-1">
                  <Save size={16} />
                  Save Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>{selectedItem ? 'Edit Menu Item' : 'Add Menu Item'}</CardTitle>
              <CardDescription>
                {selectedItem 
                  ? 'Update the selected menu item properties' 
                  : 'Add a new item to your menu'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="custom">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                  <TabsTrigger value="pages">Pages</TabsTrigger>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                </TabsList>
                
                <TabsContent value="custom" className="pt-4">
                  <Form {...form}>
                    <FormField
                      control={form.control}
                      name="label"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Label</FormLabel>
                          <FormControl>
                            <Input placeholder="Menu item text" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Item Type</FormLabel>
                          <Select 
                            value={field.value} 
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="page">Page</SelectItem>
                              <SelectItem value="custom">Custom Link</SelectItem>
                              <SelectItem value="category">Category</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="target"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Open In</FormLabel>
                          <Select 
                            value={field.value} 
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select target" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="_self">Same Window</SelectItem>
                              <SelectItem value="_blank">New Window</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    
                    <div className="mt-4 flex justify-end">
                      {selectedItem ? (
                        <>
                          <Button 
                            variant="outline" 
                            className="mr-2"
                            onClick={() => setSelectedItem(null)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleUpdateItem}>Update Item</Button>
                        </>
                      ) : (
                        <Button onClick={handleAddNewItem}>Add to Menu</Button>
                      )}
                    </div>
                  </Form>
                </TabsContent>
                
                <TabsContent value="pages" className="pt-4">
                  <div className="space-y-2">
                    {availablePages.map(page => (
                      <div 
                        key={page.id}
                        className="flex items-center justify-between rounded-md border border-gray-200 p-2"
                      >
                        <div>
                          <p className="font-medium">{page.title}</p>
                          <p className="text-xs text-gray-500">{page.url}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => {
                            form.reset({
                              label: page.title,
                              url: page.url,
                              type: 'page',
                              target: '_self',
                            });
                            handleAddNewItem();
                          }}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="categories" className="pt-4">
                  <div className="space-y-2">
                    {availableCategories.map(category => (
                      <div 
                        key={category.id}
                        className="flex items-center justify-between rounded-md border border-gray-200 p-2"
                      >
                        <div>
                          <p className="font-medium">{category.title}</p>
                          <p className="text-xs text-gray-500">{category.url}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => {
                            form.reset({
                              label: category.title,
                              url: category.url,
                              type: 'category',
                              target: '_self',
                            });
                            handleAddNewItem();
                          }}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Menu Settings</CardTitle>
              <CardDescription>Additional menu configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <FormLabel>Menu Name</FormLabel>
                  <Input 
                    placeholder="Menu Name" 
                    defaultValue={menuLocations.find(loc => loc.id === selectedLocation)?.name}
                  />
                  <FormDescription className="mt-1 text-xs">
                    The name is used for administrative purposes
                  </FormDescription>
                </div>
                
                <Separator />
                
                <div>
                  <FormLabel>Display Location</FormLabel>
                  <div className="mt-2 space-y-2">
                    {menuLocations.map(location => (
                      <div 
                        key={location.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id={`loc-${location.id}`}
                          checked={selectedLocation === location.id}
                          onChange={() => setSelectedLocation(location.id)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor={`loc-${location.id}`}>{location.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MenuAdmin;
