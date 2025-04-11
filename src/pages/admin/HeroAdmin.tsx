
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const HeroAdmin: React.FC = () => {
  const [heroData, setHeroData] = useState({
    heroText: 'Transform your brand with our creative solutions',
    buttonText: 'View Our Work',
    buttonLink: '/projects',
    sliderDescriptions: [
      'Award-winning designs for industry leaders',
      'Innovative digital experiences that convert',
      'End-to-end project management expertise'
    ]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('slider')) {
      const index = parseInt(name.replace('slider', ''), 10);
      setHeroData(prev => {
        const newSliders = [...prev.sliderDescriptions];
        newSliders[index] = value;
        return { ...prev, sliderDescriptions: newSliders };
      });
    } else {
      setHeroData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would save to a database
    toast.success('Hero section updated successfully');
  };

  return (
    <AdminLayout title="Hero Section Management">
      <Tabs defaultValue="content">
        <TabsList className="mb-6">
          <TabsTrigger value="content">Hero Content</TabsTrigger>
          <TabsTrigger value="slider">Slider Content</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-6">
          <div className="admin-section">
            <h2 className="admin-subheading">Main Hero Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroText" className="admin-label">Hero Heading Text</Label>
                <Textarea 
                  id="heroText"
                  name="heroText"
                  value={heroData.heroText}
                  onChange={handleInputChange}
                  className="admin-textarea"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="buttonText" className="admin-label">Button Text</Label>
                  <Input 
                    id="buttonText"
                    name="buttonText"
                    value={heroData.buttonText}
                    onChange={handleInputChange}
                    className="admin-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buttonLink" className="admin-label">Button Link</Label>
                  <Input 
                    id="buttonLink"
                    name="buttonLink"
                    value={heroData.buttonLink}
                    onChange={handleInputChange}
                    className="admin-input"
                  />
                </div>
              </div>
              
              <Button type="submit" className="admin-btn-primary">Save Changes</Button>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="slider" className="space-y-6">
          <div className="admin-section">
            <h2 className="admin-subheading">Slider Descriptions</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {heroData.sliderDescriptions.map((description, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`slider${index}`} className="admin-label">
                    Slider Description {index + 1}
                  </Label>
                  <Textarea 
                    id={`slider${index}`}
                    name={`slider${index}`}
                    value={description}
                    onChange={handleInputChange}
                    className="admin-textarea"
                  />
                </div>
              ))}
              
              <Button type="submit" className="admin-btn-primary">Save Changes</Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default HeroAdmin;
