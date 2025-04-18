
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Book, Users, Grid, Handshake, Compass, Star, Phone } from 'lucide-react';
import { initialMenuItems } from '@/data/menuData';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const getMenuIcon = (label: string) => {
    switch(label) {
      case 'In the Beginning': return <Book className="mr-2 h-4 w-4" />;
      case 'Who We Are': return <Users className="mr-2 h-4 w-4" />;
      case 'What We Do': return <Grid className="mr-2 h-4 w-4" />;
      case 'When & For Whom': return <Handshake className="mr-2 h-4 w-4" />;
      case 'Where We Shine': return <Compass className="mr-2 h-4 w-4" />;
      case 'Why Choose Us': return <Star className="mr-2 h-4 w-4" />;
      case 'How to Reach Us': return <Phone className="mr-2 h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <nav className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          {initialMenuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              {item.children.length > 0 ? (
                <>
                  <NavigationMenuTrigger 
                    className={`
                      ${isScrolled ? 'text-gray-800' : 'text-white'} 
                      hover:text-blue-600 
                      bg-transparent 
                      hover:bg-transparent
                      focus:bg-transparent
                    `}
                  >
                    <div className="flex items-center">
                      {getMenuIcon(item.label)}
                      {item.label}
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={child.url}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{child.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link 
                  to={item.url} 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    `
                      ${isScrolled ? 'text-gray-800' : 'text-white'} 
                      hover:text-blue-600 
                      bg-transparent 
                      hover:bg-transparent
                      focus:bg-transparent
                    `,
                  )}
                >
                  <div className="flex items-center">
                    {getMenuIcon(item.label)}
                    {item.label}
                  </div>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
