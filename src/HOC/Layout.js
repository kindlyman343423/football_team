import React from 'react'
import Header from '../Components/Header_Footer/Header'
import Footer from '../Components/Header_Footer/Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
