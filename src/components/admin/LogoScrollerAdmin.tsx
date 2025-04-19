
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import { toast } from 'sonner';
import { PlusCircle, Trash2, Upload, GripVertical } from 'lucide-react';

interface Logo {
  id: string;
  name: string;
  imageUrl: string;
  link?: string;
}

const LogoScrollerAdmin: React.FC = () => {
  const [title, setTitle] = useState('Trusted by Leading Companies');
  const [subtitle, setSubtitle] = useState('We partner with forward-thinking businesses across industries');
  const [logos, setLogos] = useState<Logo[]>([
    { id: '1', name: 'Company 1', imageUrl: '/placeholder.svg', link: 'https://example.com/1' },
    { id: '2', name: 'Company 2', imageUrl: '/placeholder.svg', link: 'https://example.com/2' },
    { id: '3', name: 'Company 3', imageUrl: '/placeholder.svg', link: 'https://example.com/3' },
    { id: '4', name: 'Company 4', imageUrl: '/placeholder.svg', link: 'https://example.com/4' },
    { id: '5', name: 'Company 5', imageUrl: '/placeholder.svg', link: 'https://example.com/5' },
  ]);
  const [isAddingLogo, setIsAddingLogo] = useState(false);
  const [newLogo, setNewLogo] = useState<Omit<Logo, 'id'>>({ name: '', imageUrl: '', link: '' });
  const [editingLogo, setEditingLogo] = useState<Logo | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  
  const { mediaItems } = useMediaLibrary();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(logos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setLogos(items);
    toast.success('Logo order updated');
  };
  
  const handleAddLogo = () => {
    if (!newLogo.name || !newLogo.imageUrl) {
      toast.error('Logo name and image are required');
      return;
    }
    
    const newLogoWithId = {
      ...newLogo,
      id: Date.now().toString(),
    };
    
    setLogos([...logos, newLogoWithId]);
    setNewLogo({ name: '', imageUrl: '', link: '' });
    setIsAddingLogo(false);
    toast.success('Logo added successfully');
  };
  
  const handleUpdateLogo = () => {
    if (editingLogo && editingIndex !== null) {
      const updatedLogos = [...logos];
      updatedLogos[editingIndex] = editingLogo;
      setLogos(updatedLogos);
      setEditingLogo(null);
      setEditingIndex(null);
      toast.success('Logo updated successfully');
    }
  };
  
  const handleDeleteLogo = (id: string) => {
    setLogos(logos.filter(logo => logo.id !== id));
    toast.success('Logo removed');
  };
  
  const handleSelectImage = (url: string) => {
    if (editingLogo) {
      setEditingLogo({ ...editingLogo, imageUrl: url });
    } else {
      setNewLogo({ ...newLogo, imageUrl: url });
    }
  };
  
  const handleSaveAll = () => {
    toast.success('All changes saved successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Logo Scroller</h2>
        <Button onClick={handleSaveAll}>Save Changes</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Section Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Section Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter section title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtitle">Section Subtitle</Label>
            <Input
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter section subtitle"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Manage Logos</h3>
        <Dialog open={isAddingLogo} onOpenChange={setIsAddingLogo}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <PlusCircle size={16} />
              Add Logo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Logo</DialogTitle>
              <DialogDescription>Add a company logo to the scroller</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="logoName">Company Name</Label>
                <Input
                  id="logoName"
                  value={newLogo.name}
                  onChange={(e) => setNewLogo({ ...newLogo, name: e.target.value })}
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logoLink">Website Link (Optional)</Label>
                <Input
                  id="logoLink"
                  value={newLogo.link || ''}
                  onChange={(e) => setNewLogo({ ...newLogo, link: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-2">
                <Label>Logo Image</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-2 h-20 flex items-center justify-center">
                    {newLogo.imageUrl ? (
                      <img 
                        src={newLogo.imageUrl} 
                        alt="Selected logo" 
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-400">No image selected</span>
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
                        <DialogDescription>Select a logo image</DialogDescription>
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
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingLogo(false)}>Cancel</Button>
              <Button onClick={handleAddLogo}>Add Logo</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="logos">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-3"
                >
                  {logos.map((logo, index) => (
                    <Draggable key={logo.id} draggableId={logo.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center bg-white p-3 rounded-md border"
                        >
                          <div {...provided.dragHandleProps} className="mr-3">
                            <GripVertical size={18} className="text-gray-400" />
                          </div>
                          <div className="h-10 w-10 mr-3 flex-shrink-0 border rounded overflow-hidden">
                            <img 
                              src={logo.imageUrl} 
                              alt={logo.name}
                              className="h-full w-full object-contain" 
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{logo.name}</p>
                            {logo.link && (
                              <p className="text-xs text-blue-600 truncate">{logo.link}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => {
                                    setEditingLogo(logo);
                                    setEditingIndex(index);
                                  }}
                                >
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Logo</DialogTitle>
                                </DialogHeader>
                                {editingLogo && (
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="editLogoName">Company Name</Label>
                                      <Input
                                        id="editLogoName"
                                        value={editingLogo.name}
                                        onChange={(e) => setEditingLogo({ ...editingLogo, name: e.target.value })}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="editLogoLink">Website Link (Optional)</Label>
                                      <Input
                                        id="editLogoLink"
                                        value={editingLogo.link || ''}
                                        onChange={(e) => setEditingLogo({ ...editingLogo, link: e.target.value })}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Logo Image</Label>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="border rounded-md p-2 h-20 flex items-center justify-center">
                                          <img 
                                            src={editingLogo.imageUrl} 
                                            alt="Selected logo" 
                                            className="max-h-full max-w-full object-contain"
                                          />
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
                                  </div>
                                )}
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => {
                                    setEditingLogo(null);
                                    setEditingIndex(null);
                                  }}>
                                    Cancel
                                  </Button>
                                  <Button onClick={handleUpdateLogo}>Save Changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleDeleteLogo(logo.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
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
        <h3 className="font-medium mb-2">Preview</h3>
        <div className="bg-blue-950 p-6 rounded-lg">
          <div className="text-center text-white">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-blue-200 mb-4">{subtitle}</p>
          </div>
          
          <div className="flex gap-6 py-4 overflow-x-auto">
            {logos.map((logo) => (
              <div key={logo.id} className="flex-shrink-0 w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center p-2">
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScrollerAdmin;
