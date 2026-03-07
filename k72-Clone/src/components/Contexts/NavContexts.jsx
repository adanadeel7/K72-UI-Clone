import React, { createContext, useState } from 'react'
export const NavbarContext = createContext()

function NavContexts({children}) {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <NavbarContext.Provider value={[navOpen,setNavOpen]}>
      <div>{children}</div>
    </NavbarContext.Provider>
  )
}

export default NavContexts