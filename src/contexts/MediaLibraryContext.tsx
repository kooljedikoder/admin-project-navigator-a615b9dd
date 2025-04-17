
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our media items
export type MediaItem = {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document' | 'audio' | 'other';
  url: string;
  thumbnailUrl?: string;
  size: number;
  dimensions?: { width: number; height: number };
  dateUploaded: Date;
  tags: string[];
  folder: string;
};

// Define the folder structure
export type Folder = {
  id: string;
  name: string;
  path: string;
  parent: string | null;
};

type MediaLibraryContextType = {
  mediaItems: MediaItem[];
  folders: Folder[];
  selectedItems: string[];
  currentFolder: string;
  isLoading: boolean;
  searchQuery: string;
  viewMode: 'grid' | 'list';
  sortBy: 'name' | 'date' | 'size' | 'type';
  sortDirection: 'asc' | 'desc';
  addMediaItem: (item: Omit<MediaItem, 'id' | 'dateUploaded'>) => void;
  deleteMediaItems: (ids: string[]) => void;
  selectItem: (id: string) => void;
  deselectItem: (id: string) => void;
  toggleSelectItem: (id: string) => void;
  selectAll: () => void;
  deselectAll: () => void;
  createFolder: (name: string, parent: string | null) => void;
  navigateToFolder: (folderId: string) => void;
  setSearchQuery: (query: string) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  setSortBy: (sortBy: 'name' | 'date' | 'size' | 'type') => void;
  setSortDirection: (direction: 'asc' | 'desc') => void;
  updateMediaItem: (id: string, updates: Partial<MediaItem>) => void;
};

// Sample mock data for demonstration
const mockFolders: Folder[] = [
  { id: 'root', name: 'Root', path: '/', parent: null },
  { id: 'images', name: 'Images', path: '/images', parent: 'root' },
  { id: 'documents', name: 'Documents', path: '/documents', parent: 'root' },
  { id: 'videos', name: 'Videos', path: '/videos', parent: 'root' },
  { id: 'blog', name: 'Blog', path: '/blog', parent: 'root' },
];

const mockMediaItems: MediaItem[] = [
  {
    id: '1',
    name: 'hero-image.jpg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200',
    size: 1024000,
    dimensions: { width: 1920, height: 1080 },
    dateUploaded: new Date('2023-01-15'),
    tags: ['hero', 'homepage'],
    folder: 'images',
  },
  {
    id: '2',
    name: 'about-team.jpg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200',
    size: 2048000,
    dimensions: { width: 1600, height: 900 },
    dateUploaded: new Date('2023-02-10'),
    tags: ['about', 'team'],
    folder: 'images',
  },
  {
    id: '3',
    name: 'project-proposal.pdf',
    type: 'document',
    url: '/documents/project-proposal.pdf',
    size: 5120000,
    dateUploaded: new Date('2023-03-22'),
    tags: ['project', 'proposal'],
    folder: 'documents',
  },
  {
    id: '4',
    name: 'product-demo.mp4',
    type: 'video',
    url: '/videos/product-demo.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200',
    size: 102400000,
    dateUploaded: new Date('2023-04-05'),
    tags: ['product', 'demo'],
    folder: 'videos',
  },
  {
    id: '5',
    name: 'blog-header.jpg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200',
    size: 1536000,
    dimensions: { width: 2000, height: 800 },
    dateUploaded: new Date('2023-05-12'),
    tags: ['blog', 'header'],
    folder: 'blog',
  },
  {
    id: '6',
    name: 'user-guide.pdf',
    type: 'document',
    url: '/documents/user-guide.pdf',
    size: 7680000,
    dateUploaded: new Date('2023-06-18'),
    tags: ['guide', 'documentation'],
    folder: 'documents',
  },
  {
    id: '7',
    name: 'meeting-notes.pdf',
    type: 'document',
    url: '/documents/meeting-notes.pdf',
    size: 512000,
    dateUploaded: new Date('2023-07-25'),
    tags: ['meeting', 'notes'],
    folder: 'documents',
  },
  {
    id: '8',
    name: 'company-logo.png',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200',
    size: 256000,
    dimensions: { width: 500, height: 500 },
    dateUploaded: new Date('2023-08-30'),
    tags: ['logo', 'branding'],
    folder: 'images',
  },
];

const MediaLibraryContext = createContext<MediaLibraryContextType | undefined>(undefined);

export const MediaLibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(mockMediaItems);
  const [folders, setFolders] = useState<Folder[]>(mockFolders);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentFolder, setCurrentFolder] = useState('root');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size' | 'type'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Add a new media item
  const addMediaItem = (item: Omit<MediaItem, 'id' | 'dateUploaded'>) => {
    const newItem: MediaItem = {
      ...item,
      id: Date.now().toString(),
      dateUploaded: new Date(),
    };
    setMediaItems([...mediaItems, newItem]);
  };

  // Delete media items
  const deleteMediaItems = (ids: string[]) => {
    setMediaItems(mediaItems.filter(item => !ids.includes(item.id)));
    setSelectedItems(selectedItems.filter(id => !ids.includes(id)));
  };

  // Select an item
  const selectItem = (id: string) => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Deselect an item
  const deselectItem = (id: string) => {
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  // Toggle item selection
  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      deselectItem(id);
    } else {
      selectItem(id);
    }
  };

  // Select all items in current view
  const selectAll = () => {
    const itemsInCurrentFolder = mediaItems.filter(item => item.folder === currentFolder);
    setSelectedItems(itemsInCurrentFolder.map(item => item.id));
  };

  // Deselect all items
  const deselectAll = () => {
    setSelectedItems([]);
  };

  // Create a new folder
  const createFolder = (name: string, parent: string | null) => {
    const parentFolder = parent ? folders.find(f => f.id === parent) : null;
    const path = parentFolder ? `${parentFolder.path}/${name}` : `/${name}`;
    const newFolder: Folder = {
      id: `folder-${Date.now()}`,
      name,
      path,
      parent,
    };
    setFolders([...folders, newFolder]);
  };

  // Navigate to a specific folder
  const navigateToFolder = (folderId: string) => {
    setCurrentFolder(folderId);
    deselectAll();
  };

  // Update a media item
  const updateMediaItem = (id: string, updates: Partial<MediaItem>) => {
    setMediaItems(mediaItems.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  // Context value
  const value: MediaLibraryContextType = {
    mediaItems,
    folders,
    selectedItems,
    currentFolder,
    isLoading,
    searchQuery,
    viewMode,
    sortBy,
    sortDirection,
    addMediaItem,
    deleteMediaItems,
    selectItem,
    deselectItem,
    toggleSelectItem,
    selectAll,
    deselectAll,
    createFolder,
    navigateToFolder,
    setSearchQuery,
    setViewMode,
    setSortBy,
    setSortDirection,
    updateMediaItem,
  };

  return (
    <MediaLibraryContext.Provider value={value}>
      {children}
    </MediaLibraryContext.Provider>
  );
};

export const useMediaLibrary = () => {
  const context = useContext(MediaLibraryContext);
  if (context === undefined) {
    throw new Error('useMediaLibrary must be used within a MediaLibraryProvider');
  }
  return context;
};
