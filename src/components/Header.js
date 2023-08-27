import { Button } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Incident Tracker</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Button className='border-sky-400'>Login</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header