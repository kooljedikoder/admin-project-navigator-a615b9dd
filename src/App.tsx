
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
import MediaLibrary from "./pages/admin/MediaLibrary";
import UsersAdmin from "./pages/admin/UsersAdmin";
import SettingsAdmin from "./pages/admin/SettingsAdmin";
import Beginning from "./pages/site/Beginning";
import WhoWeAre from "./pages/site/WhoWeAre";
import WhatWeDo from "./pages/site/WhatWeDo";
import WhoWeServe from "./pages/site/WhoWeServe";
import OurProcess from "./pages/site/OurProcess";
import OurApproach from "./pages/site/OurApproach";
import Contact from "./pages/site/Contact";
import Blog from "./pages/site/Blog";
import CoreValues from "./pages/site/CoreValues";
import MAFoundation from "./pages/site/MAFoundation";

// Import Beginning subpages
import FoundingStory from "./pages/site/beginning/FoundingStory";
import Heritage from "./pages/site/beginning/Heritage";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Main Site Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Beginning section and subpages */}
          <Route path="/beginning" element={<Beginning />} />
          <Route path="/beginning/founding-story" element={<FoundingStory />} />
          <Route path="/beginning/heritage" element={<Heritage />} />
          {/* We'll add more subpages as they're created */}
          
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are/core-values" element={<CoreValues />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ma-foundation" element={<MAFoundation />} />
          
          {/* Admin Routes */}
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
          <Route path="/admin/media" element={<MediaLibrary />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/settings" element={<SettingsAdmin />} />
          
          {/* Legacy Pages Route */}
          <Route path="/pages/:slug" element={<SitePages />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
