import React from 'react';
import {Header} from './components/Header'
import style from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/105433272?v=4",
      name: "Pedro Samuel",
      role: "Desenvolvedor Web"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-03-05 20:00:10'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://pps.whatsapp.net/v/t61.24694-24/367183189_3563412233873856_3448296222221451456_n.jpg?ccb=11-4&oh=01_AdSl1rSf-TVxzA-BBt9z0UE2_o-qUx2TC5sbN2Dvj5qVog&oe=64E89049",
      name: "Camila Eduarda",
      role: "Analista"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-08-05 20:00:10'),
  }
];

const App = () => {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return <Post 
                      key={post.id}
                      author={post.author}
                      content={post.content}
                      publishedAt={post.publishedAt}

                    />
            })
          }
        </main>
      </div>
      
    </div>
  );
}

export default App;

