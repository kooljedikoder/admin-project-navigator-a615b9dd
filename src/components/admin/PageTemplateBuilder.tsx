import React, { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { v4 as uuidv4 } from 'uuid';
import { 
  PlusCircle, 
  Trash2, 
  Move, 
  Copy, 
  Save, 
  Settings, 
  Edit,
  List
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

interface FormElement {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  defaultValue?: string | number | boolean;
}

const PageTemplateBuilder: React.FC = () => {
  const [elements, setElements] = useState<FormElement[]>([
    {
      id: uuidv4(),
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name',
      required: true,
    },
    {
      id: uuidv4(),
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      id: uuidv4(),
      type: 'textarea',
      label: 'Message',
      placeholder: 'Enter your message',
      required: false,
    },
    {
      id: uuidv4(),
      type: 'select',
      label: 'How did you hear about us?',
      options: ['Google', 'Friend', 'Advertisement', 'Other'],
      required: false,
    },
    {
      id: uuidv4(),
      type: 'checkbox',
      label: 'Subscribe to newsletter',
      required: false,
    },
    {
      id: uuidv4(),
      type: 'radio',
      label: 'Choose an option',
      options: ['Option 1', 'Option 2', 'Option 3'],
      required: true,
    },
    {
      id: uuidv4(),
      type: 'slider',
      label: 'Satisfaction Level',
      required: false,
      defaultValue: 50,
    },
  ]);

  const [selectedElement, setSelectedElement] = useState<FormElement | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setElements(items);
    toast.success('Form element order updated');
  };

  const addElement = (type: string) => {
    let newElement: FormElement = { id: uuidv4(), type: type, label: 'New Field' };

    switch (type) {
      case 'text':
        newElement = { ...newElement, placeholder: 'Enter text' };
        break;
      case 'email':
        newElement = { ...newElement, placeholder: 'Enter email' };
        break;
      case 'textarea':
        newElement = { ...newElement, placeholder: 'Enter message' };
        break;
      case 'select':
        newElement = { ...newElement, options: ['Option 1', 'Option 2'] };
        break;
      case 'checkbox':
        break;
      case 'radio':
        newElement = { ...newElement, options: ['Option 1', 'Option 2'] };
        break;
      case 'slider':
        newElement = { ...newElement, defaultValue: 50 };
        break;
      default:
        break;
    }

    setElements([...elements, newElement]);
    toast.success('Form element added');
  };

  const duplicateElement = (id: string) => {
    const elementToDuplicate = elements.find(element => element.id === id);
    if (elementToDuplicate) {
      const duplicatedElement = { ...elementToDuplicate, id: uuidv4() };
      setElements([...elements, duplicatedElement]);
      toast.success('Form element duplicated');
    }
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(element => element.id !== id));
    setSelectedElement(null);
    setIsSettingsOpen(false);
    toast.success('Form element deleted');
  };

  const openSettings = (element: FormElement) => {
    setSelectedElement(element);
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setSelectedElement(null);
    setIsSettingsOpen(false);
  };

  const updateElement = (updatedElement: FormElement) => {
    setElements(elements.map(element =>
      element.id === updatedElement.id ? updatedElement : element
    ));
    setSelectedElement(updatedElement);
    toast.success('Form element updated');
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedElement) {
      updateElement({ ...selectedElement, label: e.target.value });
    }
  };

  const handlePlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedElement) {
      updateElement({ ...selectedElement, placeholder: e.target.value || undefined });
    }
  };

  const handleOptionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedElement && selectedElement.type === 'select') {
      const newOptions = e.target.value.split('\n').filter(option => option.trim() !== '');
      updateElement({ ...selectedElement, options: newOptions });
    }
    if (selectedElement && selectedElement.type === 'radio') {
      const newOptions = e.target.value.split('\n').filter(option => option.trim() !== '');
      updateElement({ ...selectedElement, options: newOptions });
    }
  };

  const handleRequiredChange = (checked: boolean) => {
    if (selectedElement) {
      updateElement({ ...selectedElement, required: checked });
    }
  };

  const handleDefaultValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedElement && selectedElement.type === 'slider') {
      updateElement({ ...selectedElement, defaultValue: parseInt(e.target.value) });
    }
  };

  const renderElement = (element: FormElement) => {
    switch (element.type) {
      case 'text':
        return <Input type="text" placeholder={element.placeholder} required={element.required} />;
      case 'email':
        return <Input type="email" placeholder={element.placeholder} required={element.required} />;
      case 'textarea':
        return <Textarea placeholder={element.placeholder} required={element.required} />;
      case 'select':
        return (
          <Select disabled={!element.options || element.options.length === 0}>
            <SelectTrigger>
              <SelectValue placeholder={element.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {element.options && element.options.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'checkbox':
        return <Checkbox id={element.id} />;
      case 'radio':
        return (
          <RadioGroup>
            {element.options && element.options.map(option => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${element.id}-${option}`} />
                <Label htmlFor={`${element.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'slider':
        return <Slider defaultValue={[Number(element.defaultValue)]} max={100} step={1} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Form Builder</CardTitle>
            <CardDescription>Drag and drop elements to build your form</CardDescription>
          </CardHeader>
          <CardContent>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="form-elements">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                    {elements.map((element, index) => (
                      <Draggable key={element.id} draggableId={element.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="border rounded-md p-4 bg-white shadow-sm"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Label htmlFor={element.id} className="font-semibold">{element.label}</Label>
                              <div className="flex items-center gap-2">
                                <div {...provided.dragHandleProps}>
                                  <Move className="h-4 w-4 text-gray-500 cursor-grab" />
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => openSettings(element)}>
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => duplicateElement(element.id)}>
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700" onClick={() => deleteElement(element.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            {renderElement(element)}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => addElement('text')}>Text</Button>
              <Button variant="outline" onClick={() => addElement('email')}>Email</Button>
              <Button variant="outline" onClick={() => addElement('textarea')}>Textarea</Button>
              <Button variant="outline" onClick={() => addElement('select')}>Select</Button>
              <Button variant="outline" onClick={() => addElement('checkbox')}>Checkbox</Button>
              <Button variant="outline" onClick={() => addElement('radio')}>Radio</Button>
              <Button variant="outline" onClick={() => addElement('slider')}>Slider</Button>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Template
            </Button>
          </CardFooter>
        </Card>
      </div>

      
      <div>
        {isSettingsOpen && selectedElement && (
          <Card>
            <CardHeader>
              <CardTitle>Element Settings</CardTitle>
              <CardDescription>Customize your form element</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="label">Label</Label>
                <Input
                  id="label"
                  value={selectedElement.label}
                  onChange={handleLabelChange}
                  placeholder="Enter label"
                />
              </div>
              {selectedElement.type !== 'checkbox' && (
                <div className="space-y-2">
                  <Label htmlFor="placeholder">Placeholder</Label>
                  <Input
                    id="placeholder"
                    value={selectedElement.placeholder || ''}
                    onChange={handlePlaceholderChange}
                    placeholder="Enter placeholder"
                  />
                </div>
              )}
              {selectedElement.type === 'select' && (
                <div className="space-y-2">
                  <Label htmlFor="options">Options (one per line)</Label>
                  <Textarea
                    id="options"
                    value={selectedElement.options ? selectedElement.options.join('\n') : ''}
                    onChange={handleOptionsChange}
                    placeholder="Enter options, one per line"
                  />
                </div>
              )}
              {selectedElement.type === 'radio' && (
                <div className="space-y-2">
                  <Label htmlFor="options">Options (one per line)</Label>
                  <Textarea
                    id="options"
                    value={selectedElement.options ? selectedElement.options.join('\n') : ''}
                    onChange={handleOptionsChange}
                    placeholder="Enter options, one per line"
                  />
                </div>
              )}
              {selectedElement.type === 'slider' && (
                <div className="space-y-2">
                  <Label htmlFor="defaultValue">Default Value</Label>
                  <Input
                    type="number"
                    id="defaultValue"
                    value={String(selectedElement.defaultValue)}
                    onChange={handleDefaultValueChange}
                    placeholder="Enter default value"
                  />
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="required"
                  checked={selectedElement.required || false}
                  onCheckedChange={handleRequiredChange}
                />
                <Label htmlFor="required">Required</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" onClick={closeSettings}>Close</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PageTemplateBuilder;
