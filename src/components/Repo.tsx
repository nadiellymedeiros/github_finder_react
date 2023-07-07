import { RepoProps } from "../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import classes from "./Repo.module.css";
import Like from "./Like";

const Repo = ({
  id,
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  const { repositoryLikes, toggleLike } = Like();

  const isLiked = repositoryLikes.find((r) => r.id === id)?.liked;

  return (
    <div className={classes.repo}>
      <div className={classes.like}>
        <button onClick={() => toggleLike(id)}>
          {isLiked ? "Descurtir" : "Curtir"}
        </button>
      </div>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={classes.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
