import { LimelightNav, type NavItem } from "@/components/ui/limelight-nav";
import { User, Briefcase, Mail, FileText } from 'lucide-react';

const portfolioNavItems: NavItem[] = [
  { 
    id: 'about', 
    icon: <User />, 
    label: 'About', 
    onClick: () => {
      window.parent.postMessage({ type: 'scroll-to', target: 'about' }, '*');
    } 
  },
  { 
    id: 'projects', 
    icon: <Briefcase />, 
    label: 'Work', 
    onClick: () => {
      window.parent.postMessage({ type: 'scroll-to', target: 'projects' }, '*');
    } 
  },
  { 
    id: 'contact', 
    icon: <Mail />, 
    label: 'Contact', 
    onClick: () => {
      window.parent.postMessage({ type: 'scroll-to', target: 'contact' }, '*');
    } 
  },
  { 
    id: 'cv', 
    icon: <FileText />, 
    label: 'CV', 
    onClick: () => {
      window.parent.postMessage({ type: 'scroll-to', target: 'cv' }, '*');
    } 
  },
];

export const PortfolioNavbar = () => {
  return (
    <LimelightNav 
      className="bg-transparent border-none h-full" 
      items={portfolioNavItems} 
      limelightClassName="bg-[#0F0F0D] shadow-[0_50px_15px_rgba(15,15,13,0.4)]"
      iconClassName="text-[#0F0F0D]"
    />
  );
};
