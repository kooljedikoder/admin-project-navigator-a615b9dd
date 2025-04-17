
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import WebsitePreview from '@/components/admin/WebsitePreview';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        <WebsitePreview 
          title="Website Frontend Preview" 
          description="View and preview your website as visitors will see it. Make changes in the admin panel to update the frontend."
          previewLink="/"
        />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
