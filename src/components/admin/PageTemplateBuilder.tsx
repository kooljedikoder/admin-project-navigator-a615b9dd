
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { 
  PlusCircle, 
  Trash2, 
  GripVertical, 
  Layout, 
  LayoutGrid, 
  Columns, 
  Image, 
  Type, 
  AlignLeft, 
  ListOrdered, 
  Table as TableIcon, 
  Video, 
  FileCode,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SectionBlock {
  id: string;
  name: string;
  type: 'text' | 'image' | 'columns' | 'list' | 'table' | 'accordion' | 'card' | 'product' | 'video' | 'html';
  content: any;
  settings: {
    backgroundColor: string;
    padding: string;
    marginTop: string;
    marginBottom: string;
    fullWidth: boolean;
  };
}

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  blocks: SectionBlock[];
}

const PageTemplateBuilder: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Default Page',
      description: 'Standard page with header, content, and footer',
      thumbnail: '/placeholder.svg',
      blocks: [
        {
          id: '1',
          name: 'Header Section',
          type: 'text',
          content: {
            title: 'Page Title',
            text: '<p>This is the main content of the page. You can edit this text.</p>',
          },
          settings: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            marginTop: '0',
            marginBottom: '2rem',
            fullWidth: false,
          },
        },
        {
          id: '2',
          name: 'Image Section',
          type: 'image',
          content: {
            image: '/placeholder.svg',
            caption: 'Image caption',
            alignment: 'center',
          },
          settings: {
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            marginTop: '0',
            marginBottom: '2rem',
            fullWidth: false,
          },
        },
      ],
    },
    {
      id: '2',
      name: 'Landing Page',
      description: 'Conversion-focused page with hero, features, and CTA',
      thumbnail: '/placeholder.svg',
      blocks: [],
    },
    {
      id: '3',
      name: 'Product Page',
      description: 'Page template for showcasing products',
      thumbnail: '/placeholder.svg',
      blocks: [],
    }
  ]);
  
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templates[0]?.id || '');
  
  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];
  
  const [sectionTypes] = useState([
    { id: 'text', name: 'Text Block', icon: <Type size={16} /> },
    { id: 'image', name: 'Image Block', icon: <Image size={16} /> },
    { id: 'columns', name: 'Columns Layout', icon: <Columns size={16} /> },
    { id: 'list', name: 'List Block', icon: <ListOrdered size={16} /> },
    { id: 'table', name: 'Table Block', icon: <TableIcon size={16} /> },
    { id: 'accordion', name: 'Accordion Block', icon: <ChevronDown size={16} /> },
    { id: 'card', name: 'Card Block', icon: <Layout size={16} /> },
    { id: 'product', name: 'Product Block', icon: <LayoutGrid size={16} /> },
    { id: 'video', name: 'Video Block', icon: <Video size={16} /> },
    { id: 'html', name: 'Custom HTML', icon: <FileCode size={16} /> },
  ]);
  
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const toggleSectionExpand = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(sectionId => sectionId !== id) : [...prev, id]
    );
  };
  
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    
    const template = templates.find(t => t.id === selectedTemplateId);
    if (!template) return;
    
    const newBlocks = [...template.blocks];
    const [removed] = newBlocks.splice(sourceIndex, 1);
    newBlocks.splice(destinationIndex, 0, removed);
    
    const updatedTemplates = templates.map(t => 
      t.id === selectedTemplateId ? { ...t, blocks: newBlocks } : t
    );
    
    setTemplates(updatedTemplates);
    toast.success('Section order updated');
  };
  
  const handleAddSection = (type: string) => {
    const template = templates.find(t => t.id === selectedTemplateId);
    if (!template) return;
    
    const newSection: SectionBlock = {
      id: Date.now().toString(),
      name: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Section`,
      type: type as any,
      content: getDefaultContentForType(type as any),
      settings: {
        backgroundColor: '#ffffff',
        padding: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        fullWidth: false,
      },
    };
    
    const updatedTemplates = templates.map(t => 
      t.id === selectedTemplateId 
        ? { ...t, blocks: [...t.blocks, newSection] } 
        : t
    );
    
    setTemplates(updatedTemplates);
    setEditingSectionId(newSection.id);
    setExpandedSections(prev => [...prev, newSection.id]);
    toast.success(`Added new ${type} section`);
  };
  
  const handleDeleteSection = (id: string) => {
    const template = templates.find(t => t.id === selectedTemplateId);
    if (!template) return;
    
    const updatedBlocks = template.blocks.filter(block => block.id !== id);
    
    const updatedTemplates = templates.map(t => 
      t.id === selectedTemplateId ? { ...t, blocks: updatedBlocks } : t
    );
    
    setTemplates(updatedTemplates);
    setEditingSectionId(null);
    setExpandedSections(prev => prev.filter(sectionId => sectionId !== id));
    toast.success('Section deleted');
  };
  
  const handleUpdateSection = (id: string, field: string, value: any) => {
    const template = templates.find(t => t.id === selectedTemplateId);
    if (!template) return;
    
    const updatedBlocks = template.blocks.map(block => {
      if (block.id === id) {
        if (field.includes('.')) {
          const [section, property] = field.split('.');
          return {
            ...block,
            [section]: {
              ...block[section as keyof typeof block] as any,
              [property]: value
            }
          };
        } else {
          return { ...block, [field]: value };
        }
      }
      return block;
    });
    
    const updatedTemplates = templates.map(t => 
      t.id === selectedTemplateId ? { ...t, blocks: updatedBlocks } : t
    );
    
    setTemplates(updatedTemplates);
  };
  
  const handleAddTemplate = () => {
    const newTemplate: Template = {
      id: Date.now().toString(),
      name: 'New Template',
      description: 'Template description',
      thumbnail: '/placeholder.svg',
      blocks: [],
    };
    
    setTemplates([...templates, newTemplate]);
    setSelectedTemplateId(newTemplate.id);
    toast.success('New template created');
  };
  
  const handleDeleteTemplate = (id: string) => {
    if (templates.length <= 1) {
      toast.error('Cannot delete the only template');
      return;
    }
    
    const updatedTemplates = templates.filter(t => t.id !== id);
    setTemplates(updatedTemplates);
    
    if (selectedTemplateId === id) {
      setSelectedTemplateId(updatedTemplates[0].id);
    }
    
    toast.success('Template deleted');
  };
  
  const handleUpdateTemplate = (field: string, value: any) => {
    const updatedTemplates = templates.map(t => 
      t.id === selectedTemplateId ? { ...t, [field]: value } : t
    );
    
    setTemplates(updatedTemplates);
  };
  
  const getDefaultContentForType = (type: SectionBlock['type']) => {
    switch (type) {
      case 'text':
        return {
          title: 'Section Title',
          text: '<p>Enter your content here...</p>',
        };
      case 'image':
        return {
          image: '/placeholder.svg',
          caption: 'Image caption',
          alignment: 'center',
        };
      case 'columns':
        return {
          columns: [
            { title: 'Column 1', content: '<p>Column 1 content</p>' },
            { title: 'Column 2', content: '<p>Column 2 content</p>' },
          ],
          columnCount: 2,
        };
      case 'list':
        return {
          title: 'List Title',
          items: ['Item 1', 'Item 2', 'Item 3'],
          listType: 'bullet',
        };
      case 'table':
        return {
          headers: ['Header 1', 'Header 2', 'Header 3'],
          rows: [
            ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
            ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
          ],
        };
      case 'accordion':
        return {
          items: [
            { title: 'Accordion Item 1', content: 'Content for accordion item 1' },
            { title: 'Accordion Item 2', content: 'Content for accordion item 2' },
          ],
          defaultOpen: false,
        };
      case 'card':
        return {
          title: 'Card Title',
          content: 'Card content goes here',
          image: '/placeholder.svg',
          buttonText: 'Learn More',
          buttonLink: '#',
        };
      case 'product':
        return {
          title: 'Product Title',
          description: 'Product description',
          price: '$99.99',
          image: '/placeholder.svg',
          buttonText: 'Buy Now',
        };
      case 'video':
        return {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Video caption',
          autoplay: false,
        };
      case 'html':
        return {
          code: '<div>Custom HTML here</div>',
        };
      default:
        return {};
    }
  };
  
  const renderSectionEditor = (section: SectionBlock) => {
    switch (section.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`section-${section.id}-title`}>Title</Label>
              <Input
                id={`section-${section.id}-title`}
                value={section.content.title}
                onChange={(e) => handleUpdateSection(section.id, 'content.title', e.target.value)}
                placeholder="Enter section title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`section-${section.id}-text`}>Content</Label>
              <Textarea
                id={`section-${section.id}-text`}
                value={section.content.text}
                onChange={(e) => handleUpdateSection(section.id, 'content.text', e.target.value)}
                placeholder="Enter section content"
                rows={5}
              />
              <p className="text-xs text-gray-500">HTML markup supported</p>
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`section-${section.id}-image`}>Image URL</Label>
              <Input
                id={`section-${section.id}-image`}
                value={section.content.image}
                onChange={(e) => handleUpdateSection(section.id, 'content.image', e.target.value)}
                placeholder="Enter image URL"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`section-${section.id}-caption`}>Caption</Label>
              <Input
                id={`section-${section.id}-caption`}
                value={section.content.caption}
                onChange={(e) => handleUpdateSection(section.id, 'content.caption', e.target.value)}
                placeholder="Enter image caption"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`section-${section.id}-alignment`}>Alignment</Label>
              <Select
                value={section.content.alignment}
                onValueChange={(value) => handleUpdateSection(section.id, 'content.alignment', value)}
              >
                <SelectTrigger id={`section-${section.id}-alignment`}>
                  <SelectValue placeholder="Select alignment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 'accordion':
        return (
          <div className="space-y-4">
            {section.content.items.map((item: any, index: number) => (
              <div key={index} className="border p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Item {index + 1}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      const newItems = [...section.content.items];
                      newItems.splice(index, 1);
                      handleUpdateSection(section.id, 'content.items', newItems);
                    }}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`section-${section.id}-item-${index}-title`}>Item Title</Label>
                  <Input
                    id={`section-${section.id}-item-${index}-title`}
                    value={item.title}
                    onChange={(e) => {
                      const newItems = [...section.content.items];
                      newItems[index] = { ...newItems[index], title: e.target.value };
                      handleUpdateSection(section.id, 'content.items', newItems);
                    }}
                    placeholder="Enter item title"
                  />
                </div>
                <div className="space-y-2 mt-2">
                  <Label htmlFor={`section-${section.id}-item-${index}-content`}>Item Content</Label>
                  <Textarea
                    id={`section-${section.id}-item-${index}-content`}
                    value={item.content}
                    onChange={(e) => {
                      const newItems = [...section.content.items];
                      newItems[index] = { ...newItems[index], content: e.target.value };
                      handleUpdateSection(section.id, 'content.items', newItems);
                    }}
                    placeholder="Enter item content"
                    rows={3}
                  />
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                const newItems = [...section.content.items, { title: 'New Item', content: 'Content for new item' }];
                handleUpdateSection(section.id, 'content.items', newItems);
              }}
            >
              Add Accordion Item
            </Button>
            <div className="flex items-center space-x-2 mt-4">
              <Switch
                checked={section.content.defaultOpen}
                onCheckedChange={(checked) => handleUpdateSection(section.id, 'content.defaultOpen', checked)}
                id={`section-${section.id}-defaultOpen`}
              />
              <Label htmlFor={`section-${section.id}-defaultOpen`}>Default Open</Label>
            </div>
          </div>
        );
      // Implement editors for other section types as needed
      default:
        return (
          <div className="p-4 bg-gray-100 rounded-md">
            <p>Editor for {section.type} blocks coming soon</p>
          </div>
        );
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Page Template Builder</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleAddTemplate} className="gap-2">
            <PlusCircle size={16} />
            <span>New Template</span>
          </Button>
          <Button>Save Changes</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Templates</CardTitle>
              <CardDescription>Select a template to edit</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div>
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 border-b last:border-b-0 ${
                      selectedTemplateId === template.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedTemplateId(template.id)}
                  >
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-gray-500">{template.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTemplate(template.id);
                      }}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Available Sections</CardTitle>
              <CardDescription>Drag and drop sections to your template</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {sectionTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant="outline"
                    className="h-auto flex-col py-3 justify-start items-center text-center"
                    onClick={() => handleAddSection(type.id)}
                  >
                    <div className="mb-2">{type.icon}</div>
                    <span className="text-xs">{type.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-12 md:col-span-9">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Template: {selectedTemplate?.name}</CardTitle>
                  <CardDescription>{selectedTemplate?.description}</CardDescription>
                </div>
                <div>
                  <Button variant="outline" size="sm">Preview</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-name">Template Name</Label>
                    <Input
                      id="template-name"
                      value={selectedTemplate?.name}
                      onChange={(e) => handleUpdateTemplate('name', e.target.value)}
                      placeholder="Enter template name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-description">Description</Label>
                    <Input
                      id="template-description"
                      value={selectedTemplate?.description}
                      onChange={(e) => handleUpdateTemplate('description', e.target.value)}
                      placeholder="Enter template description"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template-thumbnail">Thumbnail URL</Label>
                  <Input
                    id="template-thumbnail"
                    value={selectedTemplate?.thumbnail}
                    onChange={(e) => handleUpdateTemplate('thumbnail', e.target.value)}
                    placeholder="Enter thumbnail URL"
                  />
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Template Sections</h3>
                
                {selectedTemplate && selectedTemplate.blocks.length === 0 && (
                  <div className="p-8 text-center border rounded-md bg-gray-50">
                    <p className="text-gray-500">No sections added yet. Add sections from the sidebar.</p>
                  </div>
                )}
                
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="template-sections">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4"
                      >
                        {selectedTemplate?.blocks.map((section, index) => (
                          <Draggable
                            key={section.id}
                            draggableId={section.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="border rounded-md overflow-hidden"
                              >
                                <div
                                  className="bg-gray-50 p-3 flex items-center justify-between cursor-pointer"
                                  onClick={() => toggleSectionExpand(section.id)}
                                >
                                  <div className="flex items-center">
                                    <div {...provided.dragHandleProps} className="mr-2">
                                      <GripVertical className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="mr-2">
                                      {expandedSections.includes(section.id) ? (
                                        <ChevronDown size={16} />
                                      ) : (
                                        <ChevronRight size={16} />
                                      )}
                                    </div>
                                    <span className="font-medium">{section.name}</span>
                                    <span className="ml-2 text-xs text-gray-500">({section.type})</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setEditingSectionId(section.id);
                                        if (!expandedSections.includes(section.id)) {
                                          toggleSectionExpand(section.id);
                                        }
                                      }}
                                    >
                                      <Edit size={14} />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteSection(section.id);
                                      }}
                                    >
                                      <Trash2 size={14} />
                                    </Button>
                                  </div>
                                </div>
                                
                                {expandedSections.includes(section.id) && (
                                  <div className="p-4">
                                    <Tabs defaultValue="content">
                                      <TabsList className="mb-4">
                                        <TabsTrigger value="content">Content</TabsTrigger>
                                        <TabsTrigger value="settings">Settings</TabsTrigger>
                                      </TabsList>
                                      
                                      <TabsContent value="content" className="space-y-4">
                                        <div className="space-y-2">
                                          <Label htmlFor={`section-${section.id}-name`}>Section Name</Label>
                                          <Input
                                            id={`section-${section.id}-name`}
                                            value={section.name}
                                            onChange={(e) => handleUpdateSection(section.id, 'name', e.target.value)}
                                            placeholder="Enter section name"
                                          />
                                          <p className="text-xs text-gray-500">This is for internal use only</p>
                                        </div>
                                        
                                        {renderSectionEditor(section)}
                                      </TabsContent>
                                      
                                      <TabsContent value="settings" className="space-y-4">
                                        <div className="space-y-2">
                                          <Label htmlFor={`section-${section.id}-bg`}>Background Color</Label>
                                          <div className="flex gap-2">
                                            <div
                                              className="h-9 w-9 rounded-md border"
                                              style={{ backgroundColor: section.settings.backgroundColor }}
                                            />
                                            <Input
                                              id={`section-${section.id}-bg`}
                                              value={section.settings.backgroundColor}
                                              onChange={(e) => handleUpdateSection(section.id, 'settings.backgroundColor', e.target.value)}
                                              placeholder="#ffffff"
                                            />
                                          </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-3 gap-4">
                                          <div className="space-y-2">
                                            <Label htmlFor={`section-${section.id}-padding`}>Padding</Label>
                                            <Input
                                              id={`section-${section.id}-padding`}
                                              value={section.settings.padding}
                                              onChange={(e) => handleUpdateSection(section.id, 'settings.padding', e.target.value)}
                                              placeholder="2rem"
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label htmlFor={`section-${section.id}-mt`}>Margin Top</Label>
                                            <Input
                                              id={`section-${section.id}-mt`}
                                              value={section.settings.marginTop}
                                              onChange={(e) => handleUpdateSection(section.id, 'settings.marginTop', e.target.value)}
                                              placeholder="1rem"
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label htmlFor={`section-${section.id}-mb`}>Margin Bottom</Label>
                                            <Input
                                              id={`section-${section.id}-mb`}
                                              value={section.settings.marginBottom}
                                              onChange={(e) => handleUpdateSection(section.id, 'settings.marginBottom', e.target.value)}
                                              placeholder="1rem"
                                            />
                                          </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2 mt-4">
                                          <Switch
                                            checked={section.settings.fullWidth}
                                            onCheckedChange={(checked) => handleUpdateSection(section.id, 'settings.fullWidth', checked)}
                                            id={`section-${section.id}-fullWidth`}
                                          />
                                          <Label htmlFor={`section-${section.id}-fullWidth`}>Full Width</Label>
                                        </div>
                                      </TabsContent>
                                    </Tabs>
                                  </div>
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full">Save Template</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PageTemplateBuilder;
