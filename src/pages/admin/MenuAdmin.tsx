
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { DropResult } from '@hello-pangea/dnd';
import MenuStructure from '@/components/admin/menu/MenuStructure';
import MenuItemEditor from '@/components/admin/menu/MenuItemEditor';
import MenuSettings from '@/components/admin/menu/MenuSettings';
import { MenuItem } from '@/types/menu';
import { 
  menuLocations, 
  initialMenuItems, 
  availablePages, 
  availableCategories 
} from '@/data/menuData';

// Form schema for menu item
const menuItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().min(1, 'URL is required'),
  type: z.enum(['page', 'custom', 'category']),
  target: z.enum(['_self', '_blank']),
});

type MenuItemFormValues = z.infer<typeof menuItemSchema>;

const MenuAdmin: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [selectedLocation, setSelectedLocation] = useState('primary');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const form = useForm<MenuItemFormValues>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      label: '',
      url: '',
      type: 'page',
      target: '_self',
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
          <MenuStructure 
            menuItems={menuItems}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            handleDragEnd={handleDragEnd}
            handleSaveMenu={handleSaveMenu}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
            menuLocations={menuLocations}
            expandedItems={expandedItems}
            toggleItemExpand={toggleItemExpand}
          />
        </div>

        <div className="md:col-span-4">
          <MenuItemEditor 
            form={form}
            selectedItem={selectedItem}
            handleAddNewItem={handleAddNewItem}
            handleUpdateItem={handleUpdateItem}
            setSelectedItem={setSelectedItem}
            availablePages={availablePages}
            availableCategories={availableCategories}
          />
          
          <MenuSettings 
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            menuLocations={menuLocations}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default MenuAdmin;
