import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <ThemeSwitcher />
      <Footer />
    </>
  )
}

export default Layout;
