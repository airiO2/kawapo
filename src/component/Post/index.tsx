import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface PostProps {
  icon: string;
  name: string;
  genre: string;
  post: string;
  text1: string;
  tag: string;
}

const Post = ({ icon, name, post, text1, tag, genre }: PostProps) => {
  return (
    <>
      <div className={styles.head}>
        <Image
          className={styles.image}
          height={30}
          width={30}
          alt="icon"
          src={icon}
        ></Image>
        <div className={styles.name}>{name}</div>
        <div className={styles.genre}>{genre}</div>
      </div>

      <Image
        className={styles.post}
        height={300}
        width={300}
        alt="PostImage"
        src={post}
      ></Image>

      <div className={styles.information}>
        <div>
          <p className={styles.text}>{text1}</p>
          <p></p>
        </div>
        <p className={styles.tag}>#{tag}</p>
      </div>
    </>
  );
};

export default Post;
