
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  DragDropContext, 
  Droppable, 
  Draggable, 
  DropResult 
} from '@hello-pangea/dnd';
import { 
  GripVertical, 
  ChevronDown, 
  ChevronRight, 
  Settings, 
  ExternalLink, 
  Trash2,
  Save
} from 'lucide-react';
import { toast } from 'sonner';
import { MenuItem } from '@/types/menu';

interface MenuStructureProps {
  menuItems: MenuItem[];
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  handleDragEnd: (result: DropResult) => void;
  handleSaveMenu: () => void;
  handleEditItem: (item: MenuItem) => void;
  handleDeleteItem: (itemId: string) => void;
  menuLocations: { id: string; name: string }[];
  expandedItems: string[];
  toggleItemExpand: (itemId: string) => void;
}

const MenuStructure: React.FC<MenuStructureProps> = ({
  menuItems,
  selectedLocation,
  setSelectedLocation,
  handleDragEnd,
  handleSaveMenu,
  handleEditItem,
  handleDeleteItem,
  menuLocations,
  expandedItems,
  toggleItemExpand
}) => {
  return (
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
  );
};

export default MenuStructure;
