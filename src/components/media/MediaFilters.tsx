
import React, { useState } from 'react';
import { Search, SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMediaLibrary } from '@/contexts/MediaLibraryContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MediaFilters: React.FC = () => {
  const { 
    setSearchQuery, 
    searchQuery, 
    viewMode, 
    setViewMode, 
    sortBy, 
    setSortBy, 
    sortDirection, 
    setSortDirection 
  } = useMediaLibrary();
  
  const [localSearch, setLocalSearch] = useState(searchQuery);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <form onSubmit={handleSearchSubmit} className="flex-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search files and folders..."
            className="pl-8"
            value={localSearch}
            onChange={handleSearchChange}
          />
        </div>
      </form>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex gap-1">
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Filter & Sort</span>
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => setSortBy('name')}
              className={sortBy === 'name' ? 'bg-muted' : ''}
            >
              Name
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setSortBy('date')}
              className={sortBy === 'date' ? 'bg-muted' : ''}
            >
              Date uploaded
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setSortBy('size')}
              className={sortBy === 'size' ? 'bg-muted' : ''}
            >
              File size
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setSortBy('type')}
              className={sortBy === 'type' ? 'bg-muted' : ''}
            >
              File type
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Direction</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => setSortDirection('asc')}
              className={sortDirection === 'asc' ? 'bg-muted' : ''}
            >
              Ascending
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setSortDirection('desc')}
              className={sortDirection === 'desc' ? 'bg-muted' : ''}
            >
              Descending
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="flex border rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            className={`px-2 rounded-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`px-2 rounded-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MediaFilters;
