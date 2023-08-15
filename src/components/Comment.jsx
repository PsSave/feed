import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment({content}) {
  return (
    <div className={style.comment}>
      <img src="https://avatars.githubusercontent.com/u/105433272?v=4" alt="" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header className={style.commentInfo}>
            <div className={style.author}>
              <strong>Pedro Samuel</strong>
              <time dateTime='2022-05-02'>Cerca de 1h atrás</time>
            </div>
            <button>
              <Trash  size={24}/>
            </button>
          </header>
          <p>{content}</p>

        </div>


        <div className={style.like}>
          <button>
            <ThumbsUp size={20} /> Aplaudir<span>20</span>
          </button>
          
        </div>
      </div>
      
    </div>
  )
}