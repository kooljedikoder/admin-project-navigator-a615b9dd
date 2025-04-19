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
import { 
  PlusCircle, 
  Trash2, 
  Edit3, 
  Image, 
  Video, 
  Youtube, 
  FileCode, 
  Link as LinkIcon,
  Upload,
  LayoutDashboard,
  MessageSquare,
  ThumbsUp,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { HeroSlide } from '@/components/home/VideoHeroSlider';
import { MediaLibraryProvider, useMediaLibrary } from '@/contexts/MediaLibraryContext';
import LogoScrollerAdmin from '@/components/admin/LogoScrollerAdmin';
import PopupBuilderAdmin from '@/components/admin/PopupBuilderAdmin';
import FeedbackFormAdmin from '@/components/admin/FeedbackFormAdmin';

const MediaSelector = ({ 
  onSelect, 
  currentValue,
  mediaType 
}: { 
  onSelect: (url: string) => void;
  currentValue: string;
  mediaType: 'image' | 'video' | 'youtube' | 'html';
}) => {
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [urlInput, setUrlInput] = useState(currentValue);
  
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input 
          value={urlInput}
          onChange={(e) => {
            setUrlInput(e.target.value);
            onSelect(e.target.value);
          }}
          placeholder={`Enter ${mediaType} URL`}
          className="flex-1"
        />
        <Dialog open={showMediaLibrary} onOpenChange={setShowMediaLibrary}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Upload className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl h-[80vh]">
            <DialogHeader>
              <DialogTitle>Media Library</DialogTitle>
              <DialogDescription>
                Select media from your library
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-hidden">
              <MediaLibraryContent onSelect={(url) => {
                onSelect(url);
                setUrlInput(url);
                setShowMediaLibrary(false);
              }} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const MediaLibraryContent = ({ 
  onSelect 
}: { 
  onSelect: (url: string) => void;
}) => {
  const { mediaItems } = useMediaLibrary();
  
  return (
    <div className="grid grid-cols-4 gap-4 p-4 overflow-y-auto max-h-[calc(80vh-10rem)]">
      {mediaItems.map((item) => (
        <Card 
          key={item.id} 
          className="cursor-pointer hover:border-primary transition-colors"
          onClick={() => onSelect(item.url)}
        >
          <CardContent className="p-2">
            {item.type === 'image' && item.thumbnailUrl ? (
              <img 
                src={item.thumbnailUrl} 
                alt={item.name}
                className="w-full h-32 object-cover rounded-sm"
              />
            ) : (
              <div className="w-full h-32 bg-muted flex items-center justify-center rounded-sm">
                <FileCode className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
            <p className="mt-2 text-sm truncate">{item.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const HeroAdmin: React.FC = () => {
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
    overlayOpacity: 50, // New setting for opacity
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<HeroSlide | null>(null);
  
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

  const handleAddSlide = () => {
    const newSlides = [...slides, { ...emptySlide, id: Date.now() }];
    setSlides(newSlides);
    setCurrentSlideIndex(newSlides.length - 1);
    setIsAddingNew(true);
    toast.success("New slide added");
  };

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

  const handleSlideChange = (field: keyof HeroSlide, value: any) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex] = {
      ...updatedSlides[currentSlideIndex],
      [field]: value
    };
    setSlides(updatedSlides);
  };

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

  const handleSaveAll = () => {
    toast.success("All changes saved successfully");
    setIsAddingNew(false);
  };

  const handleSettingsChange = (field: keyof typeof sliderSettings, value: any) => {
    setSliderSettings({
      ...sliderSettings,
      [field]: value
    });
  };

  const handlePreviewSlide = (slide: HeroSlide) => {
    setCurrentSlide(slide);
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <AdminLayout title="Homepage Content Management">
      <MediaLibraryProvider>
        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="hero" className="flex items-center gap-2">
              <LayoutDashboard size={16} />
              <span>Hero Slides</span>
            </TabsTrigger>
            <TabsTrigger value="popup" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span>Popup Builder</span>
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <ThumbsUp size={16} />
              <span>Rate Us Form</span>
            </TabsTrigger>
            <TabsTrigger value="logos" className="flex items-center gap-2">
              <Globe size={16} />
              <span>Logo Scroller</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span>Testimonials</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Edit3 size={16} />
              <span>Slider Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hero" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Hero Slides</h2>
              <div className="flex gap-2">
                <Button onClick={handleAddSlide} className="gap-2">
                  <PlusCircle size={16} />
                  Add New Slide
                </Button>
                <Button variant="outline" onClick={() => setIsSettingsOpen(true)}>
                  <Settings size={16} className="mr-2" />
                  Slider Settings
                </Button>
              </div>
            </div>

            {/* Preview Section */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>Live preview of the current slide</CardDescription>
              </CardHeader>
              <CardContent>
                {currentSlide && (
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="aspect-[21/9] max-h-[400px] relative">
                      {currentSlide.type === 'image' && (
                        <img
                          src={currentSlide.source}
                          alt={currentSlide.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {currentSlide.type === 'video' && (
                        <video
                          src={currentSlide.source}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                        />
                      )}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                        style={{ opacity: sliderSettings.overlayOpacity / 100 }}
                      ></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white max-w-3xl">
                        <h3 className="text-sm font-semibold tracking-wider mb-2">{currentSlide.subtitle}</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentSlide.title}</h2>
                        <p className="text-white/80 mb-4 text-lg">{currentSlide.description}</p>
                        <Button className="bg-white text-blue-900 hover:bg-blue-50">{currentSlide.ctaText}</Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-12 gap-6">
              {/* Slide List */}
              <div className="col-span-12 md:col-span-3 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Slides</h3>
                  <div className="space-y-2">
                    {slides.map((slide, index) => (
                      <div
                        key={slide.id}
                        onClick={() => {
                          setCurrentSlideIndex(index);
                          handlePreviewSlide(slide);
                        }}
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
              
              {/* Edit Section */}
              <div className="col-span-12 md:col-span-9">
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
                        <Label htmlFor="source">Media Source</Label>
                        <MediaSelector
                          onSelect={(url) => handleSlideChange('source', url)}
                          currentValue={slides[currentSlideIndex].source}
                          mediaType={slides[currentSlideIndex].type}
                        />
                        {slides[currentSlideIndex].type === 'image' && (
                          <div className="mt-4">
                            <Label htmlFor="thumbnail">Thumbnail URL</Label>
                            <MediaSelector
                              onSelect={(url) => handleSlideChange('thumbnail', url)}
                              currentValue={slides[currentSlideIndex].thumbnail}
                              mediaType="image"
                            />
                          </div>
                        )}
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
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleSaveAll} size="lg" className="gap-2">
                Save All Changes
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="popup" className="space-y-6">
            <PopupBuilderAdmin />
          </TabsContent>
          
          <TabsContent value="feedback" className="space-y-6">
            <FeedbackFormAdmin />
          </TabsContent>
          
          <TabsContent value="logos" className="space-y-6">
            <LogoScrollerAdmin />
          </TabsContent>
          
          <TabsContent value="testimonials" className="space-y-6">
            <TestimonialsAdmin />
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
      </MediaLibraryProvider>
    </AdminLayout>
  );
};

export default HeroAdmin;
