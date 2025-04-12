
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MenuItem } from '@/types/menu';

// Form schema for menu item
const menuItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().min(1, 'URL is required'),
  type: z.enum(['page', 'custom', 'category']),
  target: z.enum(['_self', '_blank']),
});

type MenuItemFormValues = z.infer<typeof menuItemSchema>;

interface MenuItemEditorProps {
  form: ReturnType<typeof useForm<MenuItemFormValues>>;
  selectedItem: MenuItem | null;
  handleAddNewItem: () => void;
  handleUpdateItem: () => void;
  setSelectedItem: (item: MenuItem | null) => void;
  availablePages: { id: string; title: string; url: string }[];
  availableCategories: { id: string; title: string; url: string }[];
}

const MenuItemEditor: React.FC<MenuItemEditorProps> = ({
  form,
  selectedItem,
  handleAddNewItem,
  handleUpdateItem,
  setSelectedItem,
  availablePages,
  availableCategories
}) => {
  return (
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
  );
};

export default MenuItemEditor;
