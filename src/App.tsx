// import { useState } from 'react'
import { Hero, About} from "./components/root";
import "./App.css";
import MainLayout from "./layouts/MainLayout";


export default function App() {
  return (
    <div className="container">
    
      <MainLayout>
        <Hero/>
        <About/>
      </MainLayout>
  

    </div>
  );
}
