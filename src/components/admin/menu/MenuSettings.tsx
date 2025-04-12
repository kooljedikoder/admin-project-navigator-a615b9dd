
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FormLabel, FormDescription } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';

interface MenuSettingsProps {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  menuLocations: { id: string; name: string }[];
}

const MenuSettings: React.FC<MenuSettingsProps> = ({
  selectedLocation,
  setSelectedLocation,
  menuLocations
}) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Menu Settings</CardTitle>
        <CardDescription>Additional menu configuration options</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <FormLabel>Menu Name</FormLabel>
            <Input 
              placeholder="Menu Name" 
              defaultValue={menuLocations.find(loc => loc.id === selectedLocation)?.name}
            />
            <FormDescription className="mt-1 text-xs">
              The name is used for administrative purposes
            </FormDescription>
          </div>
          
          <Separator />
          
          <div>
            <FormLabel>Display Location</FormLabel>
            <div className="mt-2 space-y-2">
              {menuLocations.map(location => (
                <div 
                  key={location.id}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id={`loc-${location.id}`}
                    checked={selectedLocation === location.id}
                    onChange={() => setSelectedLocation(location.id)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label htmlFor={`loc-${location.id}`}>{location.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuSettings;
