import React from 'react';
import {Header} from './components/Header'
import style from './App.module.css'
import { Sidebar } from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
                
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi doloremque dolor corrupti molestias. Eos quam vel, voluptatum aut, dignissimos enim magnam quibusdam at pariatur delectus sint nam. Aliquam, atque?
        </main>
      </div>
      
    </div>
  );
}

export default App;

