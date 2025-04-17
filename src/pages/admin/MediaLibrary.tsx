
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { MediaLibraryProvider } from '@/contexts/MediaLibraryContext';
import BreadcrumbTrail from '@/components/media/BreadcrumbTrail';
import MediaFilters from '@/components/media/MediaFilters';
import MediaGrid from '@/components/media/MediaGrid';
import FileUploader from '@/components/media/FileUploader';
import ActionToolbar from '@/components/media/ActionToolbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const MediaLibrary: React.FC = () => {
  return (
    <AdminLayout title="Media Library">
      <MediaLibraryProvider>
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="space-y-4">
            <BreadcrumbTrail />
            <MediaFilters />
            <ActionToolbar />
            <ScrollArea className="h-[calc(100vh-320px)]">
              <MediaGrid />
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="upload">
            <FileUploader />
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Uploads</h2>
              <MediaGrid />
            </div>
          </TabsContent>
        </Tabs>
      </MediaLibraryProvider>
    </AdminLayout>
  );
};

export default MediaLibrary;
