
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { PlusCircle, Edit, Trash2, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    author: "Jane Smith",
    category: "Development",
    status: "Published",
    date: "2025-04-10",
    readTime: "5 min",
    commentsCount: 12,
    views: 2456
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns for better type safety.",
    author: "John Doe",
    category: "TypeScript",
    status: "Draft",
    date: "2025-04-12",
    readTime: "8 min",
    commentsCount: 0,
    views: 0
  },
  {
    id: 3,
    title: "CSS Grid Mastery",
    excerpt: "Master CSS Grid layout to create complex responsive designs.",
    author: "Alex Johnson",
    category: "CSS",
    status: "Published",
    date: "2025-04-05",
    readTime: "6 min",
    commentsCount: 8,
    views: 1893
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to build web applications that are accessible to everyone.",
    author: "Sam Wilson",
    category: "Accessibility",
    status: "Scheduled",
    date: "2025-04-20",
    readTime: "7 min",
    commentsCount: 0,
    views: 0
  },
  {
    id: 5,
    title: "State Management with Redux",
    excerpt: "Explore state management patterns with Redux and React.",
    author: "Linda Chen",
    category: "Development",
    status: "Published",
    date: "2025-04-01",
    readTime: "10 min",
    commentsCount: 23,
    views: 3240
  }
];

// Mock data for categories
const categories = [
  { id: 1, name: "Development", postsCount: 12 },
  { id: 2, name: "TypeScript", postsCount: 8 },
  { id: 3, name: "CSS", postsCount: 6 },
  { id: 4, name: "Accessibility", postsCount: 5 },
  { id: 5, name: "JavaScript", postsCount: 15 },
  { id: 6, name: "React", postsCount: 10 },
];

const BlogAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "Draft":
        return <Badge variant="outline">Draft</Badge>;
      case "Scheduled":
        return <Badge className="bg-blue-500">Scheduled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <AdminLayout title="Blog Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <p className="text-muted-foreground">
              Manage your blog posts, categories, and comments.
            </p>
          </div>
          <Button asChild className="gap-2">
            <Link to="/admin/blog/add">
              <PlusCircle size={18} />
              <span>New Post</span>
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <div className="relative w-full sm:w-auto flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background" 
              placeholder="Search posts..." 
            />
          </div>
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Filter size={18} />
            <span>Filter</span>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>All Posts</CardTitle>
                <CardDescription>Manage your blog posts.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Title
                          <ArrowUpDown size={14} />
                        </div>
                      </TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1 cursor-pointer">
                          Date
                          <ArrowUpDown size={14} />
                        </div>
                      </TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div>{post.title}</div>
                            <div className="text-sm text-muted-foreground truncate max-w-xs">{post.excerpt}</div>
                          </div>
                        </TableCell>
                        <TableCell>{post.category}</TableCell>
                        <TableCell>{post.author}</TableCell>
                        <TableCell>{getStatusBadge(post.status)}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                  <CardDescription>Manage blog categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <div key={category.id} className="flex justify-between items-center p-3 border rounded-md">
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-muted-foreground">{category.postsCount} posts</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Add Category</CardTitle>
                  <CardDescription>Create a new blog category</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium" htmlFor="category-name">
                        Category Name
                      </label>
                      <input 
                        id="category-name"
                        className="w-full mt-1 rounded-md border border-input px-3 py-2" 
                        placeholder="Enter category name" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="category-description">
                        Description (optional)
                      </label>
                      <Textarea 
                        id="category-description"
                        className="mt-1" 
                        placeholder="Enter category description" 
                      />
                    </div>
                    <Button type="submit">Add Category</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="comments" className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Comment Moderation</CardTitle>
                <CardDescription>Review and moderate blog comments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <div className="relative mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Search className="text-muted-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-1">No pending comments</h3>
                  <p className="text-muted-foreground mb-4">
                    All comments have been moderated. New comments will appear here for review.
                  </p>
                  <Button variant="outline">View All Comments</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Stats</CardTitle>
              <CardDescription>Your blog performance</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Total Posts</dt>
                  <dd className="font-medium">24</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Published</dt>
                  <dd className="font-medium">18</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Drafts</dt>
                  <dd className="font-medium">6</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Categories</dt>
                  <dd className="font-medium">8</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Total Comments</dt>
                  <dd className="font-medium">156</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
              <CardDescription>Most viewed posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts
                  .filter(post => post.status === "Published")
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 3)
                  .map(post => (
                    <div key={post.id} className="border-b pb-3 last:border-0 last:pb-0">
                      <h4 className="font-medium">{post.title}</h4>
                      <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                        <span>{post.views.toLocaleString()} views</span>
                        <span>{post.commentsCount} comments</span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Draft</CardTitle>
              <CardDescription>Create a new post draft</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <input 
                    className="w-full rounded-md border border-input px-3 py-2" 
                    placeholder="Post title" 
                  />
                </div>
                <div>
                  <Textarea 
                    className="min-h-[120px]" 
                    placeholder="Write your thoughts..." 
                  />
                </div>
                <Button type="submit">Save Draft</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogAdmin;
