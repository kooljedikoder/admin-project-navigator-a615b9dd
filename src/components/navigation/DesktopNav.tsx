
import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Layout, PenTool, Code, Monitor, Briefcase, Settings, Book, Users, Building, Rocket, Trophy, Phone } from 'lucide-react';
import { cn } from "@/lib/utils";
import { initialMenuItems } from '@/data/menuData';
import NavModal from './NavModal';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent = {
    'beginning': {
      title: 'In the Beginning',
      description: 'Discover our journey from the start and learn about our foundation.',
      sideImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      subLinks: [
        {
          id: 'our-story',
          label: 'Our Story',
          url: '/beginning#our-story',
          icon: <Book size={24} />,
          description: 'The beginning of our journey and founding story'
        },
        {
          id: 'our-heritage',
          label: 'Our Heritage',
          url: '/beginning#our-heritage',
          icon: <Trophy size={24} />,
          description: 'Our rich history and traditional values'
        },
        {
          id: 'our-evolution',
          label: 'Our Evolution',
          url: '/beginning#our-evolution',
          icon: <Rocket size={24} />,
          description: 'How we\'ve grown and adapted over time'
        },
        {
          id: 'key-milestones',
          label: 'Key Milestones',
          url: '/beginning#key-milestones',
          icon: <Trophy size={24} />,
          description: 'Significant achievements in our journey'
        },
        {
          id: 'founding-principles',
          label: 'Founding Principles',
          url: '/beginning#founding-principles',
          icon: <Book size={24} />,
          description: 'The core values that guide us'
        },
        {
          id: 'faq',
          label: 'FAQ',
          url: '/beginning#faq',
          icon: <Book size={24} />,
          description: 'Frequently asked questions about our history'
        }
      ]
    },
    'who-we-are': {
      title: 'Who We Are',
      description: 'Get to know our team, culture, and values that drive us forward.',
      sideImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      subLinks: [
        {
          id: 'core-values',
          label: 'Our Core Values',
          url: '/who-we-are/core-values',
          icon: <Trophy size={24} />,
          description: 'The principles that guide our work'
        },
        {
          id: 'our-culture',
          label: 'Our Culture',
          url: '/who-we-are#our-culture',
          icon: <Users size={24} />,
          description: 'The environment we create together'
        },
        {
          id: 'our-team',
          label: 'Our Team',
          url: '/who-we-are#our-team',
          icon: <Users size={24} />,
          description: 'Meet the people behind our success'
        },
        {
          id: 'gallery',
          label: 'Gallery',
          url: '/who-we-are#gallery',
          icon: <Layout size={24} />,
          description: 'Visual journey through our work'
        },
        {
          id: 'our-blog',
          label: 'Our Blog',
          url: '/blog',
          icon: <Book size={24} />,
          description: 'Latest insights and updates'
        },
        {
          id: 'rate-us',
          label: 'Rate Us',
          url: '/who-we-are#rate-us',
          icon: <Trophy size={24} />,
          description: 'Share your experience with us'
        }
      ]
    },
    'what-we-do': {
      title: 'What We Do',
      description: 'Explore our comprehensive range of services and solutions.',
      sideImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      subLinks: [
        {
          id: '1',
          label: 'Retail & Brand Space Design',
          url: '/what-we-do#retail-design',
          icon: <Layout size={24} />,
          description: 'Transform your physical spaces'
        },
        {
          id: '2',
          label: 'Advertising & Brand Development',
          url: '/what-we-do#advertising',
          icon: <PenTool size={24} />,
          description: 'Strategic brand solutions'
        },
        {
          id: '3',
          label: 'Websites & Apps Development',
          url: '/what-we-do#web-development',
          icon: <Code size={24} />,
          description: 'Custom digital solutions'
        },
        {
          id: '4',
          label: 'Digital Signage & OOH',
          url: '/what-we-do#digital-signage',
          icon: <Monitor size={24} />,
          description: 'Impactful digital displays'
        },
        {
          id: '5',
          label: 'Project Management',
          url: '/what-we-do#project-management',
          icon: <Briefcase size={24} />,
          description: 'Expert project execution'
        },
        {
          id: '6',
          label: 'A.I. & Brand Transformation',
          url: '/what-we-do#ai-transformation',
          icon: <Settings size={24} />,
          description: 'AI-powered solutions'
        }
      ]
    },
    'who-we-serve': {
      title: 'When & For Whom',
      description: 'See how we serve different industries and organizations.',
      sideImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      subLinks: [
        {
          id: 'financial',
          label: 'Financial Institutions',
          url: '/who-we-serve#financial',
          icon: <Building size={24} />,
          description: 'Banking and financial services'
        },
        {
          id: 'telecom',
          label: 'Telecommunication Companies',
          url: '/who-we-serve#telecom',
          icon: <Phone size={24} />,
          description: 'Telecom industry solutions'
        },
        {
          id: 'manufacturers',
          label: 'Mobile & PC Manufacturers',
          url: '/who-we-serve#manufacturers',
          icon: <Monitor size={24} />,
          description: 'Hardware manufacturing sector'
        },
        {
          id: 'government',
          label: 'Government and NGOs',
          url: '/who-we-serve#government',
          icon: <Building size={24} />,
          description: 'Public sector solutions'
        },
        {
          id: 'business',
          label: 'Large & Small Business',
          url: '/who-we-serve#business',
          icon: <Briefcase size={24} />,
          description: 'Solutions for all business sizes'
        },
        {
          id: 'retail',
          label: 'Retail & Hospitality',
          url: '/who-we-serve#retail',
          icon: <Layout size={24} />,
          description: 'Retail and hospitality sector'
        }
      ]
    },
    'our-process': {
      title: 'Where We Shine',
      description: 'Our proven approach to delivering exceptional results.',
      sideImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      subLinks: [
        {
          id: 'consultation',
          label: 'Initial Consultation',
          url: '/our-process#consultation',
          icon: <Users size={24} />,
          description: 'Understanding your needs'
        },
        {
          id: 'kickoff',
          label: 'Project Kickoff Speed',
          url: '/our-process#kickoff',
          icon: <Rocket size={24} />,
          description: 'Quick and efficient start'
        },
        {
          id: 'design',
          label: 'Design, Develop & Deploy',
          url: '/our-process#design',
          icon: <Layout size={24} />,
          description: 'End-to-end implementation'
        },
        {
          id: 'transformation',
          label: 'Brand Transformation',
          url: '/our-process#transformation',
          icon: <Settings size={24} />,
          description: 'Complete brand evolution'
        },
        {
          id: 'enhancing',
          label: 'Enhancing Solutions',
          url: '/our-process#enhancing',
          icon: <Settings size={24} />,
          description: 'Improving existing systems'
        },
        {
          id: 'solving',
          label: 'Solving Problems',
          url: '/our-process#solving',
          icon: <Briefcase size={24} />,
          description: 'Strategic problem-solving'
        }
      ]
    },
    'our-approach': {
      title: 'Why Choose Us',
      description: 'Discover what makes our approach unique and effective.',
      sideImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      subLinks: [
        {
          id: 'strategy',
          label: 'Our 4D Strategy',
          url: '/our-approach#strategy',
          icon: <Settings size={24} />,
          description: 'Our proven methodology'
        },
        {
          id: 'expertise',
          label: 'Our Expertise',
          url: '/our-approach#expertise',
          icon: <Trophy size={24} />,
          description: 'Industry knowledge'
        },
        {
          id: 'innovation',
          label: 'Our Innovation',
          url: '/our-approach#innovation',
          icon: <Rocket size={24} />,
          description: 'Cutting-edge solutions'
        },
        {
          id: 'partnership',
          label: 'Our Partnership',
          url: '/our-approach#partnership',
          icon: <Users size={24} />,
          description: 'Collaborative approach'
        },
        {
          id: 'support',
          label: 'Our Advice & Support',
          url: '/our-approach#support',
          icon: <Phone size={24} />,
          description: 'Ongoing assistance'
        },
        {
          id: 'success-stories',
          label: 'Success Stories',
          url: '/our-approach#success-stories',
          icon: <Trophy size={24} />,
          description: 'Client success cases'
        }
      ]
    },
    'contact': {
      title: 'How to Reach Us',
      description: 'Get in touch with us through various channels.',
      sideImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a',
      subLinks: [
        {
          id: 'contact-info',
          label: 'Contact by Email/Phone',
          url: '/contact#contact-info',
          icon: <Phone size={24} />,
          description: 'Direct communication channels'
        },
        {
          id: 'callback',
          label: 'Request Callback',
          url: '/contact#callback',
          icon: <Phone size={24} />,
          description: 'We\'ll call you back'
        },
        {
          id: 'appointment',
          label: 'Book Appointment',
          url: '/contact#appointment',
          icon: <Layout size={24} />,
          description: 'Schedule a meeting'
        },
        {
          id: 'whatsapp',
          label: 'WhatsApp Chat',
          url: '/contact#whatsapp',
          icon: <Phone size={24} />,
          description: 'Instant messaging support'
        },
        {
          id: 'careers',
          label: 'Apply for a Career',
          url: '/contact#careers',
          icon: <Briefcase size={24} />,
          description: 'Join our team'
        },
        {
          id: 'visit',
          label: 'Visit Our Office',
          url: '/contact#visit',
          icon: <Building size={24} />,
          description: 'Our office location'
        }
      ]
    }
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
