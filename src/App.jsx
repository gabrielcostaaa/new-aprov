import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import UserList from './components/UserList'
import Sidebar, { SidebarItem } from './components/Sidebar'
import Navbar from './components/Navbar'
import { LayoutDashboard, FileSearch, PencilRuler, HardHat, ShieldPlus, HousePlus, LogOut, Users } from 'lucide-react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

function App() {
// TODO continuar com listagem de usuários
//   const [count, setCount] = useState(0)
//   const [users, setUsers] = useState([])

// useEffect(() => {
//   api.get('/users').then( (response) => {
//     setUsers(response.data.users)
//   }).catch(error => {
//     console.error("deu um problema", error)
//   })
// }, [])

return (
  <div className='bg-aprov-50 flex'>
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard size={30}/>}
        text="Menu Principal"
        active
      />
      <SidebarItem
        icon={<FileSearch size={30}/>}
        text="Consulta Prévia"
        alert
      />
      <SidebarItem
        icon={<PencilRuler size={30}/>}
        text="Análise de Projetos"
      />
      <SidebarItem
        icon={<HardHat size={30}/>}
        text="Alvará de Construção"
        alert
      />
      <SidebarItem
        icon={<ShieldPlus size={30}/>}
        text="Vigilância Sanitária"
      />
      <SidebarItem
        icon={<HousePlus size={30}/>}
        text="Habite-se"
      />
      <hr className='my-6 border-aprov-50'/>
      <SidebarItem
        icon={<Users size={30}/>}
        text="Cadastros"
      />
      <SidebarItem
        icon={<LogOut size={30}/>}
        text="Sair"
      />
    </Sidebar>
    <Navbar/>
    <Outlet />
  </div>

);
}

export default App
