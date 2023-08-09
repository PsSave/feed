import React from 'react'
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover}
        src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="banner do usuário" 
      />

      <div className={style.profile}>
        <img src="https://avatars.githubusercontent.com/u/105433272?v=4" alt="" />
        <strong>Pedro Samuel</strong>
        <span>Desenvolvedor Web</span>
      </div>

      <footer>
       
        <a href="#">  <PencilLine size={20}/> Editar seu Perfil </a>
      </footer>
    </aside>
  )
}