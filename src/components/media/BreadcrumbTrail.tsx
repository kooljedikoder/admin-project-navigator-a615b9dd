
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const BreadcrumbTrail: React.FC = () => {
  const { folders, currentFolder, navigateToFolder } = useMediaLibrary();
  
  // Build the folder path
  const buildPath = () => {
    const path: { id: string; name: string }[] = [];
    let current = folders.find(f => f.id === currentFolder);
    
    // Add current folder
    if (current) {
      path.unshift({ id: current.id, name: current.name });
      
      // Add parent folders
      while (current && current.parent) {
        const parent = folders.find(f => f.id === current?.parent);
        if (parent) {
          path.unshift({ id: parent.id, name: parent.name });
          current = parent;
        } else {
          break;
        }
      }
    }
    
    return path;
  };
  
  const folderPath = buildPath();
  const isRoot = currentFolder === 'root';
  
  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigateToFolder('root')} className="flex items-center">
            <Home size={16} className="mr-1" />
            Root
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {!isRoot && folderPath.map((folder, index) => {
          const isLast = index === folderPath.length - 1;
          
          return (
            <React.Fragment key={folder.id}>
              <BreadcrumbSeparator>
                <ChevronRight size={16} />
              </BreadcrumbSeparator>
              
              {isLast ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{folder.name}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigateToFolder(folder.id)}>
                    {folder.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTrail;
