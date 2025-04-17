
import React from 'react';
import { 
  File, 
  FileImage, 
  FileVideo, 
  FileAudio, 
  FileText, 
  MoreVertical,
  Trash,
  Download,
  Edit,
  Copy,
  Tag
} from 'lucide-react';
import { format } from 'date-fns';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formatFileSize } from '@/lib/file-utils';

interface MediaItemProps {
  item: import('@/contexts/MediaLibraryContext').MediaItem;
}

const MediaItem: React.FC<MediaItemProps> = ({ item }) => {
  const { toggleSelectItem, selectedItems, deleteMediaItems } = useMediaLibrary();
  const isSelected = selectedItems.includes(item.id);
  
  const getFileIcon = () => {
    switch (item.type) {
      case 'image':
        return <FileImage size={30} />;
      case 'video':
        return <FileVideo size={30} />;
      case 'audio':
        return <FileAudio size={30} />;
      case 'document':
        return <FileText size={30} />;
      default:
        return <File size={30} />;
    }
  };
  
  return (
    <Card className={`group overflow-hidden transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative">
        {/* Thumbnail or icon */}
        {item.type === 'image' && item.thumbnailUrl ? (
          <div className="aspect-square w-full overflow-hidden bg-muted">
            <img
              src={item.thumbnailUrl}
              alt={item.name}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-square w-full flex items-center justify-center bg-muted">
            {getFileIcon()}
          </div>
        )}
        
        {/* Selection overlay */}
        <div 
          className={`absolute inset-0 flex items-start justify-end p-2 transition-opacity ${
            isSelected ? 'bg-primary/10 opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <Checkbox 
            checked={isSelected} 
            onCheckedChange={() => toggleSelectItem(item.id)}
            className="h-5 w-5 rounded-sm bg-background/90"
          />
        </div>
      </div>
      
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="truncate">
            <p className="font-medium truncate" title={item.name}>
              {item.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatFileSize(item.size)} • {format(new Date(item.dateUploaded), 'MMM d, yyyy')}
            </p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-1 h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted">
                <MoreVertical size={16} />
                <span className="sr-only">More options</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit size={14} className="mr-2" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download size={14} className="mr-2" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy size={14} className="mr-2" />
                Copy link
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Tag size={14} className="mr-2" />
                Manage tags
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={() => deleteMediaItems([item.id])}>
                <Trash size={14} className="mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaItem;
