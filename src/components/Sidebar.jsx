import React, { useState, useContext, createContext } from 'react';
import { ChevronFirst, ChevronLast } from 'lucide-react';

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
      <nav className={`h-full flex flex-col bg-white shadow-lg ${expanded ? 'w-64' : 'w-20'} transition-all`}>
        <div className='p-6 pb-2 flex justify-between items-center'>
          <img 
            src="/5.png" 
            alt="Logo Small" 
            className={`overflow-hidden transition-all ${expanded ? 'w-10' : 'w-8'}`}
          />
          <img 
            src="/logo-sidebar.png" 
            alt="Logo Large" 
            className={`overflow-hidden transition-all ${expanded ? 'w-24' : 'w-0'}`}
          />
          <button onClick={() => setExpanded(!expanded)} className='p-1.5 rounded-lg bg-aprov-50 text-aprov-500 hover:bg-aprov-200'>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-4 font-medium rounded-md cursor-pointer 
        transition-colors
        ${active ? 'bg-aprov-500 text-aprov-50' : 'hover:bg-aprov-50 hover:text-aprov-500'}
      `}
    >
      <div className='flex items-center'>
        <span className={`transition-all ${expanded ? 'w-6' : 'w-6'}`}>{icon}</span>
        <span className={`ml-4 overflow-hidden transition-all ${expanded ? 'inline-block' : 'hidden'}`}>{text}</span>
      </div>
      {alert && (
        <div className={`absolute right-2 w-1.5 h-1.5 rounded-full bg-aprov ${expanded ? '' : 'top-2'}`}></div>
      )}
    </li>
  );
}

export default Sidebar;

