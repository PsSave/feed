import { useState } from "react";
import { Comment } from "./Comment";
import style from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  function handleCreatedNewComment(event) {
    event.preventDefault();
    if(newCommentText !== '') {
      setComments([...comments, newCommentText]);
      setNewCommentText('');

    }

  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deletedComment(commentToDeleted) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDeleted;
    })
    setComments(commentsWithoutDeletedOne);
  }
  
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src={author.avatarUrl} alt="" />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime="2022-05-02">{publishedDateFormatted}</time>
      </header>
      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreatedNewComment} className={style.commentForms}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" placeholder="Escreva um comentário..." value={newCommentText} onChange={handleNewCommentChange}/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return  <Comment 
                          key={comment} 
                          content={comment} 
                          onDeletedComment={deletedComment}
                  />;
        })}
      </div>
    </article>
  );
}
