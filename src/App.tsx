// import { useState } from 'react'
import { Header, Hero, About, Projects, Footer } from './components/root';
import './App.css'


export default function App() {
  

  return (
    <div className='container'>
       <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}


