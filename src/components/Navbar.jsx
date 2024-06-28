import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <div className='mx-auto w-full max-w-7xl sm:flex sm:justify-between py-3 px-4 border-b'>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>

  )
}

export default Navbar