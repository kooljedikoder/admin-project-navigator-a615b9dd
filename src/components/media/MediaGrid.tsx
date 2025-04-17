
import React from 'react';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import MediaItem from './MediaItem';
import { FolderIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaGrid: React.FC = () => {
  const { 
    mediaItems, 
    folders, 
    currentFolder, 
    navigateToFolder,
    viewMode,
    searchQuery,
    sortBy,
    sortDirection
  } = useMediaLibrary();
  
  // Filter by current folder and search query
  const filteredItems = mediaItems.filter(item => {
    // Filter by folder
    const folderMatch = item.folder === currentFolder;
    
    // Filter by search query
    const searchMatch = searchQuery 
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    
    return folderMatch && searchMatch;
  });
  
  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'date':
        comparison = new Date(a.dateUploaded).getTime() - new Date(b.dateUploaded).getTime();
        break;
      case 'size':
        comparison = a.size - b.size;
        break;
      case 'type':
        comparison = a.type.localeCompare(b.type);
        break;
      default:
        comparison = 0;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  // Get subfolders of current folder
  const subFolders = folders.filter(folder => folder.parent === currentFolder);
  
  // Handle folder click
  const handleFolderClick = (folderId: string) => {
    navigateToFolder(folderId);
  };
  
  return (
    <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' : 'space-y-2'}>
      {/* Folders first */}
      {subFolders.map(folder => (
        <Card 
          key={folder.id}
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleFolderClick(folder.id)}
        >
          <CardContent className="p-4 flex items-center gap-3">
            <FolderIcon className="text-[hsl(var(--admin-primary))]" size={viewMode === 'grid' ? 40 : 24} />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{folder.name}</p>
              {viewMode === 'list' && (
                <p className="text-xs text-muted-foreground">Folder</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Media items */}
      {sortedItems.map(item => (
        <MediaItem key={item.id} item={item} />
      ))}
      
      {/* Empty state */}
      {subFolders.length === 0 && sortedItems.length === 0 && (
        <div className="col-span-full py-12 text-center">
          <p className="text-muted-foreground">No items found</p>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your search query
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
