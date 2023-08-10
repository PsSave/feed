import style from './Post.module.css'
export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://avatars.githubusercontent.com/u/105433272?v=4" alt="" />
          <div className={style.authorInfo}>
            <strong>Pedro Samuel</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </div>
        <time dateTime='2022-05-02'>Publicado há 1h</time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href=""> jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
      <div className={style.commentForms}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />
        <button type='submit'>Publicar</button>
      </div>
    </article>
  )
}