import React, { useState, useEffect, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { PlusCircle, Trash2, GripVertical, Edit, Copy, Upload, Star } from 'lucide-react';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import { cn } from '@/lib/utils';

interface FeedbackField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'radio' | 'select' | 'switch';
  options?: string[];
  required: boolean;
  placeholder?: string;
}

interface FeedbackForm {
  id: string;
  title: string;
  description: string;
  fields: FeedbackField[];
  active: boolean;
}

const FeedbackFormAdmin: React.FC = () => {
  const [forms, setForms] = useState<FeedbackForm[]>([
    {
      id: '1',
      title: 'General Feedback Form',
      description: 'A form for collecting general feedback from users.',
      fields: [
        {
          id: '101',
          label: 'Your Name',
          type: 'text',
          required: true,
          placeholder: 'Enter your name'
        },
        {
          id: '102',
          label: 'Your Email',
          type: 'text',
          required: true,
          placeholder: 'Enter your email'
        },
        {
          id: '103',
          label: 'Feedback Type',
          type: 'select',
          required: true,
          options: ['Suggestion', 'Bug Report', 'Question', 'Other']
        },
        {
          id: '104',
          label: 'Your Feedback',
          type: 'textarea',
          required: true,
          placeholder: 'Enter your feedback'
        },
        {
          id: '105',
          label: 'Subscribe to Newsletter',
          type: 'switch',
          required: false
        }
      ],
      active: true
    },
    {
      id: '2',
      title: 'Product Feedback Form',
      description: 'A form for collecting feedback on a specific product.',
      fields: [
        {
          id: '201',
          label: 'Your Name',
          type: 'text',
          required: true,
          placeholder: 'Enter your name'
        },
        {
          id: '202',
          label: 'Product Rating',
          type: 'radio',
          required: true,
          options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']
        },
        {
          id: '203',
          label: 'Your Feedback',
          type: 'textarea',
          required: true,
          placeholder: 'Enter your feedback'
        }
      ],
      active: false
    }
  ]);

  const [isAddingForm, setIsAddingForm] = useState(false);
  const [isEditingForm, setIsEditingForm] = useState(false);
  const [editingForm, setEditingForm] = useState<FeedbackForm | null>(null);
  const [newForm, setNewForm] = useState<Omit<FeedbackForm, 'id'>>({
    title: '',
    description: '',
    fields: [],
    active: true
  });

  const [isAddingField, setIsAddingField] = useState(false);
  const [isEditingField, setIsEditingField] = useState(false);
  const [editingField, setEditingField] = useState<FeedbackField | null>(null);
  const [newField, setNewField] = useState<Omit<FeedbackField, 'id'>>({
    label: '',
    type: 'text',
    required: false,
    options: [],
    placeholder: ''
  });

  const { mediaItems } = useMediaLibrary();

  const handleDragEnd = (result: any, formId: string) => {
    if (!result.destination) return;

    const form = forms.find(f => f.id === formId);
    if (!form) return;

    const items = Array.from(form.fields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedForms = forms.map(f =>
      f.id === formId ? { ...f, fields: items } : f
    );

    setForms(updatedForms);
    toast.success('Field order updated');
  };

  const handleAddForm = () => {
    if (!newForm.title) {
      toast.error('Form title is required');
      return;
    }

    const formWithId = {
      ...newForm,
      id: Date.now().toString(),
    };

    setForms([...forms, formWithId]);
    setIsAddingForm(false);
    setNewForm({
      title: '',
      description: '',
      fields: [],
      active: true
    });

    toast.success('Form added successfully');
  };

  const handleEditForm = () => {
    if (!editingForm) return;

    const updatedForms = forms.map(f =>
      f.id === editingForm.id ? editingForm : f
    );

    setForms(updatedForms);
    setIsEditingForm(false);
    setEditingForm(null);

    toast.success('Form updated successfully');
  };

  const handleDeleteForm = (id: string) => {
    setForms(forms.filter(f => f.id !== id));
    toast.success('Form deleted');
  };

  const handleToggleActive = (id: string) => {
    setForms(
      forms.map(f =>
        f.id === id ? { ...f, active: !f.active } : f
      )
    );
  };

  const handleAddField = (formId: string) => {
    if (!newField.label || !newField.type) {
      toast.error('Field label and type are required');
      return;
    }

    const fieldWithId = {
      ...newField,
      id: Date.now().toString(),
    };

    const updatedForms = forms.map(f =>
      f.id === formId ? { ...f, fields: [...f.fields, fieldWithId] } : f
    );

    setForms(updatedForms);
    setIsAddingField(false);
    setNewField({
      label: '',
      type: 'text',
      required: false,
      options: [],
      placeholder: ''
    });

    toast.success('Field added successfully');
  };

  const handleEditField = (formId: string) => {
    if (!editingField) return;

    const updatedForms = forms.map(f => {
      if (f.id === formId) {
        const updatedFields = f.fields.map(field =>
          field.id === editingField.id ? editingField : field
        );
        return { ...f, fields: updatedFields };
      }
      return f;
    });

    setForms(updatedForms);
    setIsEditingField(false);
    setEditingField(null);

    toast.success('Field updated successfully');
  };

  const handleDeleteField = (formId: string, fieldId: string) => {
    const updatedForms = forms.map(f =>
      f.id === formId ? { ...f, fields: f.fields.filter(field => field.id !== fieldId) } : f
    );

    setForms(updatedForms);
    toast.success('Field deleted');
  };

  const handleSaveChanges = () => {
    toast.success('Changes saved successfully');
  };

  const getFieldComponent = (field: FeedbackField, formId: string) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            id={field.id}
            placeholder={field.placeholder || field.label}
            required={field.required}
          />
        );
      case 'textarea':
        return (
          <Textarea
            id={field.id}
            placeholder={field.placeholder || field.label}
            required={field.required}
            rows={4}
          />
        );
      case 'radio':
        return (
          <RadioGroup className="flex flex-col gap-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.id}-${index}`} />
                <Label htmlFor={`${field.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'select':
        return (
          <Select>
            <SelectTrigger id={field.id}>
              <SelectValue placeholder={field.placeholder || field.label} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'switch':
        return (
          <Switch id={field.id} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Feedback Forms</h2>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Manage Forms</h3>
        <Dialog open={isAddingForm} onOpenChange={setIsAddingForm}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <PlusCircle size={16} />
              Add Form
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Form</DialogTitle>
              <DialogDescription>Create a new feedback form</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Form Title</Label>
                <Input
                  id="title"
                  value={newForm.title}
                  onChange={(e) => setNewForm({ ...newForm, title: e.target.value })}
                  placeholder="Enter form title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Form Description</Label>
                <Textarea
                  id="description"
                  value={newForm.description}
                  onChange={(e) => setNewForm({ ...newForm, description: e.target.value })}
                  placeholder="Enter form description"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={newForm.active}
                  onCheckedChange={(checked) => setNewForm({ ...newForm, active: checked })}
                  id="active"
                />
                <Label htmlFor="active">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingForm(false)}>Cancel</Button>
              <Button onClick={handleAddForm}>Add Form</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {forms.map((form) => (
          <Card key={form.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{form.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={form.active}
                    onCheckedChange={() => handleToggleActive(form.id)}
                    className="data-[state=checked]:bg-green-500"
                  />
                  <Dialog
                    open={isEditingForm && editingForm?.id === form.id}
                    onOpenChange={(open) => {
                      if (open) {
                        setEditingForm(form);
                      }
                      setIsEditingForm(open);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit size={14} />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Form</DialogTitle>
                        <DialogDescription>Update this feedback form</DialogDescription>
                      </DialogHeader>
                      {editingForm && (
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-title">Form Title</Label>
                            <Input
                              id="edit-title"
                              value={editingForm.title}
                              onChange={(e) => setEditingForm({
                                ...editingForm,
                                title: e.target.value
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="edit-description">Form Description</Label>
                            <Textarea
                              id="edit-description"
                              value={editingForm.description}
                              onChange={(e) => setEditingForm({
                                ...editingForm,
                                description: e.target.value
                              })}
                              rows={3}
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={editingForm.active}
                              onCheckedChange={(checked) => setEditingForm({
                                ...editingForm,
                                active: checked
                              })}
                              id="edit-active"
                            />
                            <Label htmlFor="edit-active">Active</Label>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => {
                          setIsEditingForm(false);
                          setEditingForm(null);
                        }}>
                          Cancel
                        </Button>
                        <Button onClick={handleEditForm}>Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDeleteForm(form.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">Form Fields</h4>
                <Dialog open={isAddingField} onOpenChange={setIsAddingField}>
                  <DialogTrigger asChild>
                    <Button className="gap-2" size="sm">
                      <PlusCircle size={16} />
                      Add Field
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New Field</DialogTitle>
                      <DialogDescription>Add a new field to the form</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="label">Field Label</Label>
                        <Input
                          id="label"
                          value={newField.label}
                          onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                          placeholder="Enter field label"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="type">Field Type</Label>
                        <Select
                          value={newField.type}
                          onValueChange={(value) => setNewField({ ...newField, type: value as any })}
                        >
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Select field type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="textarea">Textarea</SelectItem>
                            <SelectItem value="radio">Radio</SelectItem>
                            <SelectItem value="select">Select</SelectItem>
                            <SelectItem value="switch">Switch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {newField.type === 'radio' || newField.type === 'select' ? (
                        <div className="space-y-2">
                          <Label htmlFor="options">Options (comma-separated)</Label>
                          <Input
                            id="options"
                            placeholder="Enter options"
                            onChange={(e) => setNewField({
                              ...newField,
                              options: e.target.value.split(',').map(s => s.trim())
                            })}
                          />
                        </div>
                      ) : null}

                      {newField.type === 'text' || newField.type === 'textarea' ? (
                        <div className="space-y-2">
                          <Label htmlFor="placeholder">Placeholder</Label>
                          <Input
                            id="placeholder"
                            placeholder="Enter placeholder"
                            onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
                          />
                        </div>
                      ) : null}

                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={newField.required}
                          onCheckedChange={(checked) => setNewField({ ...newField, required: checked })}
                          id="required"
                        />
                        <Label htmlFor="required">Required</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddingField(false)}>Cancel</Button>
                      <Button onClick={() => handleAddField(form.id)}>Add Field</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <DragDropContext onDragEnd={(result) => handleDragEnd(result, form.id)}>
                <Droppable droppableId={`form-${form.id}`}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-4"
                    >
                      {form.fields.map((field, index) => (
                        <Draggable key={field.id} draggableId={field.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="border rounded-lg p-4 bg-white"
                            >
                              <div className="flex items-start gap-4">
                                <div {...provided.dragHandleProps} className="mt-2">
                                  <GripVertical className="h-5 w-5 text-gray-400 cursor-grab" />
                                </div>
                                <div className="flex-grow">
                                  <div className="flex items-center justify-between mb-2">
                                    <Label htmlFor={field.id}>{field.label}</Label>
                                    <div className="flex items-center gap-2">
                                      <Dialog
                                        open={isEditingField && editingField?.id === field.id}
                                        onOpenChange={(open) => {
                                          if (open) {
                                            setEditingField(field);
                                          }
                                          setIsEditingField(open);
                                        }}
                                      >
                                        <DialogTrigger asChild>
                                          <Button variant="outline" size="sm" className="gap-1">
                                            <Edit size={14} />
                                            Edit
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-md">
                                          <DialogHeader>
                                            <DialogTitle>Edit Field</DialogTitle>
                                            <DialogDescription>Update this form field</DialogDescription>
                                          </DialogHeader>
                                          {editingField && (
                                            <div className="space-y-4 py-4">
                                              <div className="space-y-2">
                                                <Label htmlFor="edit-label">Field Label</Label>
                                                <Input
                                                  id="edit-label"
                                                  value={editingField.label}
                                                  onChange={(e) => setEditingField({
                                                    ...editingField,
                                                    label: e.target.value
                                                  })}
                                                  placeholder="Enter field label"
                                                />
                                              </div>

                                              <div className="space-y-2">
                                                <Label htmlFor="edit-type">Field Type</Label>
                                                <Select
                                                  value={editingField.type}
                                                  onValueChange={(value) => setEditingField({
                                                    ...editingField,
                                                    type: value as any
                                                  })}
                                                >
                                                  <SelectTrigger id="edit-type">
                                                    <SelectValue placeholder="Select field type" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                    <SelectItem value="text">Text</SelectItem>
                                                    <SelectItem value="textarea">Textarea</SelectItem>
                                                    <SelectItem value="radio">Radio</SelectItem>
                                                    <SelectItem value="select">Select</SelectItem>
                                                    <SelectItem value="switch">Switch</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                              </div>

                                              {editingField.type === 'radio' || editingField.type === 'select' ? (
                                                <div className="space-y-2">
                                                  <Label htmlFor="edit-options">Options (comma-separated)</Label>
                                                  <Input
                                                    id="edit-options"
                                                    placeholder="Enter options"
                                                    onChange={(e) => setEditingField({
                                                      ...editingField,
                                                      options: e.target.value.split(',').map(s => s.trim())
                                                    })}
                                                  />
                                                </div>
                                              ) : null}

                                              {editingField.type === 'text' || editingField.type === 'textarea' ? (
                                                <div className="space-y-2">
                                                  <Label htmlFor="edit-placeholder">Placeholder</Label>
                                                  <Input
                                                    id="edit-placeholder"
                                                    placeholder="Enter placeholder"
                                                    onChange={(e) => setEditingField({ ...editingField, placeholder: e.target.value })}
                                                  />
                                                </div>
                                              ) : null}

                                              <div className="flex items-center space-x-2">
                                                <Switch
                                                  checked={editingField.required}
                                                  onCheckedChange={(checked) => setEditingField({
                                                    ...editingField,
                                                    required: checked
                                                  })}
                                                  id="edit-required"
                                                />
                                                <Label htmlFor="edit-required">Required</Label>
                                              </div>
                                            </div>
                                          )}
                                          <DialogFooter>
                                            <Button variant="outline" onClick={() => {
                                              setIsEditingField(false);
                                              setEditingField(null);
                                            }}>
                                              Cancel
                                            </Button>
                                            <Button onClick={() => handleEditField(form.id)}>Save Changes</Button>
                                          </DialogFooter>
                                        </DialogContent>
                                      </Dialog>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                        onClick={() => handleDeleteField(form.id, field.id)}
                                      >
                                        <Trash2 size={14} />
                                      </Button>
                                    </div>
                                  </div>
                                  {getFieldComponent(field, form.id)}
                                </div>
                              </div>
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
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Preview</h3>
        <div className="space-y-4">
          {forms.filter(form => form.active).map(form => (
            <Card key={form.id}>
              <CardHeader>
                <CardTitle>{form.title}</CardTitle>
                <CardDescription>{form.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {form.fields.map(field => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={`preview-${field.id}`}>{field.label}</Label>
                    {(() => {
                      switch (field.type) {
                        case 'text':
                          return <Input id={`preview-${field.id}`} placeholder={field.placeholder || field.label} required={field.required} />;
                        case 'textarea':
                          return <Textarea id={`preview-${field.id}`} placeholder={field.placeholder || field.label} required={field.required} rows={4} />;
                        case 'radio':
                          return (
                            <RadioGroup className="flex flex-col gap-2">
                              {field.options?.map((option, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <RadioGroupItem value={option} id={`preview-${field.id}-${index}`} />
                                  <Label htmlFor={`preview-${field.id}-${index}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          );
                        case 'select':
                          return (
                            <Select>
                              <SelectTrigger id={`preview-${field.id}`}>
                                <SelectValue placeholder={field.placeholder || field.label} />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options?.map((option, index) => (
                                  <SelectItem key={index} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          );
                        case 'switch':
                          return <div className="flex items-center space-x-2"><Switch id={`preview-${field.id}`} /><Label htmlFor={`preview-${field.id}`}>Yes</Label></div>;
                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackFormAdmin;
