import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Briefcase, Code, Layout, Monitor, Settings, PenTool } from 'lucide-react';
import { cn } from "@/lib/utils";
import { initialMenuItems } from '@/data/menuData';
import NavModal from './NavModal';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent = {
    'what-we-do': {
      title: 'Our Services',
      description: 'Explore our comprehensive range of services and solutions.',
      sideImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      subLinks: [
        {
          id: '1',
          label: 'Retail & Brand Space Design',
          url: '/what-we-do#retail-design',
          icon: <Layout size={24} />,
          description: 'Transform your physical spaces into immersive brand experiences'
        },
        {
          id: '2',
          label: 'Advertising & Brand Development',
          url: '/what-we-do#advertising',
          icon: <PenTool size={24} />,
          description: 'Strategic brand development and advertising solutions'
        },
        {
          id: '3',
          label: 'Websites & Apps Development',
          url: '/what-we-do#web-development',
          icon: <Code size={24} />,
          description: 'Custom website and application development solutions'
        },
        {
          id: '4',
          label: 'Digital Signage & OOH',
          url: '/what-we-do#digital-signage',
          icon: <Monitor size={24} />,
          description: 'Impactful digital signage and out-of-home advertising'
        },
        {
          id: '5',
          label: 'Project Management',
          url: '/what-we-do#project-management',
          icon: <Briefcase size={24} />,
          description: 'Expert project planning and execution services'
        },
        {
          id: '6',
          label: 'A.I. & Brand Transformation',
          url: '/what-we-do#ai-transformation',
          icon: <Settings size={24} />,
          description: 'AI-powered solutions for business transformation'
        }
      ]
    },
    'who-we-are': {
      title: 'Who We Are',
      description: 'Discover our journey, values, and the team behind our success.',
      sideImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
      subLinks: [
        {
          id: '1',
          label: 'Our Story',
          url: '/beginning',
          icon: <Layout size={24} />,
          description: 'Learn about our history and journey'
        },
        {
          id: '2',
          label: 'Core Values',
          url: '/who-we-are/core-values',
          icon: <PenTool size={24} />,
          description: 'The principles that guide us'
        },
        {
          id: '3',
          label: 'Our Team',
          url: '/who-we-are/team',
          icon: <Code size={24} />,
          description: 'Meet the people behind our success'
        }
      ]
    },
  };

  return (
    <>
      <nav className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="justify-end">
            {initialMenuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <button
                  onClick={() => setActiveModal(item.id)}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `text-white hover:text-blue-200 bg-transparent hover:bg-transparent focus:bg-transparent font-light`
                  )}
                >
                  {item.label}
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {activeModal && modalContent[activeModal] && (
        <NavModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          {...modalContent[activeModal]}
        />
      )}
    </>
  );
};

export default DesktopNav;
