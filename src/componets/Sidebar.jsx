import React, { Children, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronFirst, ChevronLast, User, Search, CheckCircle, FileText, LogOut } from 'lucide-react'


const Sidebar = ({children}) => {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className='h-screen'>
      <nav className='h-full w-64 flex flex-col bg-white shadow-lg shadow-gray'>
        <div className='p-6 pb-2 flex justify-between items-center'>
        <img 
        src="/5.png" 
        alt="" 
        className={`overflow-hidden transition-all ${expanded ? "w-10" : "w-0"}`}/>
        <img 
        src="/4.png" 
        alt="Logo" 
        className={`overflow-hidden transition-all ${expanded ? "w-24" : "w-0"}`}/>
        <button onClick={() => setExpanded(aux => !aux)} className=' p-1.5 rounded-lg bg-aprov-50 text-aprov-500 hover:bg-aprov-200'>
          {expanded ? <ChevronFirst/> : <ChevronLast/>}
        </button>
        </div>

        <ul className='flex-1 px-3'>{ children }</ul>


      </nav>

    </aside>

  )
}

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-4 font-medium rounded-md cursor-pointer 
        transition-colors
        ${active ? 'bg-aprov-500 text-aprov-50' : 'hover:bg-aprov-50 hover:text-aprov-500'}
      `}
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
      {alert && (
        <div className="absolute right-2 w-1.5 h-1.5 rounded bg-aprov"></div>
      )}
    </li>
  );
}


export default Sidebar