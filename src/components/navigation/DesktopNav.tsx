
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Book, FileText, Users, Briefcase, PenTool, Lightbulb } from 'lucide-react';
import { cn } from "@/lib/utils";
import { initialMenuItems } from '@/data/menuData';
import NavModal from './NavModal';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Example modal content - this would typically come from your CMS or data source
  const modalContent = {
    'who-we-are': {
      title: 'Who We Are',
      description: 'Discover our journey, values, and the team behind our success.',
      subLinks: [
        {
          id: '1',
          label: 'Our Story',
          url: '/beginning',
          icon: <Book size={24} />,
          description: 'Learn about our history and journey'
        },
        {
          id: '2',
          label: 'Core Values',
          url: '/who-we-are/core-values',
          icon: <Lightbulb size={24} />,
          description: 'The principles that guide us'
        },
        {
          id: '3',
          label: 'Our Team',
          url: '/who-we-are/team',
          icon: <Users size={24} />,
          description: 'Meet the people behind our success'
        }
      ],
      backgroundVideo: '/videos/about-background.mp4' // Optional
    },
    'what-we-do': {
      title: 'What We Do',
      description: 'Explore our comprehensive range of services and solutions.',
      subLinks: [
        {
          id: '1',
          label: 'Services',
          url: '/what-we-do',
          icon: <Briefcase size={24} />,
          description: 'Our comprehensive service offerings'
        },
        {
          id: '2',
          label: 'Projects',
          url: '/what-we-do/projects',
          icon: <PenTool size={24} />,
          description: 'View our successful projects'
        },
        {
          id: '3',
          label: 'Process',
          url: '/our-process',
          icon: <FileText size={24} />,
          description: 'How we deliver results'
        }
      ]
    }
    // Add more modal content for other navigation items
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
