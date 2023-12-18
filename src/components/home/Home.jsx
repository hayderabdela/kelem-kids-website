import React from 'react'
import { Header, ProgramSection, JoinUs } from '../../containers';
import { Navbar, Footer, } from '../../components';



const Home = () => {
  return (
    <div>
      <Navbar color="#b869c1"/>
      <Header />
      <ProgramSection />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default Home
