
import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const FileUploader: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addMediaItem, currentFolder } = useMediaLibrary();
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const simulateUpload = (file: File, id: string) => {
    setIsUploading(true);
    setUploadProgress(prev => ({ ...prev, [id]: 0 }));
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[id] || 0;
        const newProgress = Math.min(currentProgress + 10, 100);
        
        // When upload completes
        if (newProgress === 100) {
          clearInterval(interval);
          
          // Wait a bit before finalizing
          setTimeout(() => {
            setUploadProgress(prev => {
              const newState = { ...prev };
              delete newState[id];
              return newState;
            });
            
            if (Object.keys(uploadProgress).length <= 1) {
              setIsUploading(false);
            }
          }, 500);
        }
        
        return { ...prev, [id]: newProgress };
      });
    }, 300);
  };

  const processFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const fileId = `upload-${Date.now()}-${file.name}`;
      
      // Determine file type
      let fileType: 'image' | 'video' | 'document' | 'audio' | 'other' = 'other';
      if (file.type.startsWith('image/')) fileType = 'image';
      else if (file.type.startsWith('video/')) fileType = 'video';
      else if (file.type.startsWith('audio/')) fileType = 'audio';
      else if (
        file.type === 'application/pdf' || 
        file.type.includes('document') || 
        file.type.includes('spreadsheet') ||
        file.type.includes('presentation')
      ) fileType = 'document';
      
      // Start simulated upload
      simulateUpload(file, fileId);
      
      // Create image URL for preview (only for images)
      const fileUrl = fileType === 'image' ? URL.createObjectURL(file) : '';
      
      // After upload completes
      setTimeout(() => {
        addMediaItem({
          name: file.name,
          type: fileType,
          url: fileUrl || `/uploads/${file.name}`,
          thumbnailUrl: fileType === 'image' ? fileUrl : undefined,
          size: file.size,
          dimensions: fileType === 'image' ? { width: 0, height: 0 } : undefined,
          tags: [],
          folder: currentFolder,
        });
        
        toast({
          title: 'File uploaded',
          description: `${file.name} has been uploaded successfully.`,
        });
      }, files.length * 500 + 1000); // Delay based on number of files
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
      // Reset the input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        multiple
        className="hidden"
      />
      
      <Card 
        className={`border-2 border-dashed transition-colors ${
          isDragging 
            ? 'border-primary bg-primary/5' 
            : 'border-border hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <CardContent className="flex flex-col items-center justify-center p-6 text-center cursor-pointer">
          <Upload size={40} className="mb-2 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-1">
            Drag & drop files here
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            or click to browse
          </p>
          <Button type="button" variant="outline">
            Select Files
          </Button>
        </CardContent>
      </Card>
      
      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Uploading files...</h4>
          
          {Object.entries(uploadProgress).map(([id, progress]) => (
            <div key={id} className="bg-background border rounded-md p-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm truncate max-w-[200px]">
                  {id.split('-').slice(2).join('-')}
                </span>
                <span className="text-xs text-muted-foreground">{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
