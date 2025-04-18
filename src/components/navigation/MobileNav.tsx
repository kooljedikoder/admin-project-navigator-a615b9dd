
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, UserRound } from 'lucide-react';
import { initialMenuItems } from '@/data/menuData';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  getMenuIcon: (label: string) => JSX.Element | null;
}

const MobileNav = ({ isOpen, onClose, getMenuIcon }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-[#1704D5]/95 backdrop-blur-sm border-t-0 text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col gap-4">
          {initialMenuItems.map((item) => (
            <div key={item.id}>
              {item.children.length > 0 ? (
                <details className="group">
                  <summary className="font-light text-white hover:text-blue-200 py-2 border-b-0 flex justify-between items-center cursor-pointer">
                    <div className="flex items-center gap-2">
                      {getMenuIcon(item.label)}
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link 
                        key={child.id}
                        to={child.url} 
                        className="block text-white/80 hover:text-white py-1 bg-transparent font-light"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link 
                  to={item.url} 
                  className="font-light text-white hover:text-blue-200 py-2 border-b-0 flex items-center gap-2 bg-transparent"
                  onClick={onClose}
                >
                  {getMenuIcon(item.label)}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-4 flex flex-col gap-4">
            <Link 
              to="/admin"
              className="w-full py-2 flex justify-center items-center gap-2 border border-white/20 rounded-md text-white hover:text-blue-200 bg-transparent font-light"
              onClick={onClose}
            >
              <UserRound size={18} />
              <span>Admin Dashboard</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
