
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProjectsAdmin from "./pages/admin/ProjectsAdmin";
import HeroAdmin from "./pages/admin/HeroAdmin";
import SiteMap from "./pages/admin/SiteMap";
import AddProject from "./pages/admin/AddProject";
import EditProject from "./pages/admin/EditProject";
import PagesAdmin from "./pages/admin/PagesAdmin";
import AddPage from "./pages/admin/AddPage";
import EditPage from "./pages/admin/EditPage";
import MenuAdmin from "./pages/admin/MenuAdmin";
import SitePages from "./pages/SitePages";
import BlogAdmin from "./pages/admin/BlogAdmin";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<ProjectsAdmin />} />
          <Route path="/admin/hero" element={<HeroAdmin />} />
          <Route path="/admin/sitemap" element={<SiteMap />} />
          <Route path="/admin/projects/add" element={<AddProject />} />
          <Route path="/admin/projects/edit/:id" element={<EditProject />} />
          <Route path="/admin/pages" element={<PagesAdmin />} />
          <Route path="/admin/pages/add" element={<AddPage />} />
          <Route path="/admin/pages/edit/:id" element={<EditPage />} />
          <Route path="/admin/menus" element={<MenuAdmin />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
          <Route path="/pages/:slug" element={<SitePages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
