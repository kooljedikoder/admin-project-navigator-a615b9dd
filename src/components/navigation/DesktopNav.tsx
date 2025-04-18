
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { initialMenuItems } from '@/data/menuData';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  return (
    <nav className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList className="justify-end">
          {initialMenuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              {item.children.length > 0 ? (
                <>
                  <NavigationMenuTrigger 
                    className={`
                      text-white
                      hover:text-blue-200 
                      bg-transparent 
                      hover:bg-transparent
                      focus:bg-transparent
                      font-light
                    `}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-sm">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={child.url}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-blue-600 font-light"
                            >
                              <div className="text-sm font-light leading-none">{child.label}</div>
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
                      text-white
                      hover:text-blue-200
                      bg-transparent 
                      hover:bg-transparent
                      focus:bg-transparent
                      font-light
                    `,
                  )}
                >
                  {item.label}
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
