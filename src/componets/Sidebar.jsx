import React from 'react'
import { Link } from 'react-router-dom'
import { User, Search, CheckCircle, FileText, LogOut } from 'lucide-react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";


const Sidebar = () => {
  return (
    <Card className="w-full h-screen max-w-[20rem] p-4 shadow-xl shadow-gray-200">
    <div className="flex justify-center p-5">
        <img src="/3.png" alt="Logo" className="w-44 h-full "/>
    </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <User className="h-5 w-5" />
          </ListItemPrefix>
          Cadastros
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Search className="h-5 w-5" />
          </ListItemPrefix>
          Consulta Prévia
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CheckCircle className="h-5 w-5" />
          </ListItemPrefix>
          Análise e Aprovação
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FileText className="h-5 w-5" />
          </ListItemPrefix>
          Emissão de Documentos
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <LogOut className="h-5 w-5" />
          </ListItemPrefix>
          Sair
        </ListItem>
      </List>
    </Card>

    // <div className="w-64 h-screen bg-aprov-100 text-aprov-500 z-20">
    //   <div className="flex justify-center p-5">
    //   <img src="/3.png" alt="Logo" className="w-44 h-full "/>
    //   </div>
    //   <ul className="mt-6">
    //     <li className="p-4 hover:bg-cinzaEscuro hover:text-branco font-montserrat duration-300 cursor-pointer text-preto">
    //       <Link to="/usuarios" className="flex items-center">
    //         <User size={24} className="mr-2" />
    //         <span>Cadastros</span>
    //       </Link>
    //     </li>
    //     <li className="p-4 hover:bg-cinzaEscuro hover:text-branco font-montserrat duration-300 cursor-pointer text-preto">
    //       <Link to="/consulta-previa" className="flex items-center">
    //         <Search size={24} className="mr-2" />
    //         <span>Consulta prévia</span>
    //       </Link>
    //     </li>
    //     <li className="p-4 hover:bg-cinzaEscuro hover:text-branco font-montserrat duration-300 cursor-pointer text-preto">
    //       <Link to="/analise-aprovacao" className="flex items-center">
    //         <CheckCircle size={24} className="mr-2" />
    //         <span>Análise e aprovação</span>
    //       </Link>
    //     </li>
    //     <li className="p-4 hover:bg-cinzaEscuro hover:text-branco font-montserrat duration-300 cursor-pointer text-preto">
    //       <Link to="/emissao-documentos" className="flex items-center">
    //         <FileText size={24} className="mr-2" />
    //         <span>Emissão de documentos</span>
    //       </Link>
    //     </li>
    //     <li className="p-4 hover:bg-cinzaEscuro font-montserrat duration-300 cursor-pointer text-laranja mt-auto">
    //       <Link to="/logout" className="flex items-center">
    //         <LogOut size={24} className="mr-2"/>
    //         <span>Sair</span>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Sidebar