
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { PlusCircle, Trash2, ArrowUpDown, Edit3, Image, Video, Youtube, FileCode, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { HeroSlide } from '@/components/home/VideoHeroSlider';
import { getFileTypeFromExtension } from '@/lib/file-utils';

const HeroAdmin: React.FC = () => {
  // Sample slides for admin interface
  const [slides, setSlides] = useState<HeroSlide[]>([
    {
      id: 1,
      title: "Your Business, Our Expertise",
      subtitle: "INNOVATIVE SOLUTIONS FOR GROWTH",
      description: "We partner with businesses to create strategic solutions that drive real results",
      ctaText: "Learn More",
      ctaLink: "/pages/about-us",
      type: 'image',
      source: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop",
      animation: 'fade'
    },
    {
      id: 2,
      title: "Digital Transformation",
      subtitle: "TECHNOLOGY FOR THE MODERN BUSINESS", 
      description: "Leverage cutting-edge technology to transform your business operations",
      ctaText: "Our Services",
      ctaLink: "/pages/services",
      type: 'video',
      source: "https://player.vimeo.com/external/517090621.hd.mp4?s=c8bbdfadbc7c654af239dbc5276c276a991274c2&profile_id=175",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop",
      animation: 'slideRight'
    },
    {
      id: 3,
      title: "Expert Consultation",
      subtitle: "TAILORED ADVICE FOR YOUR NEEDS",
      description: "Our team of experts provides personalized consultation to meet your unique requirements",
      ctaText: "Contact Us",
      ctaLink: "/pages/contact",
      type: 'image',
      source: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
      animation: 'slideUp'
    }
  ]);

  const [sliderSettings, setSliderSettings] = useState({
    autoplaySpeed: 5000,
    defaultAnimation: 'fade' as const,
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAddingNew, setIsAddingNew] = useState(false);
  
  // Empty slide template for new slides
  const emptySlide: HeroSlide = {
    id: Date.now(),
    title: "New Slide Title",
    subtitle: "NEW SLIDE SUBTITLE",
    description: "Description for the new slide goes here",
    ctaText: "Click Here",
    ctaLink: "/",
    type: 'image',
    source: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop",
    animation: 'fade'
  };

  // Add a new slide
  const handleAddSlide = () => {
    const newSlides = [...slides, { ...emptySlide, id: Date.now() }];
    setSlides(newSlides);
    setCurrentSlideIndex(newSlides.length - 1);
    setIsAddingNew(true);
    toast.success("New slide added");
  };

  // Delete a slide
  const handleDeleteSlide = (index: number) => {
    if (slides.length <= 1) {
      toast.error("Cannot delete the only slide");
      return;
    }
    
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
    
    if (currentSlideIndex >= newSlides.length) {
      setCurrentSlideIndex(newSlides.length - 1);
    }
    
    toast.success("Slide deleted");
  };

  // Handle slide content changes
  const handleSlideChange = (field: keyof HeroSlide, value: any) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex] = {
      ...updatedSlides[currentSlideIndex],
      [field]: value
    };
    setSlides(updatedSlides);
  };

  // Move slide up or down
  const moveSlide = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === slides.length - 1)
    ) {
      return;
    }
    
    const newSlides = [...slides];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
    
    setSlides(newSlides);
    setCurrentSlideIndex(newIndex);
  };

  // Save all changes
  const handleSaveAll = () => {
    // In a real app, this would save to a database or localStorage
    toast.success("All changes saved successfully");
    setIsAddingNew(false);
  };

  // Update slider settings
  const handleSettingsChange = (field: keyof typeof sliderSettings, value: any) => {
    setSliderSettings({
      ...sliderSettings,
      [field]: value
    });
  };

  return (
    <AdminLayout title="Hero Section Management">
      <Tabs defaultValue="slides" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="slides">Slide Content</TabsTrigger>
          <TabsTrigger value="settings">Slider Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="slides" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Manage Hero Slides</h2>
            <Button onClick={handleAddSlide} className="gap-2">
              <PlusCircle size={16} />
              Add New Slide
            </Button>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Slide selector sidebar */}
            <div className="col-span-12 md:col-span-3 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Slides</h3>
                <div className="space-y-2">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`flex items-center p-2 rounded-md cursor-pointer text-sm hover:bg-blue-50 ${
                        currentSlideIndex === index ? 'bg-blue-100 border-l-4 border-blue-500' : ''
                      }`}
                    >
                      <div className="w-10 h-10 overflow-hidden rounded-md mr-2 flex-shrink-0">
                        <img 
                          src={slide.thumbnail} 
                          alt={`Slide ${index + 1}`} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div className="flex-grow overflow-hidden">
                        <span className="block font-medium truncate">{slide.title}</span>
                        <span className="text-xs text-gray-500">{slide.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Slide editor */}
            <div className="col-span-12 md:col-span-9">
              {slides.length > 0 && (
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-semibold">Edit Slide {currentSlideIndex + 1}</h3>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => moveSlide(currentSlideIndex, 'up')}
                        disabled={currentSlideIndex === 0}
                      >
                        Move Up
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => moveSlide(currentSlideIndex, 'down')}
                        disabled={currentSlideIndex === slides.length - 1}
                      >
                        Move Down
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteSlide(currentSlideIndex)}
                        disabled={slides.length <= 1}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Text content */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="subtitle">Subtitle (Small Text)</Label>
                        <Input 
                          id="subtitle"
                          value={slides[currentSlideIndex].subtitle}
                          onChange={(e) => handleSlideChange('subtitle', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="title">Title (Large Text)</Label>
                        <Input 
                          id="title"
                          value={slides[currentSlideIndex].title}
                          onChange={(e) => handleSlideChange('title', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description (Body Text)</Label>
                        <Textarea 
                          id="description"
                          value={slides[currentSlideIndex].description}
                          onChange={(e) => handleSlideChange('description', e.target.value)}
                          className="w-full"
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    {/* Media and CTA */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="mediaType">Media Type</Label>
                        <Select 
                          value={slides[currentSlideIndex].type} 
                          onValueChange={(value) => handleSlideChange('type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select media type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="image">
                              <div className="flex items-center gap-2">
                                <Image size={16} />
                                <span>Image</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="video">
                              <div className="flex items-center gap-2">
                                <Video size={16} />
                                <span>Video</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="youtube">
                              <div className="flex items-center gap-2">
                                <Youtube size={16} />
                                <span>YouTube</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="html">
                              <div className="flex items-center gap-2">
                                <FileCode size={16} />
                                <span>HTML</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="source">Media Source URL/Content</Label>
                        <Textarea 
                          id="source"
                          value={slides[currentSlideIndex].source}
                          onChange={(e) => handleSlideChange('source', e.target.value)}
                          className="w-full"
                          rows={3}
                          placeholder={
                            slides[currentSlideIndex].type === 'image' ? 'Image URL' :
                            slides[currentSlideIndex].type === 'video' ? 'Video URL' :
                            slides[currentSlideIndex].type === 'youtube' ? 'YouTube embed URL' :
                            'HTML content'
                          }
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="thumbnail">Thumbnail URL</Label>
                        <Input 
                          id="thumbnail"
                          value={slides[currentSlideIndex].thumbnail}
                          onChange={(e) => handleSlideChange('thumbnail', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ctaText">Button Text</Label>
                          <Input 
                            id="ctaText"
                            value={slides[currentSlideIndex].ctaText}
                            onChange={(e) => handleSlideChange('ctaText', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ctaLink">Button Link</Label>
                          <Input 
                            id="ctaLink"
                            value={slides[currentSlideIndex].ctaLink}
                            onChange={(e) => handleSlideChange('ctaLink', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="animation">Animation Style</Label>
                        <Select 
                          value={slides[currentSlideIndex].animation} 
                          onValueChange={(value) => handleSlideChange('animation', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select animation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fade">Fade In</SelectItem>
                            <SelectItem value="slideLeft">Slide from Left</SelectItem>
                            <SelectItem value="slideRight">Slide from Right</SelectItem>
                            <SelectItem value="slideUp">Slide from Bottom</SelectItem>
                            <SelectItem value="slideDown">Slide from Top</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview thumbnail */}
                  <div className="mt-6 border-t pt-4">
                    <h4 className="font-medium mb-3">Preview</h4>
                    <div className="aspect-video max-w-2xl rounded-lg overflow-hidden border bg-gray-100">
                      {slides[currentSlideIndex].type === 'image' && (
                        <img
                          src={slides[currentSlideIndex].source}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {slides[currentSlideIndex].type === 'video' && (
                        <video
                          src={slides[currentSlideIndex].source}
                          controls
                          className="w-full h-full object-cover"
                        />
                      )}
                      {slides[currentSlideIndex].type === 'youtube' && (
                        <iframe
                          src={slides[currentSlideIndex].source}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      )}
                      {slides[currentSlideIndex].type === 'html' && (
                        <div 
                          className="w-full h-full bg-white p-4 overflow-auto"
                          dangerouslySetInnerHTML={{ __html: slides[currentSlideIndex].source }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveAll} size="lg" className="gap-2">
              Save All Changes
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Slider Settings</CardTitle>
              <CardDescription>
                Configure the behavior and appearance of the hero slider
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-medium mb-2">Autoplay Speed (ms)</h3>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-10">
                      <Slider
                        value={[sliderSettings.autoplaySpeed]}
                        min={1000}
                        max={10000}
                        step={500}
                        onValueChange={(value) => handleSettingsChange('autoplaySpeed', value[0])}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input 
                        type="number" 
                        value={sliderSettings.autoplaySpeed}
                        onChange={(e) => handleSettingsChange('autoplaySpeed', parseInt(e.target.value))}
                        min={1000}
                        max={10000}
                        step={500}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {(sliderSettings.autoplaySpeed / 1000).toFixed(1)} seconds between slides
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="defaultAnimation">Default Animation</Label>
                  <Select 
                    value={sliderSettings.defaultAnimation} 
                    onValueChange={(value) => handleSettingsChange('defaultAnimation', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default animation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fade">Fade In</SelectItem>
                      <SelectItem value="slideLeft">Slide from Left</SelectItem>
                      <SelectItem value="slideRight">Slide from Right</SelectItem>
                      <SelectItem value="slideUp">Slide from Bottom</SelectItem>
                      <SelectItem value="slideDown">Slide from Top</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">
                    This will be applied to new slides by default
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end w-full">
                <Button onClick={handleSaveAll}>Save Settings</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default HeroAdmin;
