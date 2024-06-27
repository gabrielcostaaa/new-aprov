import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import UserList from './componets/UserList'
import Sidebar from './componets/Sidebar'
import axios from 'axios'
import './App.css'

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
  <div className=''>
    <Outlet />
    <Sidebar />
  </div>

);
}

export default App
