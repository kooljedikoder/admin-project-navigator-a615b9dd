
import React, { useState } from 'react';
import {
  Trash2,
  FolderPlus,
  Download,
  Tag,
  Move,
  Copy,
  CheckSquare,
  Square
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ActionToolbar: React.FC = () => {
  const { 
    selectedItems, 
    mediaItems, 
    selectAll, 
    deselectAll, 
    deleteMediaItems,
    createFolder,
    currentFolder
  } = useMediaLibrary();
  const { toast } = useToast();
  const [newFolderName, setNewFolderName] = useState('');
  const [folderDialogOpen, setFolderDialogOpen] = useState(false);
  
  const selectedCount = selectedItems.length;
  const totalCount = mediaItems.filter(item => item.folder === currentFolder).length;
  const allSelected = selectedCount === totalCount && totalCount > 0;
  
  const handleToggleSelectAll = () => {
    if (allSelected) {
      deselectAll();
    } else {
      selectAll();
    }
  };
  
  const handleDeleteSelected = () => {
    if (selectedCount === 0) return;
    
    deleteMediaItems(selectedItems);
    toast({
      title: 'Items deleted',
      description: `${selectedCount} ${selectedCount === 1 ? 'item' : 'items'} have been deleted.`,
    });
  };
  
  const handleCreateFolder = () => {
    if (!newFolderName.trim()) {
      toast({
        title: 'Error',
        description: 'Folder name cannot be empty.',
        variant: 'destructive',
      });
      return;
    }
    
    createFolder(newFolderName.trim(), currentFolder);
    setNewFolderName('');
    setFolderDialogOpen(false);
    
    toast({
      title: 'Folder created',
      description: `Folder "${newFolderName}" has been created.`,
    });
  };
  
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 bg-muted/50 p-2 rounded-md">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={handleToggleSelectAll}
        >
          {allSelected ? (
            <CheckSquare size={16} />
          ) : (
            <Square size={16} />
          )}
          <span className="hidden sm:inline">
            {allSelected ? 'Deselect All' : 'Select All'}
          </span>
        </Button>
        
        {selectedCount > 0 && (
          <span className="text-sm text-muted-foreground">
            {selectedCount} {selectedCount === 1 ? 'item' : 'items'} selected
          </span>
        )}
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        <Dialog open={folderDialogOpen} onOpenChange={setFolderDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <FolderPlus size={16} />
              <span className="hidden sm:inline">New Folder</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new folder</DialogTitle>
              <DialogDescription>
                Enter a name for the new folder.
              </DialogDescription>
            </DialogHeader>
            <Input
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Folder name"
              className="mt-4"
            />
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setFolderDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateFolder}>
                Create Folder
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {selectedCount > 0 && (
          <>
            <Button variant="outline" size="sm" className="gap-1">
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Move size={16} />
              <span className="hidden sm:inline">Move</span>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Tag size={16} />
              <span className="hidden sm:inline">Tag</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleDeleteSelected}
            >
              <Trash2 size={16} />
              <span className="hidden sm:inline">Delete</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ActionToolbar;
