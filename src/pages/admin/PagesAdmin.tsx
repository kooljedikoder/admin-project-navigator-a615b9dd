
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  PlusCircle, 
  Pencil, 
  Trash2, 
  Eye, 
  Grid, 
  List, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink,
  GripVertical
} from 'lucide-react';
import { toast } from 'sonner';
import { initialMenuItems } from '@/data/menuData';

const PagesAdmin: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const handleDeletePage = (id: string) => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      toast.success('Page deleted successfully');
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    toast.success('Page position updated');
  };

  // Filter pages based on search
  const filteredPages = initialMenuItems.filter(section => 
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout title="Pages Management">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">All Pages</h2>
          <p className="text-sm text-muted-foreground">Manage your website pages</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/pages/add" className="admin-btn-primary flex items-center gap-1">
            <PlusCircle size={16} />
            <span>Add New Page</span>
          </Link>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-1">
              <ExternalLink size={16} />
              <span>View Site</span>
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="w-64">
            <Input
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={viewMode === 'list' ? 'bg-gray-100' : ''}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={viewMode === 'grid' ? 'bg-gray-100' : ''}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </Button>
          </div>
        </div>
      </Card>

      <DragDropContext onDragEnd={handleDragEnd}>
        {viewMode === 'list' ? (
          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>URL Slug</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <Droppable droppableId="pages-list">
                  {(provided) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                      {filteredPages.map((section, index) => (
                        <React.Fragment key={section.id}>
                          <Draggable draggableId={section.id} index={index}>
                            {(provided) => (
                              <TableRow
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
                                <TableCell className="w-[40px]">
                                  <div {...provided.dragHandleProps}>
                                    <GripVertical className="h-4 w-4 text-gray-400" />
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 w-6 p-0"
                                      onClick={() => toggleExpand(section.id)}
                                    >
                                      {expandedSections.includes(section.id) ? 
                                        <ChevronDown size={16} /> : 
                                        <ChevronRight size={16} />
                                      }
                                    </Button>
                                    <span className="font-medium">{section.label}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-sm text-gray-600">{section.url}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">{section.type}</Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                                      <Link to={section.url} target="_blank">
                                        <Eye size={16} />
                                      </Link>
                                    </Button>
                                    <Link to={`/admin/pages/edit/${section.id}`}>
                                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <Pencil size={16} />
                                      </Button>
                                    </Link>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                      onClick={() => handleDeletePage(section.id)}
                                    >
                                      <Trash2 size={16} />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                          </Draggable>
                          {expandedSections.includes(section.id) && section.children.map(child => (
                            <TableRow key={child.id} className="bg-gray-50">
                              <TableCell></TableCell>
                              <TableCell>
                                <div className="ml-8">{child.label}</div>
                              </TableCell>
                              <TableCell className="text-sm text-gray-600">{child.url}</TableCell>
                              <TableCell>
                                <Badge variant="outline">{child.type}</Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                                    <Link to={child.url} target="_blank">
                                      <Eye size={16} />
                                    </Link>
                                  </Button>
                                  <Link to={`/admin/pages/edit/${child.id}`}>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                      <Pencil size={16} />
                                    </Button>
                                  </Link>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                                    onClick={() => handleDeletePage(child.id)}
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Droppable droppableId="pages-grid">
              {(provided) => (
                <div 
                  {...provided.droppableProps} 
                  ref={provided.innerRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 col-span-full"
                >
                  {filteredPages.map((section, index) => (
                    <Draggable key={section.id} draggableId={section.id} index={index}>
                      {(provided) => (
                        <Card 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <div {...provided.dragHandleProps}>
                                <GripVertical className="h-4 w-4 text-gray-400" />
                              </div>
                              <h3 className="font-medium">{section.label}</h3>
                              <Badge variant="outline">{section.type}</Badge>
                            </div>
                            <p className="mb-2 text-sm text-gray-600">{section.url}</p>
                            <div className="flex items-center justify-between mt-4">
                              <Button variant="ghost" size="sm" className="p-0" asChild>
                                <Link to={section.url} target="_blank">
                                  <Eye size={16} />
                                </Link>
                              </Button>
                              <Link to={`/admin/pages/edit/${section.id}`}>
                                <Button variant="ghost" size="sm" className="p-0">
                                  <Pencil size={16} />
                                </Button>
                              </Link>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 text-red-500 hover:text-red-700"
                                onClick={() => handleDeletePage(section.id)}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </DragDropContext>
    </AdminLayout>
  );
};

export default PagesAdmin;
