
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { 
  ChevronRight,
  ExternalLink,
  Globe,
  GripVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { initialMenuItems } from '@/data/menuData';
import { toast } from 'sonner';

const SiteMap: React.FC = () => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    // In a real app, you would update the site structure here
    toast.success('Section position updated');
  };

  return (
    <AdminLayout title="Site Map">
      <div className="space-y-8">
        <div className="admin-section bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Complete Site Structure</h2>
              <p className="text-gray-500">
                Interactive map of all sections and pages in your website
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <ExternalLink size={16} />
              <span>Open Live Site</span>
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Published</Badge>
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Draft</Badge>
            </div>
            <p className="text-sm text-gray-600">
              Drag and drop sections to reorder them. Click on any page to navigate to it directly.
            </p>
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="site-sections">
              {(provided) => (
                <div 
                  {...provided.droppableProps} 
                  ref={provided.innerRef}
                  className="grid gap-6 mb-6"
                >
                  {initialMenuItems.map((section, index) => (
                    <Draggable 
                      key={section.id} 
                      draggableId={section.id} 
                      index={index}
                    >
                      {(provided) => (
                        <Card 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="overflow-hidden transition-all hover:shadow-md"
                        >
                          <CardHeader className="py-4 px-5 border-b bg-blue-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div {...provided.dragHandleProps}>
                                  <GripVertical className="h-5 w-5 text-gray-400 cursor-grab" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-medium">{section.label}</h3>
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                      {section.type}
                                    </Badge>
                                    <span>{section.url}</span>
                                  </div>
                                </div>
                              </div>
                              <Link 
                                to={section.url} 
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                <ChevronRight size={18} />
                              </Link>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                              {section.children.map((child) => (
                                <div key={child.id} className="p-4 hover:bg-gray-50 transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-1.5 rounded-md bg-gray-100 text-gray-500">
                                        <Globe size={16} />
                                      </div>
                                      <div>
                                        <h4 className="font-medium text-gray-800">{child.label}</h4>
                                        <p className="text-sm text-gray-500">{child.url}</p>
                                      </div>
                                    </div>
                                    <Link 
                                      to={child.url}
                                      className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                      <ChevronRight size={16} />
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <Separator className="my-6" />
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Globe size={14} />
              <span>Export Site Map</span>
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SiteMap;
