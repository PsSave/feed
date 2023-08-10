import React from 'react';
import {Header} from './components/Header'
import style from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
const App = () => {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
      
    </div>
  );
}

export default App;

