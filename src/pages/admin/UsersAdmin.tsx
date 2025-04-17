
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Pencil, Trash2, ShieldCheck, UserRound, UserCog } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock user data
const mockUsers = [
  {
    id: '1',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2023-04-15 14:30'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2023-04-16 09:15'
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Author',
    status: 'Inactive',
    lastLogin: '2023-03-28 11:45'
  },
  {
    id: '4',
    name: 'Bob Williams',
    email: 'bob.williams@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2023-04-17 08:20'
  }
];

// Mock roles data
const mockRoles = [
  {
    id: '1',
    name: 'Administrator',
    users: 2,
    permissions: ['Manage all content', 'Manage users', 'Manage settings', 'Publish content']
  },
  {
    id: '2',
    name: 'Editor',
    users: 3,
    permissions: ['Edit all content', 'Upload media', 'Publish content']
  },
  {
    id: '3',
    name: 'Author',
    users: 5,
    permissions: ['Create content', 'Upload media', 'Edit own content']
  },
  {
    id: '4',
    name: 'Contributor',
    users: 7,
    permissions: ['Create content', 'Edit own content']
  }
];

const UsersAdmin: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [roles, setRoles] = useState(mockRoles);

  const handleDeleteUser = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      toast.success('User deleted successfully');
    }
  };

  const handleDeleteRole = (id: string) => {
    if (confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter(role => role.id !== id));
      toast.success('Role deleted successfully');
    }
  };

  return (
    <AdminLayout title="User Management">
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">All Users</h2>
              <p className="text-sm text-muted-foreground">Manage user accounts and permissions</p>
            </div>
            <Button className="admin-btn-primary flex items-center gap-1" onClick={() => toast.info('This would open a new user form')}>
              <PlusCircle size={16} />
              <span>Add New User</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Users</CardTitle>
                <CardDescription>Active user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <UserRound className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{users.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Users</CardTitle>
                <CardDescription>Currently active users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <UserCog className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{users.filter(user => user.status === 'Active').length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Admin Users</CardTitle>
                <CardDescription>Users with admin privileges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-8 w-8 text-[hsl(var(--admin-primary))]" />
                  <span className="text-3xl font-bold">{users.filter(user => user.role === 'Administrator').length}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge className={user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toast.info('Edit user details')}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          title="Edit User"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                          title="Delete User"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="roles" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Roles & Permissions</h2>
              <p className="text-sm text-muted-foreground">Manage user roles and access permissions</p>
            </div>
            <Button className="admin-btn-primary flex items-center gap-1" onClick={() => toast.info('This would open a new role form')}>
              <PlusCircle size={16} />
              <span>Add New Role</span>
            </Button>
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role Name</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell>{role.users}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="bg-slate-100">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toast.info('Edit role permissions')}
                          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          title="Edit Role"
                        >
                          <Pencil size={16} />
                        </button>
                        {role.name !== 'Administrator' && (
                          <button
                            onClick={() => handleDeleteRole(role.id)}
                            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                            title="Delete Role"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default UsersAdmin;
