
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { PlusCircle, Trash2, Edit3, Image, X } from 'lucide-react';

interface PopupSettings {
  id: string;
  name: string;
  title: string;
  message: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  timing: {
    delay: number;
    showOnce: boolean;
    triggerType: 'timed' | 'exit' | 'scroll' | 'click';
    exitPercentage?: number;
    scrollPercentage?: number;
    clickSelector?: string;
  };
  appearance: {
    position: 'center' | 'top' | 'bottom' | 'left' | 'right';
    width: number;
    height: number;
    animation: 'fade' | 'slide' | 'scale';
    backgroundColor: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    overlayColor: string;
    overlayOpacity: number;
  };
  active: boolean;
}

const PopupBuilderAdmin: React.FC = () => {
  const [popups, setPopups] = useState<PopupSettings[]>([
    {
      id: '1',
      name: 'Welcome Popup',
      title: 'Welcome to Our Website!',
      message: 'Subscribe to our newsletter to receive updates and special offers.',
      buttonText: 'Subscribe Now',
      buttonLink: '/subscribe',
      imageUrl: '/placeholder.svg',
      timing: {
        delay: 3,
        showOnce: true,
        triggerType: 'timed',
      },
      appearance: {
        position: 'center',
        width: 400,
        height: 400,
        animation: 'fade',
        backgroundColor: '#ffffff',
        textColor: '#333333',
        buttonColor: '#4f46e5',
        buttonTextColor: '#ffffff',
        overlayColor: '#000000',
        overlayOpacity: 0.5,
      },
      active: true,
    },
    {
      id: '2',
      name: 'Exit Intent Offer',
      title: 'Wait! Don\'t Leave Yet',
      message: 'We have a special offer just for you before you go.',
      buttonText: 'See Offer',
      buttonLink: '/special-offer',
      imageUrl: '/placeholder.svg',
      timing: {
        delay: 0,
        showOnce: true,
        triggerType: 'exit',
      },
      appearance: {
        position: 'center',
        width: 500,
        height: 350,
        animation: 'scale',
        backgroundColor: '#ffffff',
        textColor: '#333333',
        buttonColor: '#ef4444',
        buttonTextColor: '#ffffff',
        overlayColor: '#000000',
        overlayOpacity: 0.7,
      },
      active: true,
    }
  ]);
  
  const [currentPopupId, setCurrentPopupId] = useState<string>(popups[0]?.id || '');
  const currentPopup = popups.find(p => p.id === currentPopupId) || popups[0];
  
  const handlePopupChange = (field: string, value: any) => {
    if (!currentPopup) return;
    
    const updatedPopups = popups.map(popup => {
      if (popup.id === currentPopupId) {
        if (field.includes('.')) {
          const [section, property] = field.split('.');
          return {
            ...popup,
            [section]: {
              ...popup[section as keyof typeof popup] as any,
              [property]: value
            }
          };
        } else {
          return { ...popup, [field]: value };
        }
      }
      return popup;
    });
    
    setPopups(updatedPopups);
  };
  
  const handleAddPopup = () => {
    const newPopup: PopupSettings = {
      id: Date.now().toString(),
      name: 'New Popup',
      title: 'Enter Your Title',
      message: 'Enter your message here...',
      buttonText: 'Click Here',
      buttonLink: '/',
      imageUrl: '/placeholder.svg',
      timing: {
        delay: 2,
        showOnce: true,
        triggerType: 'timed',
      },
      appearance: {
        position: 'center',
        width: 400,
        height: 300,
        animation: 'fade',
        backgroundColor: '#ffffff',
        textColor: '#333333',
        buttonColor: '#4f46e5',
        buttonTextColor: '#ffffff',
        overlayColor: '#000000',
        overlayOpacity: 0.5,
      },
      active: false,
    };
    
    setPopups([...popups, newPopup]);
    setCurrentPopupId(newPopup.id);
    toast.success('New popup created');
  };
  
  const handleDeletePopup = (id: string) => {
    if (popups.length <= 1) {
      toast.error('You need at least one popup');
      return;
    }
    
    const updatedPopups = popups.filter(popup => popup.id !== id);
    setPopups(updatedPopups);
    setCurrentPopupId(updatedPopups[0]?.id || '');
    toast.success('Popup deleted');
  };
  
  const handleSaveChanges = () => {
    toast.success('Popup settings saved');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Popup Builder</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleAddPopup} className="gap-2">
            <PlusCircle size={16} />
            Add Popup
          </Button>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Popups</CardTitle>
              <CardDescription>Select a popup to edit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {popups.map(popup => (
                  <div
                    key={popup.id}
                    onClick={() => setCurrentPopupId(popup.id)}
                    className={`flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-gray-100 ${
                      currentPopupId === popup.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <div>
                      <h3 className="font-medium">{popup.name}</h3>
                      <span className={`text-xs ${popup.active ? 'text-green-600' : 'text-gray-500'}`}>
                        {popup.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePopup(popup.id);
                      }}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {currentPopup && (
          <div className="col-span-12 md:col-span-9">
            <Tabs defaultValue="content">
              <TabsList className="mb-4">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="timing">Timing</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Popup Content</CardTitle>
                    <CardDescription>Customize the text and image for your popup</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="popupName">Popup Name (Internal)</Label>
                      <Input
                        id="popupName"
                        value={currentPopup.name}
                        onChange={(e) => handlePopupChange('name', e.target.value)}
                        placeholder="e.g., Welcome Popup"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="popupTitle">Popup Title</Label>
                      <Input
                        id="popupTitle"
                        value={currentPopup.title}
                        onChange={(e) => handlePopupChange('title', e.target.value)}
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="popupMessage">Popup Message</Label>
                      <Textarea
                        id="popupMessage"
                        value={currentPopup.message}
                        onChange={(e) => handlePopupChange('message', e.target.value)}
                        placeholder="Enter your message"
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="buttonText">Button Text</Label>
                        <Input
                          id="buttonText"
                          value={currentPopup.buttonText}
                          onChange={(e) => handlePopupChange('buttonText', e.target.value)}
                          placeholder="e.g., Subscribe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="buttonLink">Button Link</Label>
                        <Input
                          id="buttonLink"
                          value={currentPopup.buttonLink}
                          onChange={(e) => handlePopupChange('buttonLink', e.target.value)}
                          placeholder="e.g., /subscribe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input
                        id="imageUrl"
                        value={currentPopup.imageUrl}
                        onChange={(e) => handlePopupChange('imageUrl', e.target.value)}
                        placeholder="Enter image URL"
                      />
                      <p className="text-sm text-gray-500">Image will be displayed in the popup</p>
                    </div>
                    <div className="flex items-center space-x-2 pt-4">
                      <Switch
                        checked={currentPopup.active}
                        onCheckedChange={(checked) => handlePopupChange('active', checked)}
                        id="popup-active"
                      />
                      <Label htmlFor="popup-active">Popup Active</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="timing" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Timing & Triggers</CardTitle>
                    <CardDescription>Control when and how your popup appears</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="triggerType">Trigger Type</Label>
                      <Select
                        value={currentPopup.timing.triggerType}
                        onValueChange={(value) => handlePopupChange('timing.triggerType', value)}
                      >
                        <SelectTrigger id="triggerType">
                          <SelectValue placeholder="Select trigger type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="timed">Timed (After delay)</SelectItem>
                          <SelectItem value="exit">Exit Intent</SelectItem>
                          <SelectItem value="scroll">Scroll Percentage</SelectItem>
                          <SelectItem value="click">Click on Element</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {currentPopup.timing.triggerType === 'timed' && (
                      <div className="space-y-2">
                        <Label htmlFor="delay">Delay (seconds)</Label>
                        <div className="flex items-center gap-4">
                          <div className="flex-grow">
                            <Slider
                              value={[currentPopup.timing.delay]}
                              min={0}
                              max={30}
                              step={1}
                              onValueChange={(value) => handlePopupChange('timing.delay', value[0])}
                            />
                          </div>
                          <div className="w-16">
                            <Input
                              type="number"
                              value={currentPopup.timing.delay}
                              onChange={(e) => handlePopupChange('timing.delay', Number(e.target.value))}
                              min={0}
                              max={30}
                              step={1}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentPopup.timing.triggerType === 'scroll' && (
                      <div className="space-y-2">
                        <Label htmlFor="scrollPercentage">Scroll Percentage</Label>
                        <div className="flex items-center gap-4">
                          <div className="flex-grow">
                            <Slider
                              value={[currentPopup.timing.scrollPercentage || 50]}
                              min={0}
                              max={100}
                              step={5}
                              onValueChange={(value) => handlePopupChange('timing.scrollPercentage', value[0])}
                            />
                          </div>
                          <div className="w-16">
                            <Input
                              type="number"
                              value={currentPopup.timing.scrollPercentage || 50}
                              onChange={(e) => handlePopupChange('timing.scrollPercentage', Number(e.target.value))}
                              min={0}
                              max={100}
                              step={5}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">Show popup when user scrolls past this percentage of the page</p>
                      </div>
                    )}
                    
                    {currentPopup.timing.triggerType === 'click' && (
                      <div className="space-y-2">
                        <Label htmlFor="clickSelector">CSS Selector</Label>
                        <Input
                          id="clickSelector"
                          value={currentPopup.timing.clickSelector || ''}
                          onChange={(e) => handlePopupChange('timing.clickSelector', e.target.value)}
                          placeholder=".button-class or #button-id"
                        />
                        <p className="text-sm text-gray-500">Show popup when user clicks on an element matching this CSS selector</p>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2 pt-4">
                      <Checkbox
                        checked={currentPopup.timing.showOnce}
                        onCheckedChange={(checked) => handlePopupChange('timing.showOnce', checked)}
                        id="showOnce"
                      />
                      <Label htmlFor="showOnce">Show only once per session</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Style & Appearance</CardTitle>
                    <CardDescription>Customize how your popup looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Select
                        value={currentPopup.appearance.position}
                        onValueChange={(value) => handlePopupChange('appearance.position', value)}
                      >
                        <SelectTrigger id="position">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="center">Center</SelectItem>
                          <SelectItem value="top">Top</SelectItem>
                          <SelectItem value="bottom">Bottom</SelectItem>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="width">Width (px)</Label>
                        <Input
                          id="width"
                          type="number"
                          value={currentPopup.appearance.width}
                          onChange={(e) => handlePopupChange('appearance.width', Number(e.target.value))}
                          min={200}
                          max={800}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (px)</Label>
                        <Input
                          id="height"
                          type="number"
                          value={currentPopup.appearance.height}
                          onChange={(e) => handlePopupChange('appearance.height', Number(e.target.value))}
                          min={200}
                          max={800}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="animation">Animation</Label>
                      <Select
                        value={currentPopup.appearance.animation}
                        onValueChange={(value) => handlePopupChange('appearance.animation', value)}
                      >
                        <SelectTrigger id="animation">
                          <SelectValue placeholder="Select animation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fade">Fade</SelectItem>
                          <SelectItem value="slide">Slide</SelectItem>
                          <SelectItem value="scale">Scale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="backgroundColor">Background Color</Label>
                        <div className="flex gap-2">
                          <div
                            className="h-9 w-9 rounded-md border"
                            style={{ backgroundColor: currentPopup.appearance.backgroundColor }}
                          />
                          <Input
                            id="backgroundColor"
                            value={currentPopup.appearance.backgroundColor}
                            onChange={(e) => handlePopupChange('appearance.backgroundColor', e.target.value)}
                            placeholder="#ffffff"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="textColor">Text Color</Label>
                        <div className="flex gap-2">
                          <div
                            className="h-9 w-9 rounded-md border"
                            style={{ backgroundColor: currentPopup.appearance.textColor }}
                          />
                          <Input
                            id="textColor"
                            value={currentPopup.appearance.textColor}
                            onChange={(e) => handlePopupChange('appearance.textColor', e.target.value)}
                            placeholder="#333333"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="buttonColor">Button Color</Label>
                        <div className="flex gap-2">
                          <div
                            className="h-9 w-9 rounded-md border"
                            style={{ backgroundColor: currentPopup.appearance.buttonColor }}
                          />
                          <Input
                            id="buttonColor"
                            value={currentPopup.appearance.buttonColor}
                            onChange={(e) => handlePopupChange('appearance.buttonColor', e.target.value)}
                            placeholder="#4f46e5"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="buttonTextColor">Button Text Color</Label>
                        <div className="flex gap-2">
                          <div
                            className="h-9 w-9 rounded-md border"
                            style={{ backgroundColor: currentPopup.appearance.buttonTextColor }}
                          />
                          <Input
                            id="buttonTextColor"
                            value={currentPopup.appearance.buttonTextColor}
                            onChange={(e) => handlePopupChange('appearance.buttonTextColor', e.target.value)}
                            placeholder="#ffffff"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="overlayOpacity">Overlay Opacity</Label>
                      <div className="flex items-center gap-4">
                        <div className="flex-grow">
                          <Slider
                            value={[currentPopup.appearance.overlayOpacity]}
                            min={0}
                            max={1}
                            step={0.1}
                            onValueChange={(value) => handlePopupChange('appearance.overlayOpacity', value[0])}
                          />
                        </div>
                        <div className="w-16">
                          <Input
                            type="number"
                            value={currentPopup.appearance.overlayOpacity}
                            onChange={(e) => handlePopupChange('appearance.overlayOpacity', Number(e.target.value))}
                            min={0}
                            max={1}
                            step={0.1}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>This is how your popup will look</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-8 relative bg-gray-100 h-[500px] flex items-center justify-center overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-black opacity-50"
                        style={{ opacity: currentPopup.appearance.overlayOpacity }}
                      ></div>
                      
                      <div 
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                        style={{
                          width: `${currentPopup.appearance.width}px`,
                          maxWidth: '100%',
                          maxHeight: '90%',
                          backgroundColor: currentPopup.appearance.backgroundColor,
                          color: currentPopup.appearance.textColor
                        }}
                      >
                        <button className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300 z-10">
                          <X size={20} />
                        </button>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                          {currentPopup.imageUrl && (
                            <div className="hidden md:block">
                              <img 
                                src={currentPopup.imageUrl}
                                alt="Popup image"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          
                          <div className="p-6 flex flex-col">
                            <h3 
                              className="text-2xl font-bold mb-4"
                              style={{ color: currentPopup.appearance.textColor }}
                            >
                              {currentPopup.title}
                            </h3>
                            
                            <p className="mb-6">{currentPopup.message}</p>
                            
                            <div className="mt-auto">
                              <Button
                                className="w-full"
                                style={{
                                  backgroundColor: currentPopup.appearance.buttonColor,
                                  color: currentPopup.appearance.buttonTextColor
                                }}
                              >
                                {currentPopup.buttonText}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupBuilderAdmin;
