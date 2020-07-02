import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/images/darth-vader.svg'
import api from '../../services/api';


interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {

  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    api.get('posts').then(({ data }) => {
      setPosts(data)
    });
  }, []);

  return (
    <div id="page-posts">
      <img src={logo} className="logo" alt="ProjetoFramework" />
      <header>
        <Link to="/">
          <FiArrowDownLeft />
          Home
        </Link>
        <Link to="/albuns">
          Albuns
        </Link>
        <Link to="/todos">
          TO-DOs
        </Link>
      </header>
      <div id="posts">
        <h1>Postagens</h1>
        <div className="field">
          <ul className="items-post">
            {posts.map(posts => (
              <li key={posts.id}>
                <h3>{posts.title}</h3>
                <hr />
                <p>{posts.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Posts