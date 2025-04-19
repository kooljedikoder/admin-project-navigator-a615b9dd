import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { PlusCircle, Trash2, Star, Edit, Image, GripVertical, Upload } from 'lucide-react';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  featured: boolean;
  source: 'website' | 'google' | 'facebook' | 'trustpilot' | 'other';
  active: boolean;
}

const TestimonialsAdmin: React.FC = () => {
  const [sectionTitle, setSectionTitle] = useState('What Our Clients Say');
  const [sectionSubtitle, setSectionSubtitle] = useState('Hear from our satisfied customers');
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'John Smith',
      title: 'CEO',
      company: 'Tech Solutions Inc.',
      content: 'We\'ve been working with this company for over two years now, and they have consistently delivered exceptional results. Their team is responsive, professional, and truly understands our business needs.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      featured: true,
      source: 'website',
      active: true,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      company: 'Global Brands',
      content: 'The team exceeded our expectations. Their attention to detail and strategic approach helped us achieve our marketing goals ahead of schedule.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      featured: false,
      source: 'google',
      active: true,
    },
    {
      id: '3',
      name: 'Michael Chen',
      title: 'CTO',
      company: 'Innovate Labs',
      content: 'Their technical expertise is impressive. They provided innovative solutions to complex problems and were always available when we needed support.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      featured: false,
      source: 'trustpilot',
      active: true,
    }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  
  const [newTestimonial, setNewTestimonial] = useState<Omit<Testimonial, 'id'>>({
    name: '',
    title: '',
    company: '',
    content: '',
    rating: 5,
    image: '',
    featured: false,
    source: 'website',
    active: true,
  });
  
  const { mediaItems } = useMediaLibrary();
  
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(testimonials);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setTestimonials(items);
    toast.success('Testimonial order updated');
  };
  
  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.content) {
      toast.error('Name and testimonial content are required');
      return;
    }
    
    const testimonialWithId = {
      ...newTestimonial,
      id: Date.now().toString(),
    };
    
    setTestimonials([...testimonials, testimonialWithId]);
    setIsAdding(false);
    setNewTestimonial({
      name: '',
      title: '',
      company: '',
      content: '',
      rating: 5,
      image: '',
      featured: false,
      source: 'website',
      active: true,
    });
    
    toast.success('Testimonial added successfully');
  };
  
  const handleEditTestimonial = () => {
    if (!editingTestimonial) return;
    
    const updatedTestimonials = testimonials.map(t => 
      t.id === editingTestimonial.id ? editingTestimonial : t
    );
    
    setTestimonials(updatedTestimonials);
    setIsEditing(false);
    setEditingTestimonial(null);
    
    toast.success('Testimonial updated successfully');
  };
  
  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast.success('Testimonial deleted');
  };
  
  const handleToggleFeatured = (id: string) => {
    setTestimonials(
      testimonials.map(t => 
        t.id === id ? { ...t, featured: !t.featured } : t
      )
    );
  };
  
  const handleToggleActive = (id: string) => {
    setTestimonials(
      testimonials.map(t => 
        t.id === id ? { ...t, active: !t.active } : t
      )
    );
  };
  
  const handleSelectImage = (url: string) => {
    if (isEditing && editingTestimonial) {
      setEditingTestimonial({ ...editingTestimonial, image: url });
    } else {
      setNewTestimonial({ ...newTestimonial, image: url });
    }
  };
  
  const handleSaveChanges = () => {
    toast.success('Changes saved successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Section Settings</CardTitle>
          <CardDescription>Customize the testimonials section appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sectionTitle">Section Title</Label>
            <Input
              id="sectionTitle"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="Enter section title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sectionSubtitle">Section Subtitle</Label>
            <Input
              id="sectionSubtitle"
              value={sectionSubtitle}
              onChange={(e) => setSectionSubtitle(e.target.value)}
              placeholder="Enter section subtitle"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Manage Testimonials</h3>
        <Dialog open={isAdding} onOpenChange={setIsAdding}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <PlusCircle size={16} />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Testimonial</DialogTitle>
              <DialogDescription>Add a client testimonial to your website</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Client Name</Label>
                <Input
                  id="name"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  placeholder="Enter client name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={newTestimonial.title}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, title: e.target.value })}
                    placeholder="Enter job title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={newTestimonial.company}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                    placeholder="Enter company name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Testimonial</Label>
                <Textarea
                  id="content"
                  value={newTestimonial.content}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                  placeholder="Enter testimonial content"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Rating</Label>
                <RadioGroup
                  value={newTestimonial.rating.toString()}
                  onValueChange={(value) => setNewTestimonial({ ...newTestimonial, rating: parseInt(value) })}
                  className="flex"
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div key={rating} className="flex items-center space-x-1">
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="flex">
                        <Star className={`h-5 w-5 ${rating <= newTestimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="source">Source</Label>
                <Select
                  value={newTestimonial.source}
                  onValueChange={(value) => setNewTestimonial({ ...newTestimonial, source: value as any })}
                >
                  <SelectTrigger id="source">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="google">Google Reviews</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="trustpilot">Trustpilot</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Client Image</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-full h-20 w-20 overflow-hidden flex items-center justify-center bg-gray-100">
                    {newTestimonial.image ? (
                      <img 
                        src={newTestimonial.image} 
                        alt="Client" 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="h-20 flex flex-col gap-1">
                        <Upload size={16} />
                        <span>Select Image</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>Media Library</DialogTitle>
                        <DialogDescription>Select a client image</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
                        {mediaItems.map((item) => (
                          <div 
                            key={item.id}
                            className="border rounded-md overflow-hidden cursor-pointer hover:border-primary transition-colors"
                            onClick={() => {
                              handleSelectImage(item.url);
                            }}
                          >
                            {item.thumbnailUrl ? (
                              <img 
                                src={item.thumbnailUrl} 
                                alt={item.name}
                                className="w-full h-24 object-cover"
                              />
                            ) : (
                              <div className="w-full h-24 bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400">No preview</span>
                              </div>
                            )}
                            <div className="p-2 text-sm truncate">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newTestimonial.featured}
                  onCheckedChange={(checked) => setNewTestimonial({ ...newTestimonial, featured: checked })}
                  id="featured"
                />
                <Label htmlFor="featured">Featured Testimonial</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newTestimonial.active}
                  onCheckedChange={(checked) => setNewTestimonial({ ...newTestimonial, active: checked })}
                  id="active"
                />
                <Label htmlFor="active">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="testimonials">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-4"
                >
                  {testimonials.map((testimonial, index) => (
                    <Draggable key={testimonial.id} draggableId={testimonial.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`border rounded-lg p-4 ${
                            !testimonial.active ? 'bg-gray-50 opacity-70' : 'bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div {...provided.dragHandleProps} className="mt-2">
                              <GripVertical className="h-5 w-5 text-gray-400 cursor-grab" />
                            </div>
                            
                            <div className="flex-shrink-0">
                              <div className="h-16 w-16 rounded-full overflow-hidden">
                                {testimonial.image ? (
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400">No image</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-1">
                                <div>
                                  <h4 className="font-semibold">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-600">
                                    {testimonial.title}{testimonial.title && testimonial.company ? ', ' : ''}{testimonial.company}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Switch
                                    checked={testimonial.active}
                                    onCheckedChange={() => handleToggleActive(testimonial.id)}
                                    className="data-[state=checked]:bg-green-500"
                                  />
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= testimonial.rating
                                          ? "text-yellow-500 fill-yellow-500"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <Badge
                                  variant="outline"
                                  className={`${testimonial.featured ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-gray-100'}`}
                                >
                                  {testimonial.featured ? 'Featured' : 'Regular'}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="bg-gray-100"
                                >
                                  {testimonial.source}
                                </Badge>
                              </div>
                              
                              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                                "{testimonial.content}"
                              </p>
                              
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className={`${
                                    testimonial.featured
                                      ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                      : ''
                                  }`}
                                  onClick={() => handleToggleFeatured(testimonial.id)}
                                >
                                  {testimonial.featured ? 'Remove Featured' : 'Make Featured'}
                                </Button>
                                
                                <Dialog
                                  open={isEditing && editingTestimonial?.id === testimonial.id}
                                  onOpenChange={(open) => {
                                    if (open) {
                                      setEditingTestimonial(testimonial);
                                    }
                                    setIsEditing(open);
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
                                      <DialogTitle>Edit Testimonial</DialogTitle>
                                      <DialogDescription>
                                        Update this client testimonial
                                      </DialogDescription>
                                    </DialogHeader>
                                    {editingTestimonial && (
                                      <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="edit-name">Client Name</Label>
                                          <Input
                                            id="edit-name"
                                            value={editingTestimonial.name}
                                            onChange={(e) => setEditingTestimonial({
                                              ...editingTestimonial,
                                              name: e.target.value
                                            })}
                                          />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                            <Label htmlFor="edit-title">Job Title</Label>
                                            <Input
                                              id="edit-title"
                                              value={editingTestimonial.title}
                                              onChange={(e) => setEditingTestimonial({
                                                ...editingTestimonial,
                                                title: e.target.value
                                              })}
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label htmlFor="edit-company">Company</Label>
                                            <Input
                                              id="edit-company"
                                              value={editingTestimonial.company}
                                              onChange={(e) => setEditingTestimonial({
                                                ...editingTestimonial,
                                                company: e.target.value
                                              })}
                                            />
                                          </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                          <Label htmlFor="edit-content">Testimonial</Label>
                                          <Textarea
                                            id="edit-content"
                                            value={editingTestimonial.content}
                                            onChange={(e) => setEditingTestimonial({
                                              ...editingTestimonial,
                                              content: e.target.value
                                            })}
                                            rows={4}
                                          />
                                        </div>
                                        
                                        <div className="space-y-2">
                                          <Label>Rating</Label>
                                          <RadioGroup
                                            value={editingTestimonial.rating.toString()}
                                            onValueChange={(value) => setEditingTestimonial({
                                              ...editingTestimonial,
                                              rating: parseInt(value)
                                            })}
                                            className="flex"
                                          >
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                              <div key={rating} className="flex items-center space-x-1">
                                                <RadioGroupItem value={rating.toString()} id={`edit-rating-${rating}`} />
                                                <Label htmlFor={`edit-rating-${rating}`} className="flex">
                                                  <Star className={`h-5 w-5 ${
                                                    rating <= editingTestimonial.rating 
                                                      ? "text-yellow-500 fill-yellow-500" 
                                                      : "text-gray-300"
                                                  }`} />
                                                </Label>
                                              </div>
                                            ))}
                                          </RadioGroup>
                                        </div>
                                        
                                        <div className="space-y-2">
                                          <Label htmlFor="edit-source">Source</Label>
                                          <Select
                                            value={editingTestimonial.source}
                                            onValueChange={(value) => setEditingTestimonial({
                                              ...editingTestimonial,
                                              source: value as any
                                            })}
                                          >
                                            <SelectTrigger id="edit-source">
                                              <SelectValue placeholder="Select source" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="website">Website</SelectItem>
                                              <SelectItem value="google">Google Reviews</SelectItem>
                                              <SelectItem value="facebook">Facebook</SelectItem>
                                              <SelectItem value="trustpilot">Trustpilot</SelectItem>
                                              <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        
                                        <div className="space-y-2">
                                          <Label>Client Image</Label>
                                          <div className="grid grid-cols-2 gap-4">
                                            <div className="border rounded-full h-20 w-20 overflow-hidden flex items-center justify-center bg-gray-100">
                                              {editingTestimonial.image ? (
                                                <img
                                                  src={editingTestimonial.image}
                                                  alt="Client"
                                                  className="h-full w-full object-cover"
                                                />
                                              ) : (
                                                <Image className="h-8 w-8 text-gray-400" />
                                              )}
                                            </div>
                                            <Dialog>
                                              <DialogTrigger asChild>
                                                <Button variant="outline" className="h-20 flex flex-col gap-1">
                                                  <Upload size={16} />
                                                  <span>Change Image</span>
                                                </Button>
                                              </DialogTrigger>
                                              <DialogContent className="max-w-4xl">
                                                <DialogHeader>
                                                  <DialogTitle>Media Library</DialogTitle>
                                                </DialogHeader>
                                                <div className="grid grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
                                                  {mediaItems.map((item) => (
                                                    <div
                                                      key={item.id}
                                                      className="border rounded-md overflow-hidden cursor-pointer hover:border-primary transition-colors"
                                                      onClick={() => {
                                                        handleSelectImage(item.url);
                                                      }}
                                                    >
                                                      {item.thumbnailUrl ? (
                                                        <img
                                                          src={item.thumbnailUrl}
                                                          alt={item.name}
                                                          className="w-full h-24 object-cover"
                                                        />
                                                      ) : (
                                                        <div className="w-full h-24 bg-gray-100 flex items-center justify-center">
                                                          <span className="text-gray-400">No preview</span>
                                                        </div>
                                                      )}
                                                      <div className="p-2 text-sm truncate">{item.name}</div>
                                                    </div>
                                                  ))}
                                                </div>
                                              </DialogContent>
                                            </Dialog>
                                          </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                          <Switch
                                            checked={editingTestimonial.featured}
                                            onCheckedChange={(checked) => setEditingTestimonial({
                                              ...editingTestimonial,
                                              featured: checked
                                            })}
                                            id="edit-featured"
                                          />
                                          <Label htmlFor="edit-featured">Featured Testimonial</Label>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                          <Switch
                                            checked={editingTestimonial.active}
                                            onCheckedChange={(checked) => setEditingTestimonial({
                                              ...editingTestimonial,
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
                                        setIsEditing(false);
                                        setEditingTestimonial(null);
                                      }}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleEditTestimonial}>Save Changes</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
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
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Preview</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">{sectionTitle}</h2>
            <p className="text-gray-600">{sectionSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .filter(t => t.active)
              .slice(0, 3)
              .map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`border rounded-lg p-6 ${
                    testimonial.featured ? 'bg-blue-50 border-blue-200' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}{testimonial.title && testimonial.company ? ', ' : ''}{testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAdmin;
